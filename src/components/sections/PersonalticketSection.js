import { Link } from "gatsby"
import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FormButton from "../buttons/FormButton"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import LogoSVG from "../../../static/images/LogoSideNavWhite.svg"
import MobileLogoSVG from "../../../static/images/LogoSideNav.svg"
import Stairway from "../../../static/images/TicketareaLogin.jpg"
import Kritzel from "../../../static/images/TicketareaRotesKritzel2.png"
import VipSection1 from "../sections/vip/VipSection1"
import QRCode from "react-qr-code"
import BackgroundTexture from "../../../static/images/BackgroundTexture.png"
import MobileTicket from "../../../static/images/MobileTicketBackground.png"

import {
  Headline,
  MasterHeadline,
  PageHeader,
  PageInfo,
  ImageDescription,
  SubheaderSmall,
  Note,
} from "../styles/TextStyles"

import Aufbau from "../../../static/images/Aufbau.jpg"

/*
Wir bitten dich um etwas Geduld, diese Seite wird gerade von unsaufgebaut. Bald findest du hier: 
*/
const PersonalTicketSection = props => {
  const userInfo = props.userInfo.fields
  console.log(userInfo)

  const isFestival = true

  const festivalPrice = 100
  const serviceFees = 2

  const [isCamper, setIsCamper] = useState(false)
  const camperPrice = 20

  const [summary, setSummary] = useState(festivalPrice + serviceFees)

  // Camper Count
  const camperPTicketsPage = 1

  // Gekaufte Tickets als Text anzeigen
  const [isTickets, setIsTickets] = useState(false)
  useEffect(() => {
    if (userInfo.Camper) {
      return setIsTickets("1x Festival, 1x Camper")
    } else {
      return setIsTickets("1x Festival")
    }
  }, [])

  return (
    <Layout>
      <SEO title="personal ticket area" />
      <Container>
        <MobileSection>
          <MUpper>
            <MHeaderSection>
              <Link to="/">
                <MLogo />
              </Link>
              <MHeaderContent>
                <Info>Klein und Haarig 2022</Info>
                <Title>Digitales Ticket</Title>
              </MHeaderContent>
            </MHeaderSection>
            <MTicketSection>
              <MQRCodeGroup>
                <Outline>
                  <QRCode value={userInfo.TicketID} />
                </Outline>
                <IDGroup>
                  <LabelIDGroup>
                    <LabelID> ID</LabelID>
                  </LabelIDGroup>
                  <TicketID>{userInfo.TicketID}</TicketID>
                </IDGroup>
              </MQRCodeGroup>
            </MTicketSection>
          </MUpper>

          <MTicketInfoSection>
            <MTicketInfoGroup>
              <Title>
                {userInfo.Vorname} {userInfo.Nachname}
              </Title>
              <Title>{isTickets}</Title>
            </MTicketInfoGroup>
          </MTicketInfoSection>

          <MInfoSection>
            <DescriptionGrid>
              <DescriptionGridContent>
                <InfoLabel>Was brauche ich für den Einlass?</InfoLabel>
                <InfoText>
                  Halte am Eingang deinen Ausweis und entweder diesen QR Code
                  oder den auf deinem Hardticket bereit.
                </InfoText>
                <Seperator />
              </DescriptionGridContent>
              <DescriptionGridContent>
                <InfoLabel>Tipp</InfoLabel>
                <InfoText>
                  Auf dem Festivalgelände gibt es schlechten Empfang. Wenn du
                  kein Hardticket hast empfehlen wir einen Screenshot vom QR
                  Code mit deinem Smartphone zu machen und das Foto
                  bereitzuhalten.
                </InfoText>
              </DescriptionGridContent>
            </DescriptionGrid>
          </MInfoSection>
        </MobileSection>

        <Wrapper>
          <Left>
            <Link to="/">
              <Logo />
            </Link>
          </Left>
          <Right>
            <TextWrapper>
              <TitlePersonalStroke> Personal </TitlePersonalStroke>
              <TitleTicketarea>Ticket Area</TitleTicketarea>
              <Description>
                Hallo {userInfo.Vorname}, <br />
                dein digitales Ticket (QR Code) ist ab jetzt auf dieser Seite
                einsehbar.
              </Description>
            </TextWrapper>
            <AccordionWrapper>
              <DesktopDigitalesTicket>
                <AccordionSection>
                  <AccHeader>
                    <SectionTitle>Dein Digitales Ticket (QR Code)</SectionTitle>
                    {/* <ComingSoon>qr code coming soon</ComingSoon> */}
                  </AccHeader>
                  {/* <AccDescription>
                  Hier dein offizielles digitale Tickets.
                </AccDescription> */}
                  <AccContent>
                    <Tile>
                      <TileGrid>
                        <QRGroup>
                          <Outline>
                            <QRCode value={userInfo.TicketID} />
                          </Outline>
                          <IDGroup>
                            <LabelIDGroup>
                              <LabelID> ID</LabelID>
                            </LabelIDGroup>
                            <TicketID>{userInfo.TicketID}</TicketID>
                          </IDGroup>
                        </QRGroup>
                        <VipSection1 userData={userInfo} />
                      </TileGrid>
                    </Tile>

                    <DescriptionGrid>
                      <DescriptionGridContent>
                        <InfoLabel>Was brauche ich für den Einlass?</InfoLabel>
                        <InfoText>
                          Halte am Eingang deinen Ausweis und entweder diesen QR
                          Code oder den auf deinem Hardticket bereit.
                        </InfoText>
                      </DescriptionGridContent>
                      <DescriptionGridContent>
                        <InfoLabel>Tipp</InfoLabel>
                        <InfoText>
                          Auf dem Festivalgelände gibt es schlechten Empfang.
                          Wenn du kein Hardticket hast empfehlen wir einen
                          Screenshot vom QR Code zu machen und das Foto
                          bereitzuhalten.
                        </InfoText>
                      </DescriptionGridContent>
                    </DescriptionGrid>
                  </AccContent>
                </AccordionSection>
              </DesktopDigitalesTicket>
              <AccordionSection>
                <AccHeader>
                  <SectionTitle>Dein Helfer:innen Status</SectionTitle>
                  <ComingSoon>coming soon</ComingSoon>
                </AccHeader>
              </AccordionSection>
              <AccordionSection>
                <AccHeader>
                  <SectionTitle>Anfahrt & Infos</SectionTitle>
                  <ComingSoon>coming soon</ComingSoon>
                </AccHeader>
              </AccordionSection>
            </AccordionWrapper>
          </Right>

          {/* <Right>
              <Kritzelgrafik />
              <ImageWrapper>
                <Image />
                <ImageAuthor>Foto: Dominik Merle</ImageAuthor>
              </ImageWrapper>
            </Right> */}
        </Wrapper>
      </Container>
    </Layout>
  )
}

