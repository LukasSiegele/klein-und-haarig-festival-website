import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ShopTitle from "../components/shopping/ShopTitle"
import SubmittedImage from "../../static/images/Submitted.jpg"

export default function Submitted() {
  return (
    <Layout>
      <SEO title="Submitted" />
      <Container>
        <ShopTitle
          info="Wouhuuuu! 🚀"
          title="Wir haben deine Reservierung erhalten"
        />
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
              Zahlungsbestätigungsmail.
            </Info>
            <br />
            <Info>
              Wir freuen uns schon auf dich, <br />
              dein Klein und Haarig Team ✨
            </Info>
          </Section>
          <ButtonSection>
            <Link to="/">
              <FormButton label="Zurück zur Homepage"></FormButton>
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
  background: blue;
  background-image: url(${SubmittedImage});
  background-size: cover;
  border: solid black;
  border-width: 40px 40px 0px 40px;
  /* text-align: center; */
  padding: 10px 20px 200px 20px;
`

const Wrapper = styled.div`
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
