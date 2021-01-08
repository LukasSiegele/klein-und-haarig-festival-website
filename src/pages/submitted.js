import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ShopTitle from "../components/shopping/ShopTitle"

export default function Submitted() {
  return (
    <Layout>
      <SEO title="Submitted" />
      <ShopTitle
        info="Wouhuuuu! 🚀"
        title="Wir haben deine Reservierung erhalten."
      />
      <Container>
        <Wrapper>
          <Section>
            <Info>
              Die Überweisungsdaten sind raus an deine Mail. Das kann einige
              Minuten dauern. Falls keine Mail im Posteingang liegt, checke erst
              deinen Spam Ordner und melde dich dann falls sie nicht auffindbar
              ist einfach bei uns via ticket@kleinundhaarig.com.
            </Info>
            <Info>
              Sobald du überwiesen hast schicken wir dir eine
              Zahlungsbestätigungsmail. Auch hier gilt: Falls keine Mail kommt
              einfach melden.
            </Info>
            <br />
            <Info>
              Wir freuen uns schon auf dich, <br />
              dein Klein und Haarig Team.
            </Info>
          </Section>
          <ButtonSection>
            <Link to="/">
              <FormButton label="Zurueck zur Homepage"></FormButton>
            </Link>
          </ButtonSection>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  /* background: white; */
  padding: 20px 40px;
`

const Wrapper = styled.div`
  height: 800px;
  max-width: 500px;
`

const Section = styled.div`
  margin-bottom: 60px;
`

const Info = styled.h4`
  margin-top: 10px;
  color: white;
`

const ButtonSection = styled.div`
  padding: 0;
`
