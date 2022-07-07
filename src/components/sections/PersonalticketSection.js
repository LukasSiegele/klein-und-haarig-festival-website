import { Link } from "gatsby"
import { navigate } from "gatsby"
import React, { useEffect, useState, useCallback } from "react"
import styled from "styled-components"
import FormButton from "../buttons/FormButton"
import Layout from "../layout/layout"
import SEO from "../layout/seo"
import HelperSection from "./vip/HelperSection"
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

// The rest of the code
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

  // Image Viewer

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
                <SmallLabel>Was brauche ich für den Einlass?</SmallLabel>
                <SmallText>
                  Halte am Eingang deinen Ausweis und entweder diesen QR Code
                  oder den auf deinem Hardticket bereit.
                </SmallText>
                <Seperator />
              </DescriptionGridContent>
              <DescriptionGridContent>
                <SmallLabel>Tipp</SmallLabel>
                <SmallText>
                  Wenn du kein Hardticket mitbringst, empfehlen wir dir einen
                  Screenshot von dem QR Code auf deinem Smartphone zu sichern.
                  Der Einlass ist auch damit möglich.
                </SmallText>
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
                        <SmallLabel>
                          Was brauche ich für den Einlass?
                        </SmallLabel>
                        <SmallText>
                          Halte am Eingang deinen Ausweis und entweder diesen QR
                          Code oder den auf deinem Hardticket bereit.
                        </SmallText>
                      </DescriptionGridContent>
                      <DescriptionGridContent>
                        <SmallLabel>Tipp</SmallLabel>
                        <SmallText>
                          Wenn du kein Hardticket mitbringst, empfehlen wir dir
                          einen Screenshot von dem QR Code auf deinem Smartphone
                          zu sichern. Der Einlass ist auch damit möglich.
                        </SmallText>
                      </DescriptionGridContent>
                    </DescriptionGrid>
                  </AccContent>
                </AccordionSection>
              </DesktopDigitalesTicket>
              <AccordionSection>
                <AccHeader>
                  <SectionTitle>02 — Dein Helfer:innen Status</SectionTitle>
                </AccHeader>
                <HelperSection userData={userInfo} />
              </AccordionSection>
              <AccordionSection>
                <AccHeader>
                  <SectionTitle>03 — Infos</SectionTitle>
                  {/* <ComingSoon>coming soon</ComingSoon> */}
                </AccHeader>

                <InfoContainer>
                  <InfoSection>
                    <InfoLabel>Location</InfoLabel>
                    <InfoText>
                      Das KLEIN UND HAARIG Festival findet auf dem{" "}
                      <LinkInline
                        href="https://goo.gl/maps/muaWAGwPx7nebDjJ9"
                        target="_blank"
                      >
                        Zeltplatz Christophshof, 75323 Bad Wildbad statt.
                      </LinkInline>
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Anreise mit Öffis</InfoLabel>
                    <InfoText>
                      Die nächstgelegene Bahnstation ist "Bad Wildbad Bahnhof".
                      Von dort bringt dich die{" "}
                      <LinkInline
                        href="https://www.fahrplan.guru/reise/a?date=15.07.2022&destination_country=Deutschland&destination_state=Baden-W%C3%BCrttemberg&destination_type=stop&destinname=Zeltplatz%2C%20Bad%20Wildbad&direction=dep&origin_country=Deutschland&origin_state=Baden-W%C3%BCrttemberg&origin_type=stop&originname=Bad%20Wildbad%20Bahnhof&passengers_train_card=&person=1&time=11%3A30&transport_type="
                        target="_blank"
                      >
                        Buslinie 7780
                      </LinkInline>{" "}
                      ca. alle 30 min{" "}
                      {/* <LinkInline
                        href="https://www.fahrplan.guru/reise/a?date=15.07.2022&destination_country=Deutschland&destination_state=Baden-Württemberg&destination_type=stop&destinname=Zeltplatz%2C%20Bad%20Wildbad&direction=dep&origin_country=Deutschland&origin_state=Baden-Württemberg&origin_type=stop&originname=%20Stadtbahnhof%20%2F%20ZOB%2C%20Freudenstadt&passengers_train_card=&person=1&time=11%3A30&transport_type="
                        target="_blank"
                      >
                        ZOB Freudenstadt
                      </LinkInline>{" "} */}
                      direkt vor das Gelände — Haltestelle "Bad Wildbad,
                      Zeltplatz".
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>An- / Abreise mit dem Auto</InfoLabel>
                    <InfoText>
                      Auf dem Festivalgelände wird es in diesem Jahr keine
                      Parkmöglichkeiten für Autos geben. Wir werden aber eine
                      Ladezone einrichten, in die du zum Be- und Entladen (max.
                      5 min) vorfahren kannst.
                      <br />
                      Unser Parkplatz befindet sich hier:{" "}
                      <LinkInline
                        href="https://goo.gl/maps/VYxFbGm8zefcC2dG7"
                        target="_blank"
                      >
                        Parkplatz Kaltenbronn
                      </LinkInline>
                      . Ein Shuttle bringt dich bei deiner Anreise von dort zum
                      Festival bzw. bei deiner Abreise dorthin zurück.
                    </InfoText>
                    <ImageContainer>
                      <ShuttleGrafik
                        src={require("../../../static/images/Shuttle.jpg")}
                      />

                      {/* <img
                        src={require("../../../static/images/Shuttle.jpg")}
                        width="100%"
                        height="auto"
                      /> */}
                    </ImageContainer>
                    <DetailLabel>— Anreise</DetailLabel>
                    <InfoText>
                      Komme bei deiner Anreise bitte zuerst zum Festivaleingang,
                      um dort dein Gepäck und deine Mitfahrenden abzuladen (max.
                      5 min). Fahre dann alleine zum Parkplatz. Der Shuttle
                      bringt dich von dort wieder zurück zum Festival.
                    </InfoText>
                    <DetailLabel>— Abreise</DetailLabel>
                    <InfoText>
                      Vom Festivaleingang bringt der Shuttle alle Fahrer*innen
                      zum Parkplatz. Fahre anschließend zum Festival um dort zu
                      Beladen.
                    </InfoText>
                    <DetailLabel>— Hinweis</DetailLabel>
                    <InfoText>
                      Der Shuttle kann ausschließlich zur An- und Abreise
                      genutzt werden. Vergewissere dich daher, dein gesamtes
                      Gepäck, insbesondere alle Wertgegenstände, aus dem Auto zu
                      laden. Der Parkplatz ist öffentlich und wird nicht
                      überwacht. Wir übernehmen keine Haftung. Zu Stoßzeiten
                      solltest du Wartezeiten einplanen. Wir bitten um dein
                      Verständnis und deine Geduld.
                    </InfoText>
                    <DetailLabel>— Shuttle Zeiten</DetailLabel>
                    <List>
                      <ListItem>Fr: 12-22 Uhr</ListItem>
                      <ListItem>Sa: 12-15 Uhr </ListItem>
                      <ListItem>So: 11-16 Uhr </ListItem>
                      <ListItem>Mo: 11-18 Uhr</ListItem>
                    </List>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Anreise mit dem Camper </InfoLabel>
                    <InfoText>
                      Mit einem Camperticket kannst du auf das Gelände fahren
                      und dort für die Dauer des Festivals stehen bleiben. Melde
                      dich dazu mit deinem Ticket am Einlass und wir zeigen dir
                      deinen Parkplatz.
                    </InfoText>

                    <DetailLabel>— Wichtig: Plane mitbringen</DetailLabel>
                    <InfoText>
                      Das Gelände befindet sich in einem Wasserschutzgebiet.
                      Bringe deshalb bitte eine undurchlässiche Plane mit, auf
                      die du deinen Camper stellen kannst. Es darf kein Öl oder
                      Treibstoff in den Boden gelangen.
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Mitfahr Gelegenheiten</InfoLabel>
                    <InfoText>
                      Wir haben aus Städten mit vielen Ticketkäufen
                      Whatsapp-Gruppen eingerichtet. So kannst du mit anderen
                      Gästen in Kontakt treten und Fahrgemeinschaften bilden.
                      Wenn du eine weitere Stadt vorschlagen möchtest, schreibe
                      uns einfach auf Instagram oder per Mail.
                    </InfoText>

                    <DetailLabel>Whatsapp Gruppen</DetailLabel>
                    <List>
                      <ListItem>
                        <LinkInline2
                          href="https://chat.whatsapp.com/I1aMzOjdu4BL8nOP91n2za"
                          target="_blank"
                        >
                          Berlin {"<>"} KuH beitreten ➞
                        </LinkInline2>
                      </ListItem>
                      <ListItem>
                        <LinkInline2
                          href="https://chat.whatsapp.com/DWTTwYPmPfWGmuwOzfiIa3"
                          target="_blank"
                        >
                          Leipzig {"<>"} KuH beitreten ➞
                        </LinkInline2>
                      </ListItem>
                      <ListItem>
                        <LinkInline2
                          href="https://chat.whatsapp.com/KqatInu5niS71TUu3JNCf5"
                          target="_blank"
                        >
                          München {"<>"} KuH beitreten ➞
                        </LinkInline2>
                      </ListItem>
                      <ListItem>
                        <LinkInline2
                          href="https://chat.whatsapp.com/GUiamTvtyTUBj7yfOPAl5p"
                          target="_blank"
                        >
                          Stuttgart {"<>"} KuH beitreten ➞
                        </LinkInline2>
                      </ListItem>
                      <ListItem>
                        <LinkInline2
                          href="https://chat.whatsapp.com/KHEAktqDyKMG1piHRqe6ZV"
                          target="_blank"
                        >
                          Ulm {"<>"} KuH beitreten ➞
                        </LinkInline2>
                      </ListItem>
                      <ListItem>
                        <LinkInline2
                          href="https://chat.whatsapp.com/HsToHcs5D9JIDlgmtbVlyf"
                          target="_blank"
                        >
                          Wien {"<>"} KuH beitreten ➞
                        </LinkInline2>
                      </ListItem>
                    </List>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Awareness</InfoLabel>
                    <InfoText>
                      Wir möchten gemeinsam mit dir einen Raum schaffen, in dem
                      sich alle Personen sicher fühlen und ausleben können.
                      Dafür braucht es von allen Aufmerksamkeit. <br />
                      Bitte achte auf andere! Wenn du merkst dass es jemandem
                      schlecht geht, deine oder andere Grenzen missachtet
                      werden, zögere nicht zu handeln! Wenn du dich einer
                      Situation nicht gewachsen fühlst oder Unterstützung
                      benötigst, wende dich an das Awareness Team oder einen
                      Menschen mit Funkgerät. Du musst niemandem direkt
                      erzählen, was vorgefallen ist. Sage nur, dass du in
                      Kontakt mit dem Awareness Team treten möchtest. Es gibt
                      auf dem Gelände einen Safe-Space, wo du aufgefangen werden
                      kannst. Psychische wie physische Gewalt in Form von
                      rassistischem, sexistischem, homophoben und
                      menschenverachtenden Verhalten jeglicher Art wird von uns
                      nicht toleriert und führt zum Ausschluss der
                      Veranstaltung.
                      <br /> Wenn diese Art von Aufmerksamkeit für dich neu ist,
                      informiere dich vor dem Festival eigenständig oder beim
                      Awareness Team vor Ort. Das Team steht außerdem für Fragen
                      und Informationen rund um das Thema Safer Use bereit und
                      kann bei Interesse angesprochen werden. Auch am Infostand
                      findest du Infomaterial.
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Einlass </InfoLabel>
                    <InfoText>
                      Halte am Einlass bitte deinen Ausweis und dein Ticket
                      (QR-Code) bereit. Kein Einlass ohne Ticket!
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Bezahlen </InfoLabel>
                    <InfoText>
                      Auf dem Festival kannst du nur mit Bargeld bezahlen. Es
                      gibt keine Möglichkeit Geld abzuheben.
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Müll</InfoLabel>
                    <InfoText>
                      Das gesamte Festivalgelände befindet sich in einem
                      Wasserschutzgebiet. Wir haben uns verpflichtet den
                      Zeltplatz so zu verlassen, wie wir ihn vorgefunden haben.
                      Bitte hilf uns dabei - nutze die von uns bereitgestellten
                      Mülleimer, Mülltüten und Taschenascher und lasse weder
                      defekte noch intakte Zelte, Pavillons oder Campingstühle
                      auf dem Gelände stehen.
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Zelten</InfoLabel>
                    <InfoText>
                      Du kannst dein Zelt auf der ausgewiesenen Campingfläche
                      aufstellen. Achtung! Unter dem Zeltplatz verläuft eine
                      Starkstromleitung. Heringe und Zeltanker über 30 cm Länge
                      sind deshalb nicht zulässig.
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Grillen & Feuer</InfoLabel>
                    <InfoText>
                      An unserer Grillstelle kannst du Mitgebrachtes zubereiten.
                      Private Grills sind auf dem Gelände nicht gestattet.
                      Offenes Feuer ist außer in der zentralen Feuerstelle
                      strengstens verboten. Campingkocher sind kein Problem.
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
                    <InfoLabel>WCs & Duschen</InfoLabel>
                    <InfoText>
                      Auf dem Festival gibt es feste sanitäre Anlagen. Tags und
                      Graffitis sind hier nicht erwünscht. Wir müssen sie sonst
                      aufwändig und teuer entfernen lassen.
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Sicherheit</InfoLabel>
                    <InfoText>
                      Die folgenden Gegenstände sind auf dem Festival
                      strengstens untersagt: sämtliche Pyrotechnik, Drogen,
                      Drohnen, Waffen aller Art und andere gefährliche
                      Gegenstände.
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Lost & Found</InfoLabel>
                    <InfoText>
                      Bitte sei ehrlich und bringe Gefundenes an eine unserer
                      offenen Bars. Diese sollten auch immer die erste
                      Anlaufstelle sein, wenn du etwas verloren hast. Wenn dort
                      nichts abgegeben wurde oder du deinen Verlust erst Zuhause
                      bemerkst, schreib uns eine Mail und wir werden sehen was
                      wir tun können.
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Kinder & Minderjährige</InfoLabel>
                    <InfoText>
                      Kinder und Minderjährige haber nur in Begleitung einer
                      oder eines Erziehungsberechtigten Zutritt zum Festival.
                      Wir raten ausdrücklich davon ab in Begleitung von Kindern
                      oder Jugendlichen anzureisen, da wir keine Ruhezonen zur
                      Verfügung stellen können. Solltest du dich dennoch dazu
                      entscheiden, erwarten wir von dir, dich deiner
                      Verantwortung bewusst zu sein und für die Betreuung deiner
                      Kinder selbst zu sorgen. Kinder unter 14 Jahren benötigen
                      kein Ticket. Für Kinder unter 10 Jahren besteht
                      Gehörschutzpflicht. Muttizettel werden nicht akzeptiert.
                      Eltern haften für ihre Kinder.
                    </InfoText>
                  </InfoSection>
                  <InfoSection>
                    <InfoLabel>Hunde & andere Tiere</InfoLabel>
                    <InfoText>
                      Da wir aufgrund der Geländegröße keine Ruhezonen
                      einrichten können sind diese nicht gestattet - zum Wohl
                      der Gesundheit euerer Vierbeiner,.
                    </InfoText>
                  </InfoSection>
                </InfoContainer>
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

const InfoContainer = styled.div`
  /* display: none; */
`

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
const SmallLabel = styled(SubheaderSmall)`
  color: white;
  margin-bottom: 8px;
  display: inline-block;
  max-width: 800px;
`

const SmallText = styled(Note)`
  margin-bottom: 20px;
  opacity: 0.55;
  max-width: 800px;
`

const DetailLabel = styled(SubheaderSmall)`
  font-family: "GT-Alpina-Extended-Regular";
  margin-top: 32px;
  margin-bottom: 6px;
  opacity: 0.7;
`

const DetailText = styled(Note)``

const List = styled.div`
  margin-top: 16px;
`

const ListItem = styled(Text)`
  padding: 8px 0 8px 24px;
  max-width: 800px;

  opacity: 0.55;
  border-bottom: 1px solid rgba(255, 255, 255, 0.55);

  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.55);
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
`
const LinkInline2 = styled.a``

const ImageContainer = styled.div`
  margin-bottom: 40px;

  /* & > :hover {
    cursor: pointer;
  } */
`

const ShuttleGrafik = styled.img`
  width: 100%;
  height: auto;
`
