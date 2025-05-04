import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ToggleButton from "../buttons/ToggleButton";
import PayPalButton from "../buttons/PaypalButton";
import { supabase } from "../../utils/supabaseClient"; // <-- Supabase Client importieren
import { navigate } from "gatsby"; // <-- Gatsby Navigation importieren

const ProductContent = ({ product }) => {

  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0].label : ""
  );

  // discount code constants
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscountCode, setAppliedDiscountCode] = useState(null);
  const [discountStatus, setDiscountStatus] = useState('idle');
  const [discountErrorMessage, setDiscountErrorMessage] = useState('');
  const [effectivePrice, setEffectivePrice] = useState(product ? product.price : 0);
  const [isDiscountInputVisible, setIsDiscountInputVisible] = useState(false);
  const [userIdentifier, setUserIdentifier] = useState(''); // <-- NEU: State für Namen

  // useEffect to reset the discount code input field when the product changes
  useEffect(() => {
    if (product) {
        setEffectivePrice(product.price);
        setSelectedSize(product.sizes && product.sizes.length > 0 ? product.sizes[0].label : "");
        setDiscountCode('');
        setAppliedDiscountCode(null);
        setDiscountStatus('idle');
        setDiscountErrorMessage('');
        setIsDiscountInputVisible(false);
        setUserIdentifier(''); // <-- NEU: Namen zurücksetzen
    }
  }, [product]);

  // *** HIER: Angepasste Preisformatierung ***
  // Formatiert den *originalen* Preis
  const formattedOriginalPrice = typeof product?.price === 'number'
    ? product.price.toFixed(2)
    : "0.00";

  // Formatiert den *effektiven* Preis (der rabattiert sein könnte)
  const formattedEffectivePrice = typeof effectivePrice === 'number'
    ? effectivePrice.toFixed(2)
    : "0.00";
  // *** ENDE: Angepasste Preisformatierung ***


  // Größenänderung behandeln
  const handleSizeChange = (sizeLabel) => { // Hier kommt das Label (z.B. "M") an
    setSelectedSize(sizeLabel);
  };

  // handle apply code (calls DEPLOYED function) - Unverändert zur letzten Version
  const handleApplyCode = async () => {
    setDiscountStatus('loading');
    setDiscountErrorMessage('');
    setAppliedDiscountCode(null);
    setEffectivePrice(product.price); // Preis zurücksetzen vor Validierung

    // Stelle sicher, dass wir eine Produkt-ID haben (wichtig für den Funktionsaufruf)
    if (!product || !product.id) {
        console.error("Product ID missing for code validation!");
        setDiscountStatus('error');
        setDiscountErrorMessage('Internal Error: Missing Product ID.');
        return;
    }

    try {
      console.log(`Invoking DEPLOYED function 'validate-code' with code: "${discountCode}" and productId: "${product.id}"`);

      // Rufe die DEPLOYTE Edge Function 'validate-code' auf
      // Geht davon aus, dass dein 'supabase' Client (import { supabase } from "../../utils/supabaseClient";)
      // korrekt mit deiner LIVE Supabase URL und dem LIVE Anon Key konfiguriert ist.
      const { data, error: functionError } = await supabase.functions.invoke('validate-code', {
        body: {
          code: discountCode,
          productId: product.id // Übergibt die Produkt-ID an die Funktion
        },
      });

      // Fehler beim Aufrufen der Funktion selbst (Netzwerk, Funktion nicht gefunden etc.)
      if (functionError) {
        console.error("Error invoking Supabase function 'validate-code':", functionError);
        // Gib eine generische Fehlermeldung aus
        throw new Error("Netzwerkfehler oder Funktion nicht erreichbar.");
      }

      console.log("Response from deployed 'validate-code':", data);

      // Verarbeite die Antwort der Funktion (data.valid, data.reason etc.)
      if (data && data.valid === true) {
        // Code ist gültig
        setDiscountStatus('valid');
        setAppliedDiscountCode(discountCode); // Den erfolgreich validierten Code speichern
        setEffectivePrice(0); // Preis auf 0 setzen
        setDiscountErrorMessage('');
      } else {
        // Code ist ungültig oder die Funktion gab einen internen Fehler zurück ({ valid: false, ... })
        setDiscountStatus('invalid');
        // Nutze die detaillierte Nachricht von der Funktion (reason/error), falls vorhanden
        const message = data?.reason || data?.error || 'Code ungültig oder nicht anwendbar.';
        setDiscountErrorMessage(message);
        setEffectivePrice(product.price); // Preis auf Original zurücksetzen
        setAppliedDiscountCode(null);
      }

    } catch (error) {
      // Fängt Fehler vom .invoke() oder manuell geworfene Fehler (z.B. Netzwerk)
      console.error("Error during discount code validation process:", error);
      setDiscountStatus('error');
      // Nutze die Error-Message aus dem Catch-Block
      setDiscountErrorMessage(error.message || 'Fehler bei der Code-Prüfung. Bitte erneut versuchen.');
      setEffectivePrice(product.price); // Sicherstellen, dass Preis zurückgesetzt ist
      setAppliedDiscountCode(null);
    }
  };


    // handler to remove code again
    const handleRemoveCode = () => {
      setDiscountCode('');
      setAppliedDiscountCode(null);
      setDiscountStatus('idle');
      setDiscountErrorMessage('');
      setEffectivePrice(product.price);
      setIsDiscountInputVisible(false);
      setUserIdentifier('');
    };


  // handler purchase success
  const handlePurchaseSuccess = async (options = {}) => {
      const { paypalDetails, userId } = options;
      console.log("Processing purchase success. Options:", options);


    // Check, that product ID is available
    if (!product || !product.id) {
        console.error("Produkt oder Produkt-ID fehlt!");
        alert("Ein interner Fehler ist aufgetreten (Produkt-ID fehlt).");
        return;
    }
    // Makes sure a size is selected, only if size exists
    const hasAnySizesCheck = product.sizes && product.sizes.length > 0; // Local check here
    if (hasAnySizesCheck && !selectedSize) {
       console.error("Keine Größe für den Kauf ausgewählt!");
       alert("Bitte wähle zuerst eine Größe aus.");
       return; // Cancel function
    }


    // Schritt 1: Stock Update (wie bisher)
    try {
        console.log(`Versuche Stock-Update für Produkt ${product.id}, Größe ${selectedSize || 'N/A'}`); // N/A if no size
        // Call the deployed Edge Function 'decrement-stock'
        const { data: updateResult, error: functionError } = await supabase.functions.invoke(
            'decrement-stock', // Name of the Edge Function
            {
                body: { productId: product.id, sizeLabel: selectedSize }, // Send data (selectedSize is "" if no size)
            }
        );

        // Error handling for call and function
        if (functionError) throw functionError;
        if (updateResult && !updateResult.success) {
           throw new Error(updateResult.error || 'Stock update failed.');
        }

        console.log('Stock update erfolgreich:', updateResult);

        // Step 2: Saves orders in Supabase table
        const orderData = {
          product_id: product.id,
          product_name: product.name,
          size_label: selectedSize || null,
          price_paid: effectivePrice,
          discount_code_used: appliedDiscountCode || null,
          paypal_order_id: paypalDetails?.id || null,
          user_identifier: userId || null
        };

        try {
          console.log("Versuche Bestellung in Supabase zu speichern:", orderData);
          const { error: orderError } = await supabase
            .from('orders') // Name of our orders table in Supabase
            .insert([orderData]);

          if (orderError) {
            console.error("Fehler beim Speichern der Bestellung in Supabase:", orderError);
          } else {
            console.log("Bestellung erfolgreich in Supabase gespeichert.");
          }
        } catch(e) {
           console.error("Unerwarteter Fehler beim Speichern der Bestellung:", e);
        }

        // If a code was used, add +1 to the usage counter
        if (appliedDiscountCode) {
            console.log(`Versuche Nutzungszähler für Code ${appliedDiscountCode} zu erhöhen...`);
            try {
                // Calls Edge Function 'increment-discount-usage'
                const { error: incrementError } = await supabase.functions.invoke(
                    'increment-discount-usage', // Name of edge function
                    { body: { code: appliedDiscountCode } }
                );
                if (incrementError) {
                    console.error("Fehler beim Erhöhen des Code-Nutzungszählers:", incrementError);
                } else {
                    console.log(`Aufruf zum Erhöhen des Zählers für ${appliedDiscountCode} gesendet.`);
                }
            } catch (e) {
                // Fängt Fehler beim Aufruf der 'invoke'-Methode selbst ab
                console.error("Unerwarteter Fehler beim Aufruf von increment-discount-usage:", e);
            }
        }


        // Step 3: Navigate to thank you page
        navigate(`/thanks/`);

    } catch (error) {
        // Dieser Catch fängt primär Fehler vom Stock-Update ab
        console.error('Fehler bei der Kaufverarbeitung (Stock-Update):', error);
        // Alert-Nachricht angepasst, um klarzustellen, was schief lief
        alert(`Payment successfull or item free! But there was a problem updating stock: ${error.message}. Error has been logged, you do not have to do anything.`);
        // Trotzdem zur Danke-Seite navigieren, da Zahlung/Anspruch erfolgte. Stock muss ggf. manuell korrigiert werden.
        navigate(`/thanks/`);
    }
  };


  // Check if product exists
  if (!product) {
    return <ErrorMessage>Sorry, this product is not available.</ErrorMessage>;
  }

  // Check if product has any sizes with "stock" > 0 (uses product.sizes)
  const hasSizesWithStock = product.sizes?.some(sizeInfo => sizeInfo.stock > 0);
  // Check if there are any sizes defined for the product
  const hasAnySizes = product.sizes && product.sizes.length > 0; // Definition hier für Nutzung im JSX


  return (
    <ProductContentContainer>
      {/* Produktinfos */}
      <DescriptionGroup>
        <ProductName>{product.name || "Produktname"}</ProductName>
        <ProductDescription>{product.longDescription || "Keine Beschreibung verfügbar."}</ProductDescription>
        <ProductWarning>{product.warning || ""}</ProductWarning>
      </DescriptionGroup>

      {/* Adjusted price display */}
      <Price>
        {discountStatus === 'valid' && appliedDiscountCode ? (
          <>
            <span style={{ textDecoration: 'line-through', opacity: 0.6, marginRight: '8px' }}>
              {formattedOriginalPrice} €
            </span>
            <span style={{ fontWeight: 'bold', color: '#4CAF50' }}>
                {formattedEffectivePrice} €
            </span>
          </>
        ) : (
          // Uses formattedOriginalPrice
          formattedOriginalPrice + " €"
        )}
      </Price>

      {/* Size selection */}
      {hasAnySizes && (
        <SizeSelector>
          <ToggleButton
            label="Size"
            selectedLabel={selectedSize}
            options={product.sizes}
            onChange={handleSizeChange} // this functions sets selectedSize
          />
        </SizeSelector>
      )}

      {/* Discount Code show/hide */}
      {product.price > 0 && (
         <>
           {!isDiscountInputVisible && discountStatus !== 'valid' && (
             <RevealDiscountButton onClick={() => setIsDiscountInputVisible(true)}>
               Received a code from us? Enter here!
             </RevealDiscountButton>
           )}

           {/* Input Field + Buttons (only visible if isDiscountInputVisible is true) */}
           {isDiscountInputVisible && (
              <DiscountSection>
                <DiscountLabel htmlFor="discountCodeInput">Your code</DiscountLabel>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <DiscountInput
                    id="discountCodeInput"
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    placeholder="Code eingeben"
                    disabled={discountStatus === 'valid' || discountStatus === 'loading'}
                    aria-label="Rabattcode Eingabe"
                  />
                  {discountStatus !== 'valid' && (
                    <ApplyButton
                      onClick={handleApplyCode}
                      disabled={!discountCode || discountStatus === 'loading'}
                    >
                      {discountStatus === 'loading' ? 'Checking...' : 'Check'}
                    </ApplyButton>
                  )}
                </div>
                 {/* Statusnachrichten & Entfernen-Button */}
                 {discountStatus === 'loading' && <DiscountMessage type="info">Code wird geprüft...</DiscountMessage>}
                 {discountStatus === 'invalid' && discountErrorMessage && <DiscountMessage type="error">{discountErrorMessage}</DiscountMessage>}
                 {discountStatus === 'error' && discountErrorMessage && <DiscountMessage type="error">{discountErrorMessage}</DiscountMessage>}
                 {discountStatus === 'valid' && appliedDiscountCode && (
                   <>
                     <DiscountMessage type="success">Code "{appliedDiscountCode}" angewendet!</DiscountMessage>
                     <RemoveButton onClick={handleRemoveCode}>
                        Remove
                     </RemoveButton>
                   </>
                 )}
              </DiscountSection>
           )}
         </>
       )}

       {/* Checkout Button logic (PayPal or 0€ Button via code) */}
       {/* Step 1: Item has to be available */}
      {(hasSizesWithStock || !hasAnySizes) ? (
        <>
          {/* Step 2: effective price is 0 by a valid code */}
          {effectivePrice <= 0 && discountStatus === 'valid' ? (
             // *** HIER WURDE DER 0€ CHECKOUT BLOCK ANGEPASST ***
             <CheckoutButtonWrapper style={{ flexDirection: 'column', alignItems: 'stretch' }}>
               {/* NEU: Eingabefeld für Namen */}
               <NameLabel htmlFor="userNameInput">Enter your full name:</NameLabel>
               <NameInput
                 id="userNameInput"
                 type="text"
                 value={userIdentifier} // Verwendet neuen State
                 onChange={(e) => setUserIdentifier(e.target.value)} // Aktualisiert neuen State
                 placeholder="Vorname Nachname"
                 aria-label="Name für Bestellung"
               />
               {/* ENDE NEU */}

               <GetFreeItemButton
                 // Ruft handlePurchaseSuccess jetzt mit Optionen auf
                 onClick={() => handlePurchaseSuccess({ userId: userIdentifier })} // Übergibt den Namen
                 // Deaktivieren, wenn Größe fehlt ODER Name fehlt
                 disabled={(hasAnySizes && !selectedSize) || !userIdentifier.trim()}
                 title={!userIdentifier.trim() ? "Bitte Namen eingeben" : (hasAnySizes && !selectedSize ? "Bitte zuerst Größe wählen" : "Artikel kostenlos erhalten")}
                 style={{ marginTop: '10px' }} // Abstand zum Inputfeld
               >
                 {/* Text anpassen, falls Größe oder Name fehlt */}
                 {!userIdentifier.trim() ? 'Bitte Namen eingeben' : (hasAnySizes && !selectedSize ? 'Größe wählen!' : 'Kostenlos bestellen')}
               </GetFreeItemButton>
             </CheckoutButtonWrapper>
             // *** ENDE DES ANGEPASSTEN 0€ BLOCKS ***
           ) : (
             /* Step 3: effective price is bigger than 0 */
             effectivePrice > 0 ? (
                /* Step 4: sizes are not needed or a size is selected */
                (!hasAnySizes || selectedSize) ? (
                  <PayPalButtonWrapper>
                    <PayPalButton
                      amount={formattedEffectivePrice} // send the current positive price
                      selectedSize={selectedSize}
                      productName={product.name}
                      // *** HIER WURDE onSuccess ANGEPASST ***
                      onSuccess={(details) => handlePurchaseSuccess({ paypalDetails: details })} // Übergibt PayPal Details als Objekt
                    />
                  </PayPalButtonWrapper>
                ) : (
                   /* Case: Price > 0, but size is missing */
                   hasAnySizes && <InfoMessage>Bitte wähle eine Größe.</InfoMessage>
                )
             ) : (
               /* Case: Price is 0, but not through discount code (shouldnt happen) */
               null
             )
           )}
        </>
       ) : (
         /* Case: Article is sould out (only if sizes exist) */
         hasAnySizes && <InfoMessage>Dieses Produkt ist leider ausverkauft.</InfoMessage>
       )}

    </ProductContentContainer>
  );
};


