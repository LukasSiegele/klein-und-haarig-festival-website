import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ShopTitle from "../components/shopping/ShopTitle"
import SubmittedImage from "../../static/images/Submitted.jpg"

export default function NewsletterAnmeldungErfolgreich() {
  return (
    <Layout>
      <SEO title="nl-success" />
      <Container>
        <ShopTitle
          info="Die Anmeldung war erfolgreich!"
          title="Du bist jetzt im Newsletter Verteiler"
        />
        <Wrapper>
          <Section>
            <Info>
              Alle Infos für das Klein und Haarig Festival 2022 und in den
              weiteren Jahren erhältst du ab jetzt per Mail. Dadurch erfährst du
              als Erstes wann der Ticketverkauf startet, wer alles auflegt und
              alles zur Anfahrt und Camping.
            </Info>
            <br />
            <Info>
              Wir freuen uns auf dich! <br />
              Dein KuH Team
            </Info>
          </Section>
          <ButtonSection>
            <Link to="/">
              <FormButton label="Zurück zur Homepage" border="0px"></FormButton>
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
  text-align: center;
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
