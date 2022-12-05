import { Link, navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import LogoSVG from "../../static/images/LogoSideNav.svg"
import BackgroundTexture from "../../static/images/BackgroundTexture.png"
import Stairway from "../../static/images/Stairway.jpg"
import Zeplin from "../../static/images/SuccessZeppelin.png"
import Splash from "../../static/images/SuccessSplash.png"

import {
  Headline,
  PageInfo,
  ImageDescription,
} from "../components/styles/TextStyles"

export default function Submitted({ navigation }) {
  const [isWindow, setIsWindow] = useState(false)

  useEffect(() => {
    setIsWindow(window !== `undefined`)
  }, [])

  useEffect(() => {
    if (isWindow) {
      window.addEventListener("popstate", e => {
        e.preventDefault()
        navigate("/")
      })
    }
  }, [isWindow])

  return (
    <Layout>
      {/* <SEO title="Submitted" /> */}
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <Wrapper>
          <MainGrid>
            <Left>
              <TextWrapper>
                <ZeplinGrafik />
                <Subheader>Ticketkauf erfolgreich</Subheader>
                <Header>Wir freuen uns auf dich!</Header>
                <Description>
                  <TextDescription>
                    Du erhälst in Kürze eine Bestätigung per E-Mail. Das kann
                    bis zu 5 min dauern.
                  </TextDescription>
                  <TextDescription>
                    In der E-Mail findest du deine Ticket-ID und einen Link zu
                    deiner persönlichen Ticketarea, wo dich dein digitales
                    Ticket, Helfer:innen Status und alle Infos zum Festival
                    erwarten.
                  </TextDescription>
                </Description>
                <ButtonSection>
                  <Link to="/">
                    <FormButton label="Zurück zur Startseite ➞"></FormButton>
                  </Link>
                </ButtonSection>
              </TextWrapper>
            </Left>
            <Right>
              <SplashGrafik />
              <ImageWrapper>
                <Image />
                <ImageAuthor>Foto: Michael Reule</ImageAuthor>
              </ImageWrapper>
            </Right>
          </MainGrid>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  background-image: url(${BackgroundTexture});
  overflow: hidden;
`

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 120px;
  max-width: 1440px;

  @media (max-width: 1300px) {
    gap: 30px;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 0px;
    max-width: 700px;
    /* padding-bottom: 150px; */
  }
`

const Left = styled.div`
  padding-top: 120px;
  padding-left: 120px;
  @media (max-width: 1100px) {
    padding: 120px 20px;
  }
`
const Right = styled.div`
  padding-right: 120px;
  justify-self: right;
  /* overflow: hidden; */
  position: relative;
  padding-bottom: 300px;
  @media (max-width: 1100px) {
    padding-right: 0px;
    justify-self: right;
  }
`

const ImageWrapper = styled.div``

const Image = styled.div`
  width: 550px;
  height: 886px;
  background-image: url(${Stairway});
  background-size: cover;

  @media (max-width: 1300px) {
    width: 352px;
    height: 548px;
  }
`

const ImageAuthor = styled(ImageDescription)`
  color: black;
`

const SplashGrafik = styled.div`
  width: 535px;
  height: 637px;
  background-image: url(${Splash});
  background-size: cover;
  position: absolute;
  left: 150px;
  bottom: 0px;
  @media (max-width: 1100px) {
    left: 0px;
  }
`

// KuH Logo in TopNav
const Logo = styled.div`
  width: 84px;
  height: 79px;
  background-image: url(${LogoSVG});
  background-size: cover;
  position: absolute;
  margin: 40px;

  @media (max-width: 800px) {
    margin: 20px;
  }
  :hover {
    cursor: pointer;
  }
`

const ZeplinGrafik = styled.div`
  width: 372px;
  height: 308px;
  background-image: url(${Zeplin});
  background-size: cover;
  position: absolute;
  left: 250px;
  top: -80px;
  @media (max-width: 1100px) {
    left: 100px;
    top: -100px;
  }
`

const TextWrapper = styled.div`
  padding: 80px 0;
  position: relative;
`

const Subheader = styled(PageInfo)`
  margin-bottom: 16px;
`

const Header = styled(Headline)`
  color: black;
`

const Description = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 1em;
  /* margin-left: 40px; */
`

const TextDescription = styled.h5``

const ButtonSection = styled.div`
  padding: 0;
  max-width: 400px;
  margin-top: 120px;
  @media (max-width: 1100px) {
    margin-top: 60px;
  }
`