export default ProductContent;


const ProductContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10%; 
  margin-bottom: 5%; 
  gap: 24px;
  position: relative;
  width: 100%;
  max-width: 1408px;
  height: auto;
`;

const DescriptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
  height: auto;
`;

const ProductName = styled.h3`
  width: 100%;
  font-weight: 600;
  font-size: 1.6em;
  color: #ffffff;
`;

const ProductDescription = styled.p`
  font-family: 'Inter', sans-serif; /* Oder deine Schriftart */
  font-size: 0.9em;
  color: #ffffff;
  opacity: 0.8;
  white-space: pre-wrap; /* Umbrüche aus Supabase anzeigen */
`;

const ProductWarning = styled.p`
  font-family: 'Inter', sans-serif; /* Oder deine Schriftart */
  font-size: 0.9em;
  color:rgb(248, 182, 51);
  opacity: 0.8;
  white-space: pre-wrap; /* Umbrüche aus Supabase anzeigen */
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 0.9em;
  color: #ffffff;
`;

const PayPalButtonWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: flex-start; /* Button linksbündig */
  align-items: center;

  /* Begrenzt die Breite des PayPal Buttons selbst, falls nötig */
  & > div { /* Zielt auf den div-Container von PayPal */
    width: 100%; /* Oder eine feste Breite wie max-width: 300px; */
    max-width: 400px;
  }
