import React, { useState } from "react"
import styled from "styled-components"
import TicketCard from "../cards/TicketCard"
import { Link } from "gatsby"
import FormButton from "../buttons/FormButton"
import useAutoCount from "../../helper/useAutoCount"
import useCamperCount from "../../helper/useCamperCount"
import { Note, SubheaderSmall, TextSmall } from "../styles/TextStyles"

import Background1 from "/static/images/FestivalTicket.jpg"
import Background2 from "/static/images/Card-Bg2.jpg"
import Background3 from "/static/images/CamperTicket.jpg"

export default function TicketSection(props) {
  const isFestival = true
  // const [isFestival, setIsFestival] = useState(true)
  const festivalPrice = 100
  const serviceFees = 2
  const [isAuto, setIsAuto] = useState(false)
  const autoPrice = 5
  const [isCamper, setIsCamper] = useState(false)
  const camperPrice = 20

  const [summary, setSummary] = useState(festivalPrice + serviceFees)

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
              details="4 Tage Festival
inklusive Camping"
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
              title="Camper Stellplatz"
              price={
                props.camperParkplatz || camperPTicketsPage
                  ? "Ausverkauft"
                  : camperPrice + " €"
              }
              details="Auf dem Gelände
maximale Fahrzeuggröße 6 x 2.5 m"
              isSelected={isCamper}
              tripleLineDetail={true}
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
          </Card2>
          {/* <Card3></Card3> */}
        </CardWrapper>
        <InfoWrapper>
          <LeftBlock>
            <InfoHeader>Tickets</InfoHeader>
            <InfoText>
              Die Tickets sind personalisiert. Pro Person und E-Mail-Adresse
              kann nur ein Ticket erworben werden. Campertickets sind nur in
              Kombination mit einem Festival Ticket erhältlich.
            </InfoText>
          </LeftBlock>

          <RightBlock>
            <InfoHeader>Camperticket nachkaufen</InfoHeader>
            <InfoText>
              Wenn du bereits ein Festivalticket besitzt und ein Camperticket
              nachkaufen möchtest, wende dich bitte an{" "}
              <LinkInline
                href="mailto:info@kleinundhaarig.de"
                subject="Website: Parken"
              >
                info@kleinundhaarig.de
              </LinkInline>
            </InfoText>
            <InfoHeader>Öffis</InfoHeader>
            <InfoText>
              Das Festival ist sehr gut mit öffentlichen Verkehrsmitteln
              erreichbar. Vom nächstgelegenen Bahnhof fährt alle 30 min ein Bus
              direkt vor das Gelände. Detailierte Infos bekommst du rechtzeitig
              vor dem Festival.
            </InfoText>
            <InfoHeader>Parkplätze</InfoHeader>
            <InfoText>
              Dieses Jahr wird es auf dem Festivalgelände keine
              Parkmöglichkeiten mehr geben. Ein Shuttelservice wird die
              Parkplätze in der Umgebung mit dem Festival verbinden. Dafür kann
              eine kleine Gebühr anfallen. Detailierte Infos bekommst du
              rechtzeitig vor dem Festival.
            </InfoText>
          </RightBlock>
        </InfoWrapper>
        <ShoppingCartWrapper>
          <SumWrapper>
            <Summary>Dein Gesamtpreis {summary || 0} €</Summary>
            <SummaryNote>(inkl. 2€ Paypal Servicegebühr)</SummaryNote>
          </SumWrapper>
          <WeiterWrapper>
            <Link
              to="/data"
              state={{
                sumTickets: summary,
                onlyFriends: props.onlyFriends,
              }}
            >
              <FormButton label="Weiter ➞" color="black" />
            </Link>
          </WeiterWrapper>
        </ShoppingCartWrapper>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 120px 40px;
  display: grid;
  justify-content: center;
  background: black;
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const Content = styled.div`
  max-width: 800px;
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-items: start;
  gap: 60px;
  width: auto;

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
const Card3 = styled.div`
  animation: TicketCardAnimation 1.3s 0.8s forwards
    cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;
  visibility: hidden;
`

const ShoppingCartWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 80px 0 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 40px 0 80px;
    gap: 30px;
    /* justify-items: center; */
  }
`

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  /* max-width: 500px; */
  padding: 0 0 80px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
    /* max-width: 331px; */
  }
`

const LeftBlock = styled.div``

const RightBlock = styled.div``

const InfoHeader = styled(SubheaderSmall)`
  margin-top: 40px;
  margin-bottom: 8px;
`

const InfoText = styled(Note)``

const SumWrapper = styled.div`
  display: grid;
  align-items: center;
`

const Summary = styled.h4`
  color: white;
`
const SummaryNote = styled(Note)``

const WeiterWrapper = styled.div`
  width: 242px;
  @media (max-width: 800px) {
    width: 100%;
  }
`

const Label = styled.h4`
  color: white;
  display: inline-block;
`

const LinkInline = styled.a`
  color: white;
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
`
