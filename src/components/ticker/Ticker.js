import React from "react";
import styled, { keyframes } from "styled-components";


const scrollAnimation = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
`;

// Der äußere Container, der den Ticker am unteren Rand fixiert
const TickerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fc2546;
  color: white;
  padding: 12px 0;
  overflow: hidden;
  z-index: 999;
`;

// Der innere Container, der den Text enthält und animiert wird
const TickerContent = styled.div`
  display: flex; /* Richtet die Text-Elemente nebeneinander aus */
  white-space: nowrap; /* Verhindert Zeilenumbrüche */
  animation: ${scrollAnimation} 40s linear infinite; /* Dauer (z.B. 40s) bestimmt die Geschwindigkeit */
`;

// Das eigentliche Textelement, das dupliziert wird für den Endlos-Effekt
const TickerText = styled.p`
  font-family: Kleber;
  font-size: 1.8em;
  font-weight: 500;
  margin: 0;
  padding: 0 2em; /* Abstand zwischen den Wiederholungen */
  font-size: 1em;
  font-weight: 600;
  text-transform: uppercase;
`;

export default function Ticker() {
  const message = "T-Shirts are now available in the shop! Thank you so much for your support, until next year!";

  return (
    <TickerWrapper>
      <TickerContent>
        {/* Wir rendern den Text mehrmals, um die Lücke beim Scrollen zu füllen */}
        <TickerText>{message}</TickerText>
        <TickerText>{message}</TickerText>
        <TickerText>{message}</TickerText>
      </TickerContent>
    </TickerWrapper>
  );
}

// import React, { useState, useEffect } from "react"
// import { TickerText } from "../styles/TextStyles"
// import RTicker from "react-ticker"
// import styled from "styled-components"

// import Delayed from "../ticker/useTickerDelay"

// import "./Ticker.css"

// // Ticker Component
// const Ticker = () => {
//   const [isMoving, setIsMoving] = useState(true)

//   const mouseEnterHandler = () => {
//     setIsMoving(false)
//   }

//   const mouseLeaveHandler = () => {
//     setIsMoving(true)
//   }

//   return (
//     <Delayed>
//       <TickerMask>
//         <TickerWrapper
//           onMouseEnter={mouseEnterHandler}
//           onMouseLeave={mouseLeaveHandler}
//         >
//           <RTicker speed={6} move={isMoving}>
//             {({ index }) => (
//               <Wrapper>
//                 {/* <TickerText className="tickerText">
//                   Weitere Infos auf{" "}
//                   <LinkInline
//                     href="https://instagram.com/kleinundhaarig?igshid=YmMyMTA2M2Y="
//                     target="_blank"
//                   >
//                     Instagram
//                   </LinkInline>{" "}
//                   &{" "}
//                   <LinkInline
//                     href="https://soundcloud.com/kleinundhaarig?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
//                     target="_blank"
//                   >
//                     Soundcloud
//                   </LinkInline>
//                 </TickerText> */}
//                 {/* <TickerText className="tickerText">Infrastruktur</TickerText>
//                 <Icon src="/icons/banner-star.svg"></Icon>
//                 <TickerText className="tickerText">Verpflegung</TickerText>
//                 <Icon src="/icons/banner-star.svg"></Icon>
//                 <TickerText className="tickerText">
//                   Veranstaltungstechnik
//                 </TickerText>
//                 <Icon src="/icons/banner-star.svg"></Icon>
//                 <TickerText className="tickerText">
//                   Wir suchen dringend Unterstützung für
//                 </TickerText>
//                  */}
//                 <Icon src="/icons/banner-star-white.svg"></Icon>
//                 <TickerText className="tickerText">
//                   T-Shirts are now available in the shop! Thank you so much for your support, until next year!
//                 </TickerText>

//                 {/* <TickerText className="tickerText">
//                   Aktuell sind keine Zahlungen möglich. Wir haben ein Problem
//                   mit Paypal, sind aber an der Lösung dran. Danke für dein
//                   Verständnis & Geduld.
//                 </TickerText> */}

//                 {/* <TickerText className="tickerText">
//                   Schreib uns
//                   <LinkInline
//                     href="mailto:info@kleinundhaarig.de"
//                     target="_blank"
//                   >
//                     inf0@kleinundhaarig.de
//                   </LinkInline>
//                 </TickerText> */}
//               </Wrapper>
//             )}
//           </RTicker>
//         </TickerWrapper>
//       </TickerMask>
//     </Delayed>
//   )
// }

// const LinkInline = styled.a`
//   /* border-bottom: 1px solid rgba(255, 255, 255); */
// `

// const Icon = styled.img`
//   margin: 0px 16px 0px 16px;
//   color: #ffffff;
//   width: 24px;
//   height: 24px;
//   align-self: center;
// `

// const Wrapper = styled.div`
//   /* display: flex; */

//   align-self: center;
//   display: grid;
//   grid-template-columns: 1fr auto;
//   white-space: nowrap;
//   padding: -10px;

//   /* width: auto; */
//   /* display: grid; */
// `

// const TickerMask = styled.div`
//   /* display: grid;
//   align-content: center; */
//   /* padding: 20px 0; */

//   /* overflow: hidden; */
// `

// const TickerWrapper = styled.div`
//   /* z-index: 999; */
//   left: 0;
//   width: 100vw;

//   display: grid;
//   background-color: #fc2546;
//   padding: 5px 0;
//   /* background-color: #ff003a; */

//   animation: TickerAnimation 3.3s 0s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
//   opacity: 0;

//   @keyframes TickerAnimation {
//     0% {
//       opacity: 0;
//       max-height: 0;
//       /* transform: translateX(25vw); */
//     }

//     100% {
//       opacity: 1;
//       max-height: 200px;
//       /* transform: translateX(0px); */
//     }
//   }
// `

// export default Ticker