`;

const SizeSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: #ff6b6b; /* Rote Farbe für Fehler */
  font-size: 1em;
  padding: 16px 0;
  text-align: left;
  width: 100%;
`;
const InfoMessage = styled.div`
  color: #ffffff;
  opacity: 0.7;
  font-size: 0.9em;
  padding: 16px 0;
  text-align: left;
  width: 100%;
`;

// new code input field for discount codes
const RevealDiscountButton = styled.button`
  background: none;
  border: none;
  padding: 5px 0; 
  margin-top: 8px;
  color: #cccccc;
  text-decoration: underline; 
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 0.85em;
  font-weight: 500;
  text-transform: none;
  text-align: left;
  width: fit-content;

  &:hover {
    color: #ffffff;
  }
`;

const DiscountSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 400px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  /* Fade-in Animation (optional) */
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-5px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const DiscountLabel = styled.label`
  color: #ffffff;
  font-size: 0.9em;
  opacity: 0.9;
  font-weight: 500;
  margin-top: 0px;
`;

const DiscountInput = styled.input`
  padding: 16px 14px;
  border: 1px solid #555;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  font-size: 0.95em;
  outline: none;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #777;
  }

  &:disabled {
     background-color: #444; /* Hintergrund wenn deaktiviert */
     cursor: not-allowed;
  }
`;

