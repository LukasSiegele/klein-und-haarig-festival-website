import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { HeaderText } from "../styles/TextStyles"

export default function Header() {
  return (
    <Wrapper>
      <Home></Home>
      <TicketWrapper to="/ticket">
        <TicketText>Tickets</TicketText>
      </TicketWrapper>
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
`

const Home = styled(HeaderText)`
  justify-self: start;
`

const TicketWrapper = styled(Link)`
  background: black;
  height: 48px;
  padding: 6px 25px;
  display: grid;
  justify-content: center;
  align-items: center;
  justify-self: end;

  * & :hover {
    cursor: pointer;
  }
`

const TicketText = styled(HeaderText)`
  color: white;
`
