import React, { useEffect, useRef, useState } from "react";

const PayPalButton = ({ amount, selectedSize, productName, onSuccess }) => {
  const paypalRef = useRef();
  const [sdkReady, setSdkReady] = useState(false);
  const paypalClientID = process.env.GATSBY_PAYPAL_CLIENT_ID;

  useEffect(() => {
    if (!paypalClientID) {
        console.error("PayPal Client ID is missing! Check environment variables (GATSBY_PAYPAL_CLIENT_ID).");
        return;
    }


    const script = document.createElement("script");

    script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientID}&currency=EUR`;

    script.async = true;
    script.onload = () => setSdkReady(true);
    script.onerror = () => {
        console.error("Failed to load PayPal SDK script. Check Client ID and network.");

    };
    document.body.appendChild(script);

    // Cleanup-function
    return () => {

      const scriptNode = document.querySelector(`script[src*="client-id=${paypalClientID}"]`);
      if (scriptNode && document.body.contains(scriptNode)) {
        try {
            document.body.removeChild(scriptNode);
        } catch (e) {
            console.warn("Could not remove PayPal script during cleanup.", e)
        }
      }

      setSdkReady(false);
    };
  }, [paypalClientID]); 

  useEffect(() => {

    if (sdkReady && window.paypal && paypalRef.current && paypalClientID) {

      if (!paypalRef.current) return;

      try {
         paypalRef.current.innerHTML = ""; // Deletes previous button

         window.paypal.Buttons({
            createOrder: (data, actions) => {
              // createOrder logic
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "EUR",
                      value: amount,
                      breakdown: {
                        item_total: {
                          currency_code: "EUR",
                          value: amount,
                        },
                      },
                    },
                    items: [
                      {
                        name: `${productName}${selectedSize ? ` - Size: ${selectedSize}` : ''}`,
                        unit_amount: {
                          currency_code: "EUR",
                          value: amount,
                        },
                        quantity: "1",
                        category: "PHYSICAL_GOODS",
                      },
                    ],
                  },
                ],
                application_context: {
                  shipping_preference: "GET_FROM_FILE", // or NO_SHIPPING
                },
              });
            },
            onApprove: async (data, actions) => {
              // onApprove logic
              try {
                const details = await actions.order.capture();
                onSuccess({ paypalDetails: details });
              } catch (error) {
                console.error("Error capturing PayPal order:", error);
                alert("Error completing PayPal payment.");
              }
            },
            onError: (err) => {
                // onError logic
                console.error("PayPal Button onError:", err);
                alert(`There was an error with PayPal: ${err}`);
            }
          }).render(paypalRef.current).catch(err => { 
            console.error("Failed to render PayPal Buttons:", err);
          });

      } catch (error) {
         console.error("Error setting up PayPal Buttons:", error);
      }

    } else if (sdkReady && !paypalClientID && paypalRef.current) {
         // Fallback, if SDK loaded, but ID is missing
         paypalRef.current.innerHTML = "<p style='color:red;'>PayPal konnte nicht geladen werden (Konfigurationsfehler).</p>";
    }
  // paypalClientID as dependency
  }, [sdkReady, amount, selectedSize, productName, onSuccess, paypalClientID]);

  if (!paypalClientID) {
    // Fallback, if ClientID is missing
    return <div style={{ color: 'red', padding: '10px' }}>PayPal configuration error (Client ID missing).</div>;
  }
  if (!sdkReady) {
    return <div style={{ padding: '10px' }}>Loading PayPal Button...</div>;
  }
  return <div ref={paypalRef} />;
};

export default PayPalButton;