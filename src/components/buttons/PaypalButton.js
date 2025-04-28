import React, { useEffect, useRef, useState } from "react";
import { navigate } from "gatsby";

const PayPalButton = ({ amount, selectedSize, productName, onSuccess }) => {
  const paypalRef = useRef();
  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=ARKcPkKcvkWJBjcq-Aoq1uYEah4eZgOIkNVLsfbCN_SmSO_cffyYVuqtwcAU-RVGsNLjOWKGGcBreee8&currency=EUR";
    script.async = true;
    script.onload = () => setSdkReady(true);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (sdkReady && window.paypal && paypalRef.current) {
      // 🧹 Clear previous PayPal button if a new size is selected
      paypalRef.current.innerHTML = "";

      window.paypal.Buttons({
        createOrder: (data, actions) => {
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
              shipping_preference: "GET_FROM_FILE",
            },
          });
        },
        onApprove: async (data, actions) => {
          const details = await actions.order.capture();
          const shipping = details.purchase_units[0].shipping;
          onSuccess(details);
          // Redirect to thanks.js page after payment was successful
          navigate(`/thanks/`);
        },
      }).render(paypalRef.current);
    }
  }, [sdkReady, amount, selectedSize, productName, onSuccess]);

  return <div ref={paypalRef} />;
};

export default PayPalButton;
