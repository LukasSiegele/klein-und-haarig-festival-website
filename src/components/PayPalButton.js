// import React from "react"
// import { useEffect } from "react";
// import {
//     PayPalButtons,
//     usePayPalScriptReducer
// } from "@paypal/react-paypal-js";

// // This values are the props in the UI
// const style = {"layout":"vertical"};

// // Custom component to wrap the PayPalButtons and handle currency changes
// const PayPalButton = ({ disabled, currency, showSpinner, amount, onSuccess, onError, onClick }) => {
//     // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
//     // This is the main reason to wrap the PayPalButtons in a new component
//     const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

//     useEffect(() => {
//         dispatch({
//             type: "resetOptions",
//             value: {
//                 ...options,
//                 currency: currency,
//             },
//         });
//     }, [currency, showSpinner, dispatch]);

//     const approveHandler = (data) => {
//       onSuccess(data);
//     }

//     const errorHandler = (error) => {
//         onError(error);
//     }

//     return (<>
//             { (showSpinner && isPending) && <div className="spinner" /> }
//             <PayPalButtons
//                 style={style}
//                 disabled={disabled}
//                 forceReRender={[amount, currency, style]}
//                 fundingSource={undefined}
//                 createOrder={(data, actions) => {
//                     return actions.order
//                         .create({
//                             purchase_units: [
//                                 {
//                                     amount: {
//                                         currency_code: currency,
//                                         value: amount,
//                                     },
//                                 },
//                             ],
//                         })
//                         .then((orderId) => {
//                             // Your code here after create the order
//                             return orderId;
//                         });
//                 }}
//                 onApprove={function (data, actions) {
//                     return actions.order.capture().then(function () {
//                         // Your code here after capture the order
//                         console.log(data)
//                         approveHandler(data)
//                     });
//                 }}
//                 onError={function (error) {
//                     errorHandler(error)

//                 }}
//                 onClick={function (e) {
//                     onClick(e);
//                 }}
//             />
//         </>
//     );
// }

// 				{/* <ButtonWrapper
//                     currency={currency}
//                     showSpinner={false}
//                 /> */}

// export default PayPalButton
