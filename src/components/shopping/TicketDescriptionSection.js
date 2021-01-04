import React from "react"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"

export default function TicketDescription(props) {
  return (
    <Wrapper>
      <Title>WTF?! Warum kann ich jeweils nur ein Ticket auswaehlen?</Title>
      <Description>
        Da ihr mit dem Kauf eines Tickets unserem Verein beitretet benötigen wir
        von jedem die persönliche Zustimmung (mehr dazu in Schritt 2/3). Keine
        Sorge, die Mitgliedschaft ist nur temporär für den Festivalzeitraum und
        wird danach automatisch beendet. Etwas umständlich dieses bürokratisches
        Zeug, sorry dafür, aber ihr könnt einfach mehrmals den Prozess
        durchlaufen um Tickets für eure ganze Crew zu kaufen und somit das
        System austricksen. Ihr kleinen Che Guevaras. :*
      </Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 60px 40px;
  background: ${themes.acid.backgroundColor2};
`

const Title = styled.h4`
  margin-bottom: 20px;
`

const Description = styled.p``
