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
import Shuttle from "../../../static/images/Shuttle.jpg"

import {
  Headline,
  MasterHeadline,
  PageHeader,
  PageInfo,
  ImageDescription,
  SubheaderSmall,
  SubheaderSuperSmall,
  SubheaderBig,
  Note,
  Text,
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
                    <SectionTitle>
                      01 — Dein Digitales Ticket (QR Code)
                    </SectionTitle>
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
                  <SectionTitle>02 — Dein Helfer:innen Status</SectionTitle>
                  <ComingSoon>coming soon</ComingSoon>
                </AccHeader>
              </AccordionSection>
              <AccordionSection>
                <AccHeader>
                  <SectionTitle>03 — Infos</SectionTitle>
                </AccHeader>

                <InfoSection>
                  <InfoLabel>Neu dieses Jahr</InfoLabel>
                  <InfoText>
                    Dieses Jahr geht das Festival einen Tag länger — von Freitag
                    12 Uhr bis Montag 12 Uhr. Die Secondstage wird durchgehend
                    laufen, damit jeder auf seinen Geschmack kommt. Zusätzlich
                    wird es eine Ambient Stage und mehr Kunstinstallationen
                    geben. Außerdem gibt es ein offizielles Rahmenprogramm mit
                    Tattooartists, einem Modular Synthesizer Workshop,
                    Rückenwohl mit Matze, Vorträgen, einer
                    Filmvorführung,...Bleibt gespannt.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Achtsamkeit, Empathie & Awareness</InfoLabel>
                  <InfoText>
                    Auch bei uns gilt Consent: Nur ein Ja ist ein Ja. Wir
                    wollen, dass alle eine gute Zeit haben, indem wir einen Raum
                    schaffen in dem sich jeder frei ausleben kann. Habt deshalb
                    alle ein Auge auf einander. Geht aufeinander zu, falls es
                    jemandem schlecht geht. Respektiert und seid offen für
                    andere Lebens- und Denkensweisen und lernt neue Perspektiven
                    kennen.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Anfahrt</InfoLabel>
                  <InfoText>
                    Das Festivalgelände befindet sich auf dem{" "}
                    <LinkInline
                      href="https://goo.gl/maps/muaWAGwPx7nebDjJ9"
                      target="_blank"
                    >
                      Zeltplatz Christophshof, 75323 Bad Wildbad.
                    </LinkInline>
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Öffis</InfoLabel>
                  <InfoText>
                    Die{" "}
                    <LinkInline
                      href="https://www.fahrplan.guru/reise/a?date=15.07.2022&destination_country=Deutschland&destination_state=Baden-W%C3%BCrttemberg&destination_type=stop&destinname=Zeltplatz%2C%20Bad%20Wildbad&direction=dep&origin_country=Deutschland&origin_state=Baden-W%C3%BCrttemberg&origin_type=stop&originname=Bad%20Wildbad%20Bahnhof&passengers_train_card=&person=1&time=11%3A30&transport_type="
                      target="_blank"
                    >
                      Buslinie 7780
                    </LinkInline>{" "}
                    fährt alle 30 min vom Bahnhof Bad Wildbad und bringt dich in
                    10 min direkt vor das Gelände. Die Bushaltestelle heißt
                    "Zeltplatz".
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Parken & Shuttle</InfoLabel>
                  <InfoText>
                    Auf dem Festivalgelände wird es dieses Jahr keine Parkplätze
                    für Autos geben. Unser Parkplatz befindet sich dieses Jahr
                    hier:{" "}
                    <LinkInline
                      href="https://goo.gl/maps/VYxFbGm8zefcC2dG7"
                      target="_blank"
                    >
                      Parkplatz Kaltenbronn
                    </LinkInline>{" "}
                    (Nicht der Wanderparkplatz, siehe Karte)
                  </InfoText>
                  <ImageContainer>
                    <img
                      src={require("../../../static/images/Shuttle.jpg")}
                      width="100%"
                      height="auto"
                    />
                  </ImageContainer>
                  <DetailLabel>→ Anreise</DetailLabel>
                  <InfoText>
                    Fahrt bei der Anreise direkt zum zum Festivaleingang, um
                    dort alles was ihr auf dem Festival benötigt auszuladen.
                    Fahrt dann alleine zum Parkplatz. Ein Shuttle Auto bringt
                    euch von dort wieder zurück zum Festival.
                  </InfoText>
                  <DetailLabel>Abreise →</DetailLabel>
                  <InfoText>
                    Vom Festivaleingang bringt euch ein Shuttle zum Parkplatz.
                    Von dort aus könnt ihr zum Eingang wieder zurück fahren um
                    einzuladen.
                  </InfoText>
                  <DetailLabel>Hinweis</DetailLabel>
                  <InfoText>
                    Das Shuttle kann nur zur An- und Abreise genutzt werden.
                    Bitte nehmt alles aus dem Auto was ihr auf dem Festival
                    braucht. Insbesondere Wert-gegenstände, da dieser
                    öffentliche Parkplatz nicht überwacht wird. Wir übernehmen
                    keine Haftung. Zu Stoßzeiten solltet ihr Wartezeiten
                    einplanen. Wir bitten um euer Verständnis und eure Geduld.
                  </InfoText>
                  <DetailLabel>Shuttle Zeiten</DetailLabel>
                  <List>
                    <ListItem>Fr: 12-22 Uhr</ListItem>
                    <ListItem>Sa: 12-15 Uhr </ListItem>
                    <ListItem>So: 11-16 Uhr </ListItem>
                    <ListItem>Mo: 11-16 Uhr</ListItem>
                  </List>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Camperticket </InfoLabel>
                  <InfoText>
                    Mit dem Camperticket könnt ihr direkt aufs Gelände fahren
                    und dort für die Dauer des Festivals stehen bleiben. Haltet
                    dazu bitte am Einlass und zeigt euer Ticket vor (QR Code).
                    Wir weißen euch dann einem Platz zu.
                  </InfoText>
                  <DetailLabel>Wichtig: Plane mitbringen</DetailLabel>
                  <InfoText>
                    Bitte bringt eine Plastikplane mit, auf die ihr das Fahrzeug
                    abstellt. Da wir ein am Rande eines Naturschutzgebietes
                    sind, darf kein Öl in den Boden gelangen.{" "}
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Mitfahr Gelegenheiten [coming soon] </InfoLabel>
                  <InfoText>
                    Wir werden für euch von bisher vielgebuchten Städten
                    Whatsapp Gruppen anlegen, in denen ihr Mitfahrgelegenheiten
                    bilden könnt: München, Stuttgart, Ulm, Berlin, Leipzig,
                    Wien. <br /> Falls ihr weitere Vorschläge habt schreibt uns
                    gerne per Mail oder Instagram.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Naturschutzgebiet & Müll</InfoLabel>
                  <InfoText>
                    Das Gelände grenzt direkt an ein Naturschutzgebiet (Bach)
                    und wir verpflichten uns den Platz wie vorgefunden zu
                    hinterlassen. Bitte nutzt die Mülleimer, Mülltüten und
                    Taschenascher, die ihr beim Einlass bekommt. Jede
                    weggeworfene Zigarette müssen wir am Ende wieder aufsammeln.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Zelten</InfoLabel>
                  <InfoText>
                    Unter dem Gelände läuft eine Starkstromleitung in 40 cm
                    Tiefe. Normale Zeltheringe sind kein Problem, allerdings ist
                    von tieferen Bohrungen/Löchern abzusehen.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Grillen</InfoLabel>
                  <InfoText>
                    An der gemeinschaftlichen Grillstelle könnt ihr
                    Mitgebrachtes zubereiten. Eigene Grills oder offene Feuer
                    sind nicht gestattet. Campingkocher sind kein Problem.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Essen</InfoLabel>
                  <InfoText>Alles Vegetarisch/Vegan. Infos folgen.</InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Bar</InfoLabel>
                  <InfoText>
                    Faire Preise für nicht alkoholische Getränke, sowie für
                    Bier, Wein, Secco, Longdrinks & Kurze.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Klo & Duschen</InfoLabel>
                  <InfoText>
                    Auf dem Gelände gibt es feste sanitäre Anlagen (Klos,
                    Duschen & Waschbecken) mit fließend Wasser. Graffitis sind
                    hier nicht erwünscht, da wir die Reinigungkosten tragen.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Lost & Found</InfoLabel>
                  <InfoText>
                    Der Kiosk ist unsere Sammelstelle und Fundgrube. Im
                    Nachhinein könnt ihr uns unter info@kleinundhaarig.de
                    schreiben, falls euch später auffällt, dass irh etwas
                    verloren habt.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Minderjährige</InfoLabel>
                  <InfoText>
                    Minderjährige dürfen nur in Begeleitung eines
                    Erziehungsberechtigten auf Gelände. Muttizettel werden nicht
                    akzeptiert.
                  </InfoText>
                </InfoSection>
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
    margin: 60px 0px;
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

const InfoSection = styled.div`
  margin-bottom: 80px;
  @media (max-width: 800px) {
    padding: 0 20px;
  }
`

const InfoLabel = styled.h3`
  color: white;
  margin-bottom: 8px;
  display: inline-block;
  max-width: 800px;
`

const InfoText = styled(Text)`
  margin-bottom: 20px;
  opacity: 0.55;
  max-width: 800px;
`

const DetailLabel = styled(SubheaderSmall)`
  margin-top: 32px;
  margin-bottom: 6px;
  opacity: 1;
`

const DetailText = styled(Note)``

const List = styled.div`
  margin-top: 16px;
`

const ListItem = styled(Text)`
  padding: 4px 0 4px 24px;
  max-width: 800px;

  opacity: 0.55;
  border-bottom: 1px solid white;

  &:first-child {
    border-top: 1px solid white;
  }
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
  /* display: inline; */
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

const LinkInline = styled.a`
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
`

const ImageContainer = styled.div`
  margin-bottom: 40px;
`

const ShuttleGrafik = styled.img`
  width: 100%;
  height: auto;
  background-image: url(${Shuttle});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