export default PersonalTicketSection
const Container = styled.div`
  background: black;
  overflow: hidden;
  color: white;
`

const MobileSection = styled.div`
  margin-bottom: 100px;
  padding-bottom: 100px;
  border-bottom: 3px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;

  @media only screen and (min-device-width: 480px) {
    display: none;
  }
`

const MUpper = styled.div`
  background-image: url(${BackgroundTexture});
`

const MHeaderSection = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid black;
`

const MHeaderContent = styled.div``

const Info = styled(PageInfo)`
  margin-bottom: 4px;
  z-index: 1;
`
const Title = styled(PageHeader)`
  z-index: 1;
`

const MLogo = styled.div`
  width: 84px;
  height: 79px;
  background-image: url(${MobileLogoSVG});
  background-size: cover;
`

const MTicketSection = styled.div`
  background-image: url(${MobileTicket});
  background-size: cover;
`

const MQRCodeGroup = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-items: center;
  padding: 100px 20px;
`

const MTicketInfoSection = styled.div`
  background: #cbc3ff;
  padding: 20px;
`

const MTicketInfoGroup = styled.div`
  display: grid;
  gap: 5px;
`

const TicketBackground = styled.img`
  width: 126px;
  position: relative;
  left: 0px;
  top: 0px;
  cursor: pointer;
  pointer-events: auto;
  height: 41px;
`

