import React, { useEffect, useState } from "react"
import OwnedTicketCard from "../../cards/OwnedTicketCard"

import { animated } from 'react-spring';
import { use3dEffect } from 'use-3d-effect';

import styled from "styled-components"

import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import PayPalButton from "../../PayPalButton"

import Background1 from "/static/images/FestivalTicket.jpg"
import Background3 from "/static/images/CamperTicket.jpg"

const VipSection1 = props => {
  const paypalCLientID = process.env.GATSBY_PAYPAL_CLIENT_ID_SB
  const userData = props.userData
  const [checkout, setCheckout] = useState(false)


  const ref = React.useRef(null);
  const {style, ...mouseHandlers} = use3dEffect(ref);
  const paypalSuccess = data => {
    console.log(data)
  }

  const paypalError = err => {
    console.log(err)
  }

  const paypalClickHandler = () => {}

  const camperClickHandler = () => {
    setCheckout(true)
  }

  return (
    <CardWrapper>
      <Card1>
      <animated.div
      ref={ref}
      style={{
        ...style
      }}
      {...mouseHandlers}
    >

    
        <OwnedTicketCard
          title="Festival Ticket"
          details="4 Tage Festival
inklusive Camping"
          isSelected={true}
          cardBackground={Background1}
        /></animated.div>
      </Card1>

      {userData.Camper ? <Card2>
        <OwnedTicketCard
          title="Camper Stellplatz"
          details="Auf dem Gelände
maximale Fahrzeuggröße 6 x 2.5 m"
          isSelected={userData.Camper}
          tripleLineDetail={true}
          cardBackground={Background3}
          onClick={camperClickHandler}
        />
      </Card2> : null}
      

      {/* <Card3></Card3> */}
    </CardWrapper>
  )
}

export default VipSection1

const CardWrapper = styled.div`
  display: grid;
  max-width: 700px;
  grid-template-columns: repeat(2, 1fr);
  justify-items: start;
  gap: 60px;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    gap: 30px;
  }
`

const Card1 = styled.div`
  animation: TicketCardAnimation 1.3s 0.4s forwards
    cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  visibility: hidden;

  @keyframes TicketCardAnimation {
    0% {
      visibility: visible;
      opacity: 0;
      transform: translateY(20px);
    }

    100% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }
  }
`
const Card2 = styled.div`
  animation: TicketCardAnimation 1.3s 0.6s forwards
    cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  visibility: hidden;
`