const ApplyButton = styled.button`
  padding: 10px 16px;
  background-color: #FFC43A;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95em;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background-color: #F2BA36;
  }

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const RemoveButton = styled.button`
  padding: 8px 12px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85em;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin-top: 5px;
  align-self: flex-start;
  transition: background-color 0.2s ease-in-out;


  &:hover:not(:disabled) {
    background-color: #5a6268;
  }
`;

const DiscountMessage = styled.p`
  font-size: 0.85em;
  margin-top: 6px;
  /* Dynamische Farbe basierend auf Typ */
  color: ${props => {
    switch (props.type) {
      case 'error': return '#ff6b6b'; // Red for errors
      case 'success': return '#4CAF50'; // Green for success
      default: return '#cccccc';
    }
  }};
  font-weight: 500;
`;

// Styled Components for 0€ checkout via code
const CheckoutButtonWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 400px; /* Konsistente Breite */
`;

const GetFreeItemButton = styled.button`
  padding: 12px 24px;
  background-color: #28a745; /* Kräftigeres Grün */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;
  width: 100%; /* Nimmt die Breite des Wrappers ein */

  &:hover:not(:disabled) {
    background-color: #218838; /* Dunkleres Grün bei Hover */
  }

  &:disabled {
    background-color: #555; /* Grau wenn deaktiviert (z.B. Größe fehlt) */
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

// styles for name input and label when discount code is applied
const NameInput = styled(DiscountInput)` // Basiert auf dem Stil des Code-Inputs
  margin-top: 5px; // Kleiner Abstand nach oben
`;
const NameLabel = styled(DiscountLabel)` // Basiert auf dem Stil des Code-Labels
  margin-top: 15px; // Etwas mehr Abstand zum Button darüber
  align-self: flex-start; // Sicherstellen, dass Label linksbündig ist
`;