const MInfoSection = styled.div``

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding-bottom: 120px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding-bottom: 60px;
  }
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`

const Left = styled.div``

const Right = styled.div`
  position: relative;
`

// KuH Logo in TopNav
const Logo = styled.div`
  width: 84px;
  height: 79px;
  background-image: url(${LogoSVG});
  background-size: cover;
  margin: 40px;

  @media (max-width: 800px) {
    margin: 20px;
  }
  :hover {
    cursor: pointer;
  }
`

const TextWrapper = styled.div`
  padding: 24px 0;
  @media (max-width: 800px) {
    padding: 0px 20px;
  }
`

const TitlePersonalStroke = styled(MasterHeadline)`
  /* display: inline; */
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";
  text-transform: none;
  color: black;
  text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff,
    1px 1px 0 #ffffff;
  @media (max-width: 700px) {
    font-size: 70px;
  }
`

const TitleTicketarea = styled(MasterHeadline)`
  display: contents;
  text-align: left;
  font-family: "GT-Alpina-Extended-Regular";
  text-transform: none;
  text-shadow: none;
  @media (max-width: 700px) {
    font-size: 70px;
  }
`

const Description = styled.h3`
  margin-top: 60px;
  max-width: 600px;
`

const AccordionWrapper = styled.div`
  margin: 100px 0;
  @media (max-width: 800px) {
    margin: 60px 20px;
  }

  @media (max-width: 480px) {
    margin: 60px 0px;
  }
`

const AccordionSection = styled.div`
  margin-bottom: 40px;
`

const AccHeader = styled.div`
  margin-bottom: 60px;
  border-top: 0.5px solid white;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: start;
  gap: 15px;
  @media (max-width: 800px) {
    padding: 0 20px;
    grid-template-columns: 1fr;
    gap: 0px;
  }
`
const DesktopDigitalesTicket = styled.div`
  @media only screen and (max-device-width: 480px) {
    display: none;
  }
`

const AccContent = styled.div``

const Tile = styled.div`
  padding: 60px;
  border-radius: 30px 0 0 30px;
  background: rgba(255, 255, 255, 0.1);

  @media (max-width: 800px) {
    padding: 20px;
    border-radius: 30px;
  }
`

const QRGroup = styled.div``

const Outline = styled.div`
  background: #cbc3ff;
  padding: 10px;
  border-radius: 8px;
`

const IDGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-items: center;
  gap: 10px;
`

const LabelIDGroup = styled.div`
  margin-top: 20px;
  background: black;
  padding: 16px;
  border-radius: 8px;
  width: auto;
`

const LabelID = styled.div`
  opacity: 0.5;
`

const TicketID = styled.div`
  margin-top: 20px;
  background: black;
  padding: 16px;
  border-radius: 8px;
  width: auto;
  letter-spacing: 1px;
`

const TileGrid = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const DescriptionGrid = styled.div`
  margin-top: 20px;
  padding: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }
`

const DescriptionGridContent = styled.div``

const InfoLabel = styled(SubheaderSmall)`
  color: white;
  display: inline-block;
`

const InfoText = styled(Note)`
  margin-top: 8px;
  margin-bottom: 20px;
`

const Seperator = styled.div`
  height: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

const AccDescription = styled.h5`
  max-width: 600px;
  padding-bottom: 40px;
`

const SectionTitle = styled.h3`
  margin-top: 20px;
  display: inline;
`

const ComingSoon = styled(PageInfo)`
  margin-top: 15px;
  color: #fff991;
`

const ImageWrapper = styled.div`
  @media (max-width: 1500px) {
    display: none;
  }
`

const Kritzelgrafik = styled.div`
  width: 501px;
  height: 445px;
  background-image: url(${Kritzel});
  background-size: cover;
  position: absolute;
  left: -250px;
  top: 50px;
  @media (max-width: 1300px) {
    top: -260px;
    left: -350px;
  }
`

const Image = styled.div`
  width: 550px;
  height: 886px;
  background-image: url(${Aufbau});
  background-size: cover;
`

const ImageAuthor = styled(ImageDescription)``

const Header = styled(Headline)``
