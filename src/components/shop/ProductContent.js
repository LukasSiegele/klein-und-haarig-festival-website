import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ToggleButton from "../buttons/ToggleButton";
import PayPalButton from "../buttons/PaypalButton";
import { supabase } from "../../utils/supabaseClient";
import { navigate } from "gatsby";
import PretixWidget from '../pretix/PretixWidget';

const ProductContent = ({ product }) => {

  const [selectedSize, setSelectedSize] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0].label : ""
  );

  // Discount code constants
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscountCode, setAppliedDiscountCode] = useState(null);
  const [discountStatus, setDiscountStatus] = useState('idle');
  const [discountErrorMessage, setDiscountErrorMessage] = useState('');
  const [effectivePrice, setEffectivePrice] = useState(product ? product.price : 0);
  const [isDiscountInputVisible, setIsDiscountInputVisible] = useState(false);
  const [userIdentifier, setUserIdentifier] = useState('');

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
        setUserIdentifier('');
    }
  }, [product]);


  // Formatiert den *originalen* Preis
  const formattedOriginalPrice = typeof product?.price === 'number'
    ? product.price.toFixed(2)
    : "0.00";

  // Formatiert den *effektiven* Preis (der rabattiert sein könnte)
  const formattedEffectivePrice = typeof effectivePrice === 'number'
    ? effectivePrice.toFixed(2)
    : "0.00";


  // Größenänderung behandeln
  const handleSizeChange = (sizeLabel) => { // Hier kommt das Label (z.B. "M") an
    setSelectedSize(sizeLabel);
  };

  // handle apply code (calls DEPLOYED function)
  const handleApplyCode = async () => {
    setDiscountStatus('loading');
    setDiscountErrorMessage('');
    setAppliedDiscountCode(null);
    setEffectivePrice(product.price);

    if (!product || !product.id) {
        console.error("Product ID missing for code validation!");
        setDiscountStatus('error');
        setDiscountErrorMessage('Internal Error: Missing Product ID.');
        return;
    }

    try {
      const { data, error: functionError } = await supabase.functions.invoke('validate-code', {
        body: { code: discountCode, productId: product.id },
      });

      if (functionError) {
        console.error("Error invoking Supabase function 'validate-code':", functionError);
        throw new Error("Netzwerkfehler oder Funktion nicht erreichbar.");
      }
      console.log("Response from deployed 'validate-code':", data);
      if (data && data.valid === true) {
        setDiscountStatus('valid');
        setAppliedDiscountCode(discountCode);
        setEffectivePrice(0);
        setDiscountErrorMessage('');
      } else {
        setDiscountStatus('invalid');
        const message = data?.reason || data?.error || 'Code ungültig oder nicht anwendbar.';
        setDiscountErrorMessage(message);
        setEffectivePrice(product.price);
        setAppliedDiscountCode(null);
      }
    } catch (error) {
      console.error("Error during discount code validation process:", error);
      setDiscountStatus('error');
      setDiscountErrorMessage(error.message || 'Fehler bei der Code-Prüfung. Bitte erneut versuchen.');
      setEffectivePrice(product.price);
      setAppliedDiscountCode(null);
    }
  };


    // Handler to remove code again
    const handleRemoveCode = () => {
      setDiscountCode('');
      setAppliedDiscountCode(null);
      setDiscountStatus('idle');
      setDiscountErrorMessage('');
      setEffectivePrice(product.price);
      setIsDiscountInputVisible(false);
      setUserIdentifier('');
    };


  // Handler purchase success
  const handlePurchaseSuccess = async (options = {}) => {
      const { paypalDetails, userId } = options;

    if (!product || !product.id) {
        console.error("Produkt oder Produkt-ID fehlt!");
        alert("Ein interner Fehler ist aufgetreten (Produkt-ID fehlt).");
        return;
    }
    const hasAnySizesCheck = product.sizes && product.sizes.length > 0;
    if (hasAnySizesCheck && !selectedSize) {
       console.error("Keine Größe für den Kauf ausgewählt!");
       alert("Bitte wähle zuerst eine Größe aus.");
       return;
    }

    try {
        const { data: updateResult, error: functionError } = await supabase.functions.invoke(
            'decrement-stock',
            { body: { productId: product.id, sizeLabel: selectedSize } }
        );

        if (functionError) throw functionError;
        if (updateResult && !updateResult.success) {
           throw new Error(updateResult.error || 'Stock update failed.');
        }

        let payerFullName = null;
        if (paypalDetails && paypalDetails.payer && paypalDetails.payer.name) {
          const givenName = paypalDetails.payer.name.given_name || '';
          const surname = paypalDetails.payer.name.surname || '';
          payerFullName = `${givenName} ${surname}`.trim();
          if (!payerFullName) payerFullName = null; // Falls beide leer, auf null setzen
        }

        const orderData = {
          product_id: product.id,
          product_name: product.name,
          size_label: selectedSize || null,
          price_paid: effectivePrice,
          discount_code_used: appliedDiscountCode || null,
          paypal_order_id: paypalDetails?.id || null,
          user_identifier: userId || payerFullName || null
        };

        try {
          const { error: orderError } = await supabase.from('orders').insert([orderData]);
          if (orderError) {
            console.error("Error when saving the order in Supabase:", orderError);
          } else {
          }
        } catch(e) {
           console.error("Unerwarteter Fehler beim Speichern der Bestellung:", e);
        }

        if (appliedDiscountCode) {
            try {
                const { error: incrementError } = await supabase.functions.invoke(
                    'increment-discount-usage',
                    { body: { code: appliedDiscountCode } }
                );
                if (incrementError) {
                    console.error("Error while updating usage counter:", incrementError);
                } else {
                    console.log(`Sent call to raise usage counter for ${appliedDiscountCode}`);
                }
            } catch (e) {
                console.error("!!! Unexpected error for increment-discount-usage:", e);
            }
        }
        navigate(`/thanks/`);
    } catch (error) {
        console.error('Fehler bei der Kaufverarbeitung (Stock-Update):', error);
        alert(`Payment successfull or item free! But there was a problem updating stock: ${error.message}. Error has been logged, you do not have to do anything.`);
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
  const hasAnySizes = product.sizes && product.sizes.length > 0;


  return (
    <ProductContentContainer>
      {/* Produktinfos */}
      <DescriptionGroup>
        <ProductName>{product.name || "Produktname"}</ProductName>
        {/* Hier war vorher short_description, jetzt long_description für Konsistenz,
            da Tickets wahrscheinlich eher long_description verwenden */}
        <ProductDescription>{product.longDescription || product.short_description || "Keine Beschreibung verfügbar."}</ProductDescription>
        <ProductWarning>{product.warning || ""}</ProductWarning>
      </DescriptionGroup>

      {/* Adjusted price display */}
      <Price>
        {/* Für Tickets könnte der Preis auch von Pretix kommen, aber hier nehmen wir den Supabase-Preis */}
        {product.product_type === 'ticket' && product.price > 0 ? (
             formattedOriginalPrice + " € (via Pretix)"
        ) : (
            discountStatus === 'valid' && appliedDiscountCode ? (
              <>
                <span style={{ textDecoration: 'line-through', opacity: 0.6, marginRight: '8px' }}>
                  {formattedOriginalPrice} €
                </span>
                <span style={{ fontWeight: 'bold', color: '#4CAF50' }}>
                    {formattedEffectivePrice} €
                </span>
              </>
            ) : (
              formattedOriginalPrice + " €"
            )
        )}
      </Price>

      {/* Size selection - Nur für Nicht-Tickets anzeigen, wenn Größen vorhanden sind */}
      {product.product_type !== 'ticket' && hasAnySizes && (
        <SizeSelector>
          <ToggleButton
            label="Size"
            selectedLabel={selectedSize}
            options={product.sizes}
            onChange={handleSizeChange}
          />
        </SizeSelector>
      )}

      {product.product_type === 'ticket' ? (
        // If it is a product of type: "ticket"
        product.pretix_event_url ? (
          <PretixWidget eventUrl={product.pretix_event_url} />
        ) : (
          <InfoMessage>Ticketverkaufsinformationen bald verfügbar.</InfoMessage>
        )
      ) : (
        // If the prdocut is not a ticket, but a different type (e.g. merchandise):
        <>
          {/* Discount Code show/hide */}
          {product.price > 0 && (
             <>
               {!isDiscountInputVisible && discountStatus !== 'valid' && (
                 <RevealDiscountButton onClick={() => setIsDiscountInputVisible(true)}>
                   Received a code from us? Enter here!
                 </RevealDiscountButton>
               )}
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
                     {discountStatus === 'loading' && <DiscountMessage type="info">Code wird geprüft...</DiscountMessage>}
                     {discountStatus === 'invalid' && discountErrorMessage && <DiscountMessage type="error">{discountErrorMessage}</DiscountMessage>}
                     {discountStatus === 'error' && discountErrorMessage && <DiscountMessage type="error">{discountErrorMessage}</DiscountMessage>}
                     {discountStatus === 'valid' && appliedDiscountCode && (
                       <>
                         <DiscountMessage type="success">Code "{appliedDiscountCode}" angewendet!</DiscountMessage>
                         <RemoveButton onClick={handleRemoveCode}>
                            Remove code
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
                 <CheckoutButtonWrapper style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                   <NameLabel htmlFor="userNameInput">Dein Name (für Zuordnung):</NameLabel>
                   <NameInput
                     id="userNameInput"
                     type="text"
                     value={userIdentifier}
                     onChange={(e) => setUserIdentifier(e.target.value)}
                     placeholder="Enter your full name..."
                     aria-label="Name for order"
                   />
                   <GetFreeItemButton
                     onClick={() => handlePurchaseSuccess({ userId: userIdentifier })}
                     disabled={(hasAnySizes && !selectedSize) || !userIdentifier.trim()}
                     title={!userIdentifier.trim() ? "Enter name to continue" : (hasAnySizes && !selectedSize ? "Select size first" : "Order item")}
                     style={{ marginTop: '10px' }}
                   >
                     {!userIdentifier.trim() ? 'Enter name to continue' : (hasAnySizes && !selectedSize ? 'Select size!' : 'Order item')}
                   </GetFreeItemButton>
                 </CheckoutButtonWrapper>
               ) : (
                 /* Step 3: effective price is bigger than 0 */
                 effectivePrice > 0 ? (
                    /* Step 4: sizes are not needed or a size is selected */
                    (!hasAnySizes || selectedSize) ? (
                      <PayPalButtonWrapper>
                        <PayPalButton
                          amount={formattedEffectivePrice}
                          selectedSize={selectedSize}
                          productName={product.name}
                          onSuccess={handlePurchaseSuccess}
                        />
                      </PayPalButtonWrapper>
                    ) : (
                       hasAnySizes && <InfoMessage>Bitte wähle eine Größe.</InfoMessage>
                    )
                 ) : (
                   null
                 )
               )}
            </>
           ) : (
             hasAnySizes && <InfoMessage>Dieses Produkt ist leider ausverkauft.</InfoMessage>
           )}
        </>
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
    width: 100%;
    max-width: 720px;
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
  max-width: 720px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  font-size: 0.85em;
  font-family: 'Inter', sans-serif;
  text-transform: none;
  outline: none;

  &::placeholder {
    color:rgb(184, 184, 184);
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
  font-size: 0.85em;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  text-transform: none;
  transition: background-color 0.2s ease-in-out;
  width: auto;
  max-width: 720px;
  min-width: fit-content;

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
  background: none;
  border: none;
  padding: 5px 0; 
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
  margin-top: 8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 720px;
`;

const GetFreeItemButton = styled.button`
  padding: 12px 24px;
  background-color: #28a745; /* Kräftigeres Grün */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85em;
  font-family: 'Inter', sans-serif;
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
  margin-top: 5px;
`;
const NameLabel = styled(DiscountLabel)` // Basiert auf dem Stil des Code-Labels
  margin-top: 15px; 
  align-self: flex-start;
`;