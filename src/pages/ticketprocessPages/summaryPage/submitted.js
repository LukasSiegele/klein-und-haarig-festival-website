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
          info="Wouhuuuu!"
          title="Wir haben deine Reservierung erhalten"
        />
        <Wrapper>
          <Section>
            <Info>
              Spätestens in ein paar Minuten solltest du eine Bestätigungsmail
              von uns erhalten. Bitte checke auch deinen Spam-Ordner! Wenn du
              keine E-Mail bekommen hast, melde dich bitte via
              ticket@kleinundhaarig.de bei uns.
            </Info>
            <br />
            <Info>
              Wir freuen uns auf dich! <br />
              Dein KuH Team
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
  background-image: url(${SubmittedImage});
  background-position: 50%;
  background-size: cover;
  border: solid black;
  border-width: 40px 40px 0px 40px;
  /* text-align: center; */
  padding: 10px 20px 500px 20px;
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
