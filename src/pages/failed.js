import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import LogoSVG from "../../static/images/LogoSideNavWhite.svg"

import FailedGekritzel from "../../static/images/FailedGekritzel2.png"
import Mannequin from "../../static/images/FailedMannequin.png"

import {
  Headline,
  PageInfo,
  ImageDescription,
} from "../components/styles/TextStyles"

export default function Failed() {
  return (
    <Layout>
      <SEO title="Failed" />
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <Wrapper>
          <Maingrid>
            <Left>
              <MannequinGrafik />
              <TextWrapper>
                <Subheader>Hoppla</Subheader>
                <Header>Da hat wohl etwas nicht geklappt...</Header>
                <Description>
                  <TextDescription>
                    Dein Ticketkauf konnte nicht abgeschlossen werden. Mögliche
                    Gründe dafür:
                  </TextDescription>
                  <TextList>
                    <ul>
                      <li>
                        Ein oder mehrere Tickets (Festival oder Camper) sind
                        mittlerweile ausverkauft - versuche es bitte erneut
                      </li>
                      <li>
                        Es gab Probleme bei der Bezahlung - bitte überprüfe dein
                        Paypal Konto oder deine Zahlunsdaten
                      </li>
                    </ul>
                  </TextList>
                  <TextDescription>
                    Falls das nicht hilft wende dich bitte an{" "}
                    <LinkInline
                      href="mailto:info@kleinundhaarig.de"
                      subject="Website: Problem beim Ticketkauf"
                    >
                      info@kleinundhaarig.de
                    </LinkInline>
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
              <ImageWrapper>
                <Image />
              </ImageWrapper>
            </Right>
          </Maingrid>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  background: black;
  display: grid;
  overflow: hidden;
  color: white;
`

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
`

const Maingrid = styled.div`
  padding-bottom: 120px;

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
  }
`

const Left = styled.div`
  padding-top: 120px;
  padding-left: 120px;
  position: relative;
  @media (max-width: 1100px) {
    padding: 120px 20px;
  }
`

const MannequinGrafik = styled.div`
  width: 238px;
  height: 249px;
  background-image: url(${Mannequin});
  background-size: cover;
  position: absolute;
  right: -100px;
  top: 50px;
  @media (max-width: 1100px) {
    /* padding-right: 120px; */
    right: 10px;
    top: 20px;
  }
`

const Right = styled.div`
  padding-right: 120px;
  justify-self: right;
  overflow: hidden;
  @media (max-width: 1100px) {
    margin-top: -900px;
    padding-right: 0px;
    justify-self: right;
  }
`

const ImageWrapper = styled.div``

const Image = styled.div`
  width: 790px;
  height: 703px;
  background-image: url(${FailedGekritzel});
  background-size: cover;

  @media (max-width: 1300px) {
    width: 352px;
    height: 548px;
  }
`

const ImageAuthor = styled(ImageDescription)``

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

const TextWrapper = styled.div`
  padding: 80px 0;
`

const Subheader = styled(PageInfo)`
  margin-bottom: 16px;
  color: white;
`

const Header = styled(Headline)`
  color: white;
`

const Description = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 1em;
`

const TextDescription = styled.h5`
  /* margin-left: 40px; */
`

const LinkInline = styled.a`
  color: rgba(255, 255, 255);
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255);
`

const TextList = styled.h5`
  /* margin-left: 40px; */
`

const ButtonSection = styled.div`
  padding: 0;
  max-width: 400px;
  margin-top: 120px;
  @media (max-width: 1100px) {
    margin-top: 60px;
  }
`
