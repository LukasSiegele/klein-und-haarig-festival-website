import React, { useState } from "react"
import styled from "styled-components"
import TicketCard from "../cards/TicketCard"
import { Link } from "gatsby"
import FormButton from "../buttons/FormButton"
import useAutoCount from "../../helper/useAutoCount"
import useCamperCount from "../../helper/useCamperCount"

import Background1 from "/static/images/Card-Bg1.jpg"
import Background2 from "/static/images/Card-Bg2.jpg"
import Background3 from "/static/images/Card-Bg3.jpg"

export default function TicketSection(props) {
  const isFestival = true
  // const [isFestival, setIsFestival] = useState(true)
  const festivalPrice = 75
  const [isAuto, setIsAuto] = useState(false)
  const autoPrice = 5
  const [isCamper, setIsCamper] = useState(false)
  const camperPrice = 10

  const [summary, setSummary] = useState(festivalPrice)

  // Auto Count
  const autoPTicketsPage = useAutoCount()

  // Camper Count
  const camperPTicketsPage = useCamperCount()

  // const [member, setMember] = useState()

  // const handleSubmit = e => {
  //   e.preventDefault()
  //   const testMember = ["1012", "420247", "39"]
  //   if (testMember.includes(member)) {
  //   } else {
  //   }
  //   console.log(testMember.includes(member))
  //   console.log(member)
  // }

  return (
    <Wrapper>
      <Content>
        <CardWrapper>
          <Card1>
            <TicketCard
              title="Festival Ticket"
              price={festivalPrice + " €"}
              details="3 Tage Festival mit Zeltplatz"
              isSelected={isFestival}
              cardBackground={Background1}
              // handleSelection={() => {
              //   setIsFestival(!isFestival)
              //   if (!isFestival) {
              //     setSummary(summary + festivalPrice)
              //   } else {
              //     setSummary(summary - festivalPrice)
              //   }
              // }}
            />
          </Card1>
          <Card2>
            <TicketCard
              title="Auto Park Platz"
              price={
                props.autoParkplatz || autoPTicketsPage
                  ? "Ausverkauft"
                  : autoPrice + " €"
              }
              details="Parkplatz auf dem Gelände"
              isSelected={isAuto}
              limit={props.autoParkplatz || autoPTicketsPage}
              handleSelection={() => {
                if (
                  props.autoParkplatz === false ||
                  autoPTicketsPage === false
                ) {
                  setIsAuto(!isAuto)
                  if (!isAuto) {
                    setSummary(summary + autoPrice)
                  } else {
                    setSummary(summary - autoPrice)
                  }
                }
              }}
              cardBackground={Background2}
            />
          </Card2>
          <Card3>
            <TicketCard
              title="Camper Stell Platz"
              price={
                props.camperParkplatz || camperPTicketsPage
                  ? "Ausverkauft"
                  : camperPrice + " €"
              }
              details="Camperstellplatz auf dem Gelände"
              isSelected={isCamper}
              limit={props.camperParkplatz || camperPTicketsPage}
              handleSelection={() => {
                if (
                  props.camperParkplatz === false ||
                  camperPTicketsPage === false
                ) {
                  setIsCamper(!isCamper)
                  if (!isCamper) {
                    setSummary(summary + camperPrice)
                  } else {
                    setSummary(summary - camperPrice)
                  }
                }
              }}
              cardBackground={Background3}
            />
          </Card3>
        </CardWrapper>
        <InfoWrapper>
          <InfoText1>
            Tickets — die Tickets sind personalisiert. Pro Person und E-Mail
            kann nur ein Ticket erworben werden. Auto- und Campertickets sind
            nur in Kombination mir einem Festivalticket erhältlich.
          </InfoText1>
          <InfoText2>
            Parken — Wenn du schon ein Ticket hast und noch ein Auto- oder
            Camperticket dazubuchen möchtest oder diese bereits ausverkauft
            sind, wende dich bitte an{" "}
            <LinkInline href="mailto:info@kleinundhaarig.de" subject="Parken">
              info@kleinundhaarig.de
            </LinkInline>
            . Zum Be- und Entladen kann in jedem Fall vorgefahren werden.
            <br />
            <br />
            Öffis — Unser Gelände ist problemlos mit öffentlichen
            Verkehrsmitteln erreichbar. Vom nächstgelegenen Bahnhof fährt alle
            30 min ein Bus direkt vor das Festival.
          </InfoText2>
        </InfoWrapper>
        <ShoppingCartWrapper>
          <SumWrapper>
            <Summary>Insgesamt {summary || 0} €</Summary>
          </SumWrapper>
          <WeiterWrapper>
            <Link to="/spenden" state={{ sumTickets: summary }}>
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

const Content = styled.div`
  max-width: 900px;
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
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
const Card3 = styled.div`
  animation: TicketCardAnimation 1.3s 0.8s forwards
    cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  visibility: hidden;
`

const ShoppingCartWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 40px 0 200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 0 0 40px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const InfoText1 = styled.h5`
  color: rgba(255, 255, 255, 1);
`
const InfoText2 = styled.h5`
  grid-area: 1 / 2 / 2 / 4;
  color: rgba(255, 255, 255, 1);
  @media (max-width: 800px) {
    grid-area: 1;
  }
`

const SumWrapper = styled.div`
  display: grid;
  align-items: center;
`

const Summary = styled.h4`
  color: white;
`

const WeiterWrapper = styled.div`
  width: 242px;
`

const Label = styled.h4`
  color: white;
  display: inline-block;
`

const LinkInline = styled.a`
  color: rgba(255, 255, 255, 1);
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
`
