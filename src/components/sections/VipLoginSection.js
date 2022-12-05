import { Link } from "gatsby"
import { navigate } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import FormButton from "../../components/buttons/FormButton"
import Layout from "../../components/layout/layout"
// import SEO from "../../components/layout/seo"
import LogoSVG from "../../../static/images/LogoSideNavWhite.svg"
import Stairway from "../../../static/images/TicketareaLogin.jpg"
import Zeplin from "../../../static/images/SuccessZeppelin.png"
import Kritzel from "../../../static/images/TicketareaRotesKritzel.png"
import Klecks from "../../../static/images/TicketareaLila.png"

import {
  Headline,
  PageInfo,
  Note,
  ImageDescription,
} from "../../components/styles/TextStyles"

const VipLoginSection = props => {
  const [ticketid, setTicketid] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log(ticketid)
    props.handleSubmit(ticketid)
  }

  console.log(props.hasError)

  return (
    <Layout>
      {/* <SEO title="vip area" /> */}
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <Wrapper>
          {/*hasAccess ? <h1>Secret festival information</h1> : <VipAccessForm/>*/}
          <MainGrid>
            <Left>
              <TextWrapper>
                <ZeplinGrafik />

                <Subheader>Ticketarea</Subheader>
                <Header>Melde dich mit deiner Ticket-ID an</Header>
                {/* <Description>
                  <TextDescription>
                  Du erhälst in Kürze eine Bestätigung per E-Mail.
                  </TextDescription>
                  <TextDescription>
                  Mit deiner Ticket-ID (sehr wichtig, nicht verlieren)
                  gelangst du bald in deine persönliche Ticketarea. Wir geben
                  dir Bescheid sobald du dich einloggen kannst. Dort findest
                  du dann unter Anderem dein digitales Ticket, nähere Infos
                  zum Festival und deinen Helferstatus.
                  </TextDescription>
                </Description> */}
                <LoginWrapper>
                  <form onSubmit={handleSubmit}>
                    <InputSection>
                      <input
                        type="text"
                        name="ticketid"
                        value={ticketid}
                        placeholder="Ticket-ID"
                        required
                        onChange={e => setTicketid(e.target.value)}
                      />{" "}
                    </InputSection>
                    <ButtonSection>
                      {props.hasError ? (
                        <ErrorMsg>Wrong Ticket ID</ErrorMsg>
                      ) : null}
                      <FormButton typ="submit" label="Login"></FormButton>
                    </ButtonSection>
                  </form>
                </LoginWrapper>
              </TextWrapper>
            </Left>
            <Right>
              <KlecksGrafik />
              <Kritzelgrafik />
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

export default VipLoginSection

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

const Kritzelgrafik = styled.div`
  width: 501px;
  height: 445px;
  background-image: url(${Kritzel});
  background-size: cover;
  position: absolute;
  right: -250px;
  top: 150px;
  @media (max-width: 1300px) {
    top: 0px;
  }
`

const KlecksGrafik = styled.div`
  width: 175px;
  height: 184px;
  background-image: url(${Klecks});
  background-size: cover;
  position: absolute;
  left: -100px;
  bottom: 400px;
  @media (max-width: 1300px) {
    top: 300px;
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
  left: 140px;
  top: -100px;
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
  color: white;
`

const Header = styled(Headline)``

const Description = styled.div`
  margin-top: 40px;
  display: grid;
  gap: 1em;
  /* margin-left: 40px; */
`

const TextDescription = styled.h5``

const LoginWrapper = styled.div`
  display: grid;
  gap: 30px;
  max-width: 300px;
  margin-top: 60px;
`

const InputSection = styled.div``

const ButtonSection = styled.div`
  padding: 0;
  max-width: 400px;
`
const ErrorMsg = styled(Note)`
  color: red;
  margin-top: 13px;
  @media (max-width: 768px) {
    margin-top: 4px;
  }
`
