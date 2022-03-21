import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import LogoSVG from "../../static/images/LogoSideNav.svg"
import BackgroundTexture from "../../static/images/BackgroundTexture.png"
import Stairway from "../../static/images/Stairway.jpg"

import { Headline, PageInfo } from "../components/styles/TextStyles"

export default function Submitted() {
  return (
    <Layout>
      <SEO title="Submitted" />
      <Container>
        <Wrapper>
          <Left>
            <Link to="/">
              <Logo />
            </Link>
            <TextWrapper>
              <Subheader>Tickets erfolgreich gekauft</Subheader>
              <Header>Wir freuen uns auf dich!</Header>
              <ButtonSection>
                <Link to="/">
                  <FormButton label="Zurück zur Startseite"></FormButton>
                </Link>
              </ButtonSection>
            </TextWrapper>
          </Left>
          <Right>
            <ImageWrapper></ImageWrapper>
          </Right>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Container = styled.div``

const Wrapper = styled.div`
  /* height: 900px; */
  background-image: url(${BackgroundTexture});
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 200px;
`

const MainGrid = styled.div``

const Left = styled.div``
const Right = styled.div``

const ImageWrapper = styled.div`
  width: 550px;
  height: 886px;
  background-image: url(${Stairway});
  background-size: cover;
`

// KuH Logo in TopNav
const Logo = styled.div`
  width: 84px;
  height: 79px;
  margin: 40px;
  background-image: url(${LogoSVG});
  background-size: cover;
  align-self: center;
  @media (max-width: 800px) {
    margin-right: 24px;
  }
  :hover {
    cursor: pointer;
  }
`

const TextWrapper = styled.div`
  padding: 80px 120px;
`

const Subheader = styled(PageInfo)`
  margin-bottom: 16px;
`

const Header = styled(Headline)`
  color: black;
`

const ButtonSection = styled.div`
  padding: 0;
  max-width: 400px;
  margin-top: 120px;
`
