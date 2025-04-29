// PayPalButton.js - Überarbeitet

import React, { useEffect, useRef, useState } from "react";
// navigate wird nicht mehr benötigt: import { navigate } from "gatsby";

const PayPalButton = ({ amount, selectedSize, productName, onSuccess }) => {
  const paypalRef = useRef();
  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=ARKcPkKcvkWJBjcq-Aoq1uYEah4eZgOIkNVLsfbCN_SmSO_cffyYVuqtwcAU-RVGsNLjOWKGGcBreee8&currency=EUR";
    script.async = true;
    script.onload = () => setSdkReady(true);
    document.body.appendChild(script);

    // Cleanup-Funktion, um doppelte Skripte zu vermeiden
    return () => {
        const scriptNode = document.querySelector(`script[src*="${script.src}"]`);
        if (scriptNode) {
            document.body.removeChild(scriptNode);
        }
    };
  }, []); // Leeres Array: Effekt läuft nur einmal beim Mounten

  useEffect(() => {
    if (sdkReady && window.paypal && paypalRef.current) {
      paypalRef.current.innerHTML = ""; // Vorherigen Button löschen

      window.paypal.Buttons({
        createOrder: (data, actions) => {
          // --- createOrder Logik (unverändert) ---
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
              shipping_preference: "GET_FROM_FILE", // Oder NO_SHIPPING, falls zutreffend
            },
          });
          // --- Ende createOrder ---
        },
        onApprove: async (data, actions) => {
          try {
            const details = await actions.order.capture();
            // const shipping = details.purchase_units[0].shipping; // Nicht mehr benötigt
            console.log("PayPal Capture Details:", details); // Loggen ist gut
            // Rufe den Handler der Elternkomponente auf
            onSuccess(details);
            // navigate(`/thanks/`); // <-- ENTFERNT! Wird jetzt im onSuccess Handler gemacht
          } catch (error) {
            console.error("Error capturing PayPal order:", error);
            // Optional: Informiere den User über den Capture-Fehler
            alert("Fehler beim Abschließen der PayPal-Zahlung.");
          }
        },
        onError: (err) => {
            // Einfache Fehlerbehandlung für PayPal-Fehler
            console.error("PayPal Button onError:", err);
            alert(`Ein Fehler ist mit PayPal aufgetreten: ${err}`);
        }
      }).render(paypalRef.current);
    }
  }, [sdkReady, amount, selectedSize, productName, onSuccess]); // Abhängigkeiten

  // Fallback-Anzeige, während SDK lädt
  if (!sdkReady) {
      return <div>Lade PayPal Button...</div>;
  }

  // Container für den PayPal Button
  return <div ref={paypalRef} />;
};

export default PayPalButton;