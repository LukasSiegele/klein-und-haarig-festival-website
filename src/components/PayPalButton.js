import React from "react"
import { useEffect } from "react"
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"

const initialOptions = {
  "client-id": process.env.GATSBY_PAYPAL_CLIENT_ID,
}

// This values are the props in the UI

const style = { layout: "vertical" }

// Custom component to wrap the PayPalButtons and handle currency changes
const PayPalButton = ({ currency, showSpinner, amount, onSuccess }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer()

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: "EUR",
      },
    })
  }, [currency, showSpinner])

  const onPayPalSuccess = data => {
    console.log("PayPal:", data)
    onSuccess(data)
  }

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then(orderId => {
              // Your code here after create the order
              return orderId
            })
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            onPayPalSuccess(data)
          })
        }}
      />
    </>
  )
}

export default PayPalButton
