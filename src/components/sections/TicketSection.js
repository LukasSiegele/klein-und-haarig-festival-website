import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import TicketCard from "../cards/TicketCard"
import { Link } from "gatsby"
import FormButton from "../buttons/FormButton"

export default function TicketSection() {
  const [isFestival, setIsFestival] = useState(false)
  const festivalPrice = 70
  const [isAuto, setIsAuto] = useState(false)
  const autoPrice = 5
  const [isCamper, setIsCamper] = useState(false)
  const camperPrice = 10

  const [summary, setSummary] = useState(0)

  return (
    <Wrapper>
      <Content>
        <CardWrapper>
          <TicketCard
            title="Festival Ticket"
            price="70 €"
            details="3 Tage Festival mit Zeltplatz"
            isSelected={isFestival}
            handleSelection={() => {
              setIsFestival(!isFestival)
              if (!isFestival) {
                setSummary(summary + festivalPrice)
              } else {
                setSummary(summary - festivalPrice)
              }
            }}
          />
          <TicketCard
            title="Auto Ticket"
            price="5 €"
            details="Parkplatz am Festivalgelände"
            isSelected={isAuto}
            handleSelection={() => {
              setIsAuto(!isAuto)
              if (!isAuto) {
                setSummary(summary + autoPrice)
              } else {
                setSummary(summary - autoPrice)
              }
            }}
          />
          <TicketCard
            title="Camper Ticket"
            price="10 €"
            details="Camperstellplatz auf dem Gelände"
            isSelected={isCamper}
            handleSelection={() => {
              setIsCamper(!isCamper)
              if (!isCamper) {
                setSummary(summary + camperPrice)
              } else {
                setSummary(summary - camperPrice)
              }
            }}
          />
        </CardWrapper>
        <ShoppingCartWrapper>
          <SumWrapper>
            <Summary>Insgesamt {summary || 0} €</Summary>
          </SumWrapper>
          <WeiterWrapper>
            <Link to="/data" state={{ sumTickets: summary }}>
              <FormButton label="Weiter" />
            </Link>
          </WeiterWrapper>
        </ShoppingCartWrapper>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0px 40px;
  display: grid;
  justify-content: center;
`

const Content = styled.div``

const CardWrapper = styled.div`
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const ShoppingCartWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 40px 0 120px;
  max-width: 800px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 30px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const SumWrapper = styled.div``

const Summary = styled.h4`
  color: white;
`

const WeiterWrapper = styled.div`
  width: 242px;
`
