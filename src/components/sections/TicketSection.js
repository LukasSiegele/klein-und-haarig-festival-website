import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import TicketCard from "../cards/TicketCard"
import { Link } from "gatsby"
import { themes } from "../styles/ColorStyles"
import { HeaderText } from "../styles/TextStyles"
import FormButton from "../buttons/FormButton"

export default function TicketSection() {
  const [isFestival, setIsFestival] = useState(true)
  const [isAuto, setIsAuto] = useState(false)
  const [isCamper, setIsCamper] = useState(false)

  const [summary, setSummary] = useState("70")

  // const loaded1 = useRef(false)
  const loaded2 = useRef(false)
  const loaded3 = useRef(false)

  // useEffect(() => {
  //   if (loaded1.current) {
  //     if (isFestival) {
  //       setSummary(summary + 50)
  //     } else if (!isFestival) {
  //       setSummary(summary - 50)
  //     }
  //   } else {
  //     loaded1.current = true
  //   }
  // }, [isFestival])

  useEffect(() => {
    if (loaded2.current) {
      if (isAuto) {
        setSummary(summary + 5)
      } else if (!isAuto) {
        setSummary(summary - 5)
      }
    } else {
      loaded2.current = true
    }
  }, [isAuto])

  useEffect(() => {
    if (loaded3.current) {
      if (isCamper) {
        setSummary(summary + 10)
      } else if (!isCamper) {
        setSummary(summary - 10)
      }
    } else {
      loaded3.current = true
    }
  }, [isCamper])

  return (
    <Wrapper>
      <Content>
        <CardWrapper>
          <TicketCard
            title="Festival Ticket"
            price="70 €"
            details="3 Tage Festival mit Zeltplatz"
            isSelected={isFestival}
            // handleSelection={() => {
            //   setIsFestival(!isFestival)
            // }}
          />
          <TicketCard
            title="Auto Ticket"
            price="5 €"
            details="Parkplatz am Festivalgelände"
            isSelected={isAuto}
            handleSelection={() => {
              setIsAuto(!isAuto)
            }}
          />
          <TicketCard
            title="Camper Ticket"
            price="10 €"
            details="Camperstellplatz auf dem Gelände"
            isSelected={isCamper}
            handleSelection={() => {
              setIsCamper(!isCamper)
            }}
          />
        </CardWrapper>
        {/* <ShoppingCart sumTickets={summary} /> */}
        <ShoppingCartWrapper>
          <SumWrapper>
            <Summary>Insgesamt {summary || "0"} €</Summary>
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

const DetailText = styled(HeaderText)`
  color: ${themes.acid.secondaryColor};
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
