import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { HeaderText } from "../styles/TextStyles"
import useAudienceCount from "../../helper/useAudienceCount"
import useAutoCount from "../../helper/useAutoCount"
import useCamperCount from "../../helper/useCamperCount"

export default function Header() {
  // Audience Cuunt
  const audienceCount = useAudienceCount()
  const maxAudience = 210

  // Auto Count
  const autoCount = useAutoCount()

  // Camper Count
  const camperCount = useCamperCount()

  return (
    <Wrapper>
      <Home> </Home>
      {/* <TicketWrapper
        to={audienceCount < maxAudience ? "/tickets" : "/voll"}
        state={{
          autoParkplatz: autoCount,
          camperParkplatz: camperCount,
        }}
      >
        <TicketText>
          {audienceCount < maxAudience ? "Tickets" : "Ausverkauft"}
        </TicketText>
      </TicketWrapper> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 40px;
  position: fixed;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
  align-items: center;
  a {
    border-bottom: 0px;
  }
`

const Home = styled(HeaderText)`
  justify-self: start;
`

const TicketWrapper = styled(Link)`
  animation: TicketButtonAnimation 1.3s 3s forwards
    cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  visibility: hidden;
  background: white;
  height: 48px;
  padding: 4px 24px;
  display: grid;
  justify-content: center;
  align-items: center;
  justify-self: end;

  & > :hover {
    cursor: pointer;
  }

  @keyframes TicketButtonAnimation {
    0% {
      visibility: visible;
      opacity: 0;
      transform: translateY(10px);
    }

    100% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }
  }
`

const TicketText = styled.h3`
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  color: black;
`
