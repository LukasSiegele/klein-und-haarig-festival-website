import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

export default function Submitted() {
  return (
    <Layout>
      <SEO title="Submitted" />
      <Container>
        <Wrapper>
          <Section>
            <Info>Wouhuu! 🥳</Info>
            <Info>Deine Daten sind erfolgreich bei uns angekommen.</Info>
            <Info>
              Wir haben dir die Überweisungsdaten an deine Mail Adresse
              geschickt. Das kann einige Minuten dauern. Falls keine Mail im
              Posteingang liegt, checke erst deinen Spam Ordner und melde dich
              dann falls sie nicht auffindbar ist einfach bei uns via
              ticket@kleinundhaarig.com.
            </Info>
            <Info>Wir freuen uns schon auf dich,</Info>
            <Info>dein Klein und Haarig Team.</Info>
          </Section>
          <Link to="/">
            <FormButton label="Zurueck zur Homepage"></FormButton>
          </Link>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background: white;
  padding: 120px 40px;
`

const Wrapper = styled.div`
  height: 800px;
  max-width: 800px;
`

const Section = styled.div`
  margin-bottom: 60px;
`

const Info = styled.p`
  margin-top: 10px;
`
