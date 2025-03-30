import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import SubmittedImage from "../../static/images/Bach1.jpg"

export default function NewsletterAnmeldungErfolgreich() {
  return (
    <Layout>
      {/* <SEO title="nl-success" /> */}
      <Container>
        <Wrapper>
          <Section>
            <Info>Danke für deine Anmeldung zum Newsletter.</Info>
            <br />
            <Info>
              Du bekommst ab sofort die relevantesten Infos zum Festival auch
              per Mail.
            </Info>
            <br />
            <Info>— Dein KuH Team</Info>
          </Section>
          <ButtonSection>
            <Link to="/">
              <FormButton
                label="Zurück zur Homepage"
                backgroundColor="#fc2546"
                color="#000"
                border="0px"
              ></FormButton>
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
  /* justify-items: center; */
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

const Info = styled.h2`
  margin-top: 10px;
  color: #b9adff;
  color: #fc2546;
  color: rgb(240, 242, 99);
  /* text-shadow: 0px 0px 15px black; */
`

const ButtonSection = styled.div`
  padding: 0;
`
