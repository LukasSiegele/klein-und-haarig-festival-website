import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FormButton from "../buttons/FormButton"

export default function ShoppingCart(props) {
  const { sumTickets } = props

  return (
    <Wrapper>
      <Title>Insgesamt</Title>
      <Summary>{sumTickets || "0"} €</Summary>
      <Link to={`/data`} state={{ sumTickets: sumTickets }}>
        <FormButton label="Weiter" />
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Title = styled.h4``

const Summary = styled.h3``
