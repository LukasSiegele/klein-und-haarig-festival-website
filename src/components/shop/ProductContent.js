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
  const [manualShippingAddress, setManualShippingAddress] = useState({
    line1: '',
    line2: '',
    city: '',
    postal_code: '',
    state: '',
    country_code: '',
  });

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
        setManualShippingAddress({ line1: '', line2: '', city: '', postal_code: '', state: '', country_code: '' });
    }
  }, [product]);


  // Formatiert den *originalen* Preis
  const formattedOriginalPrice = typeof product?.price === 'number'
    ? product.price.toFixed(2)
    : "0.00";

  // Formatiert den *effektiven* Preis (der rabattiert oder sogar 0€ sein könnte) via einem "Discount Code"
  const formattedEffectivePrice = typeof effectivePrice === 'number'
    ? effectivePrice.toFixed(2)
    : "0.00";


  // Handles size changes
  const handleSizeChange = (sizeLabel) => { // This is where the Label (e.g. "XL") arrives
    setSelectedSize(sizeLabel);
  };

  // Handler for address changes
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setManualShippingAddress(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle apply code (calls DEPLOYED function)
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
      setManualShippingAddress({ line1: '', line2: '', city: '', postal_code: '', state: '', country_code: '' });
    };


  // Handler purchase success
  const handlePurchaseSuccess = async (options = {}) => {
      const { paypalDetails, userId, manualAddress } = options; 

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
        let shippingAddressForDb = {};

        // PAYMENT OPTION 1: via Paypal, grabs address from Paypal.
        if (paypalDetails) {
            if (paypalDetails.payer?.name) {
              const givenName = paypalDetails.payer.name.given_name || '';
              const surname = paypalDetails.payer.name.surname || '';
              payerFullName = `${givenName} ${surname}`.trim();
            }
            if (paypalDetails.purchase_units?.[0]?.shipping?.address) {
              const shipping = paypalDetails.purchase_units[0].shipping.address;
              shippingAddressForDb = {
                  shipping_address_line_1: shipping.address_line_1,
                  shipping_address_line_2: shipping.address_line_2,
                  shipping_city: shipping.admin_area_2,
                  shipping_state: shipping.admin_area_1,
                  shipping_postal_code: shipping.postal_code,
                  shipping_country_code: shipping.country_code
              };
            }
        // PAYMENT OPTION 2: via Code, manual entry of address
        } else if (manualAddress) {
            shippingAddressForDb = {
              shipping_address_line_1: manualAddress.line1,
              shipping_address_line_2: manualAddress.line2,
              shipping_city: manualAddress.city,
              shipping_state: manualAddress.state,
              shipping_postal_code: manualAddress.postal_code,
              shipping_country_code: manualAddress.country_code
            };
        }


        // Logs all the data from a sale into our database
        const orderData = {
          product_id: product.id,
          product_name: product.name,
          size_label: selectedSize || null,
          price_paid: effectivePrice,
          discount_code_used: appliedDiscountCode || null,
          paypal_order_id: paypalDetails?.id || null,
          user_identifier: userId || payerFullName || null,
          ...shippingAddressForDb // <-- Fügt alle Adressfelder (ob von PayPal oder manuell) hinzu
        };

        try {
          const { error: orderError } = await supabase.from('orders').insert([orderData]);
          if (orderError) {
            console.error("Error when saving the order in Supabase:", orderError);
          } else {
             console.log("Order successfully saved in Supabase."); 
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
        <ProductDescription>{product.longDescription || product.short_description || "Keine Beschreibung verfügbar."}</ProductDescription>
        <ProductWarning>{product.warning || ""}</ProductWarning>
      </DescriptionGroup>

      {/* Adjusted price display */}
      <Price>
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

      {/* Size selection */}
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
                     {discountStatus === 'loading' && <DiscountMessage type="info">Checking code...</DiscountMessage>}
                     {discountStatus === 'invalid' && discountErrorMessage && <DiscountMessage type="error">{discountErrorMessage}</DiscountMessage>}
                     {discountStatus === 'error' && discountErrorMessage && <DiscountMessage type="error">{discountErrorMessage}</DiscountMessage>}
                     {discountStatus === 'valid' && appliedDiscountCode && (
                       <>
                         <DiscountMessage type="success">Code "{appliedDiscountCode}" applied!</DiscountMessage>
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
          {(hasSizesWithStock || !hasAnySizes) ? (
            <>
              {/* Step 2: effective price is 0 by a valid code */}
              {effectivePrice <= 0 && discountStatus === 'valid' ? (
                 <CheckoutButtonWrapper style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                   <NameLabel htmlFor="userNameInput">Your name</NameLabel>
                   <NameInput
                     id="userNameInput"
                     type="text"
                     value={userIdentifier}
                     onChange={(e) => setUserIdentifier(e.target.value)}
                     placeholder="Enter your full name..."
                     aria-label="Name for order"
                     required
                   />
                   
                    {/* HIER DIE NEUEN ADRESSFELDER */}
                    <NameLabel htmlFor="addressLine1" style={{ marginTop: '15px' }}>Your shipping address:</NameLabel>
                    <NameInput id="addressLine1" type="text" name="line1" placeholder="Address & Street No." value={manualShippingAddress.line1} onChange={handleAddressChange} required />
                    <NameInput id="addressLine2" type="text" name="line2" placeholder="Address Line 2 (optional)" value={manualShippingAddress.line2} onChange={handleAddressChange} style={{ marginTop: '10px' }} />
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                        <NameInput id="postalCode" type="text" name="postal_code" placeholder="Postal Code" value={manualShippingAddress.postal_code} onChange={handleAddressChange} required style={{ flex: 1 }} />
                        <NameInput id="city" type="text" name="city" placeholder="City" value={manualShippingAddress.city} onChange={handleAddressChange} required style={{ flex: 2 }}/>
                    </div>
                    <NameInput id="state" type="text" name="state" placeholder="State / Region (optional)" value={manualShippingAddress.state} onChange={handleAddressChange} style={{ marginTop: '10px' }} />
                    <NameInput id="countryCode" type="text" name="country_code" placeholder="Country Code (e.g. DE)" value={manualShippingAddress.country_code} onChange={handleAddressChange} required style={{ marginTop: '10px' }}/>

                   <GetFreeItemButton
                     onClick={() => handlePurchaseSuccess({ userId: userIdentifier, manualAddress: manualShippingAddress })} // <-- manualAddress wird übergeben
                     disabled={ // <-- Logik erweitert
                        (hasAnySizes && !selectedSize) || 
                        !userIdentifier.trim() || 
                        !manualShippingAddress.line1.trim() || 
                        !manualShippingAddress.city.trim() || 
                        !manualShippingAddress.postal_code.trim() ||
                        !manualShippingAddress.country_code.trim()
                     }
                     title={"Please fill in all required fields"}
                     style={{ marginTop: '20px' }}
                   >
                     Order item
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
                       hasAnySizes && <InfoMessage>Select a size.</InfoMessage>
                    )
                 ) : (
                   null
                 )
               )}
            </>
           ) : (
             hasAnySizes && <InfoMessage>Sorry, this product is sold out!</InfoMessage>
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
  font-family: 'Inter', sans-serif;
  font-size: 0.9em;
  color: #ffffff;
  opacity: 0.8;
  white-space: pre-wrap;
`;

const ProductWarning = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9em;
  color:rgb(248, 182, 51);
  opacity: 0.8;
  white-space: pre-wrap;
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
  justify-content: flex-start;
  align-items: center;

  & > div {
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
  color: #ff6b6b;
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
     background-color: #444;
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
  color: ${props => {
    switch (props.type) {
      case 'error': return '#ff6b6b';
      case 'success': return '#4CAF50';
      default: return '#cccccc';
    }
  }};
  font-weight: 500;
`;

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
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85em;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;
  width: 100%;

  &:hover:not(:disabled) {
    background-color: #218838;
  }

  &:disabled {
    background-color: #555;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const NameInput = styled(DiscountInput)``;

const NameLabel = styled(DiscountLabel)`
  align-self: flex-start;
`;

const AddressTextarea = styled.textarea`
  padding: 16px 14px;
  border: 1px solid #555;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  font-size: 0.85em;
  font-family: 'Inter', sans-serif;
  text-transform: none;
  outline: none;
  width: 100%; /* Nimmt volle Breite des Containers ein */
  min-height: 80px; /* Gibt ihr eine Anfangshöhe */
  resize: vertical; /* Erlaubt dem Nutzer, die Höhe anzupassen */

  &::placeholder {
    color:rgb(184, 184, 184);
  }

  &:focus {
    border-color: #777;
  }
`;