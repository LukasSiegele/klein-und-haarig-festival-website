import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import Footer from "../components/footer/footer"
import SideNavigation from "../components/navigation/SideNavigation"
import SideLine from "../components/navigation/SideLine"
import { Link } from "gatsby"

import { SubheaderSmall, Text } from "../components/styles/TextStyles"

import Info1 from "../../static/images/InfoBild1.jpg"
import MobileNavigation from "../components/navigation/MobileNavigation"

export default function Info() {
  return (
    <Layout>
      {/* <SEO title="Info" /> */}
      <Wrapper>
        <MobileNavigation isInfo="info" bgColor="black" />

        <SideNavigation isInfo="info" bgColor="black" />
        <Content>
          <MainGrid>
            <SideLine />
            <ContentSection>
              <ImageSectionMobile>
                <InfoBild1 />
              </ImageSectionMobile>
              <ScrollContainer>
                <TextSection>
                  <HeaderSection>
                    <InfoHeadline>
                      Wir möchten nicht zu viel verraten. Hier das Wichtigste —
                      kurz und knapp.
                    </InfoHeadline>
                  </HeaderSection>

                  <InfoSection>
                    <InfoLabel>Ablauf</InfoLabel>
                    <InfoText>
                      Das Festival findet vom 14. bis zum 17. Juli statt. Du
                      kannst am Freitag ab 12 Uhr einchecken. Für Volunteers
                      steht unser Tor natürlich schon früher offen.
                      Musikalisches Ende wird vorraussichtlich Montag 16 Uhr
                      sein. Nähere Infos folgen.
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Tickets & Ticketswap</InfoLabel>
                    <InfoText>
                      Tickets sind über unseren{" "}
                      <LinkInline
                        href="https://pretix.eu/bunteplatte/kleinundhaarig/"
                        target="_blank"
                      >
                        pretix.eu Ticketshop
                      </LinkInline>{" "}
                      oder bei unserem Partner{" "}
                      <LinkInline
                        href="https://www.ticketswap.com/listing/klein-und-haarig-festival-2023/9508967/c851a7a229"
                        target="_blank"
                      >
                        Ticketswap
                      </LinkInline>{" "}
                      erhältlich. Bei Letzterem kannst du dein Ticket
                      weiterverkaufen, falls du nicht am Festival teilnehmen
                      kannst. Weitere Stornierungsoptionen findest du in unseren{" "}
                      <LinkInline to={"/agbs"} target="_blank">
                        AGBs.
                      </LinkInline>
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Location</InfoLabel>
                    <InfoText>
                      Das Klein und Haarig findet auf dem{" "}
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
                    <InfoLabel>An- & Abreise mit dem Auto</InfoLabel>
                    <InfoText>
                      Auf dem Festivalgelände gibt es keine Parkmöglichkeiten.
                      Wie auch im letzten Jahr bringt dich ein Shuttle vom{" "}
                      <LinkInline
                        href="https://goo.gl/maps/VYxFbGm8zefcC2dG7"
                        target="_blank"
                      >
                        Parkplatz Kaltenbronn
                      </LinkInline>{" "}
                      zum Festival.
                    </InfoText>
                    <InfoText>
                      Anreise — Komme bei deiner Anreise bitte zuerst zum
                      Festivaleingang, um dort dein Gepäck und deine
                      Mitfahrenden abzuladen (max. 5 min). Fahre dann alleine
                      zum Parkplatz. Das Shuttle bringt dich von dort wieder
                      zurück zum Festival.
                    </InfoText>
                    <InfoText>
                      Abreise — Vom Festivaleingang bringt das Shuttle alle
                      Fahrer*innen zum Parkplatz. Fahre anschließend zum
                      Festival um dort zu Beladen.
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      Mitfahrgelegenheiten (Whatsapp Gruppen)
                    </InfoLabel>

                    <List>
                      <ListItem>
                        <LinkInline
                          href="https://chat.whatsapp.com/I1aMzOjdu4BL8nOP91n2za"
                          target="_blank"
                        >
                          Berlin
                        </LinkInline>{" "}
                      </ListItem>
                      <ListItem>
                        <LinkInline
                          href="https://chat.whatsapp.com/DWTTwYPmPfWGmuwOzfiIa3"
                          target="_blank"
                        >
                          Leipzig
                        </LinkInline>{" "}
                      </ListItem>
                      <ListItem>
                        {" "}
                        <LinkInline
                          href="https://chat.whatsapp.com/KqatInu5niS71TUu3JNCf5"
                          target="_blank"
                        >
                          München
                        </LinkInline>{" "}
                      </ListItem>
                      <ListItem>
                        {" "}
                        <LinkInline
                          href="https://chat.whatsapp.com/KumquIM5XBiHLzZSVP7dI0"
                          target="_blank"
                        >
                          NRW
                        </LinkInline>{" "}
                      </ListItem>
                      <ListItem>
                        {" "}
                        <LinkInline
                          href="https://chat.whatsapp.com/GUiamTvtyTUBj7yfOPAl5p"
                          target="_blank"
                        >
                          Stuttgart
                        </LinkInline>{" "}
                      </ListItem>
                      <ListItem>
                        {" "}
                        <LinkInline
                          href="https://chat.whatsapp.com/KHEAktqDyKMG1piHRqe6ZV"
                          target="_blank"
                        >
                          Ulm
                        </LinkInline>{" "}
                      </ListItem>
                      <ListItem>
                        {" "}
                        <LinkInline
                          href="https://chat.whatsapp.com/HsToHcs5D9JIDlgmtbVlyf"
                          target="_blank"
                        >
                          Wien
                        </LinkInline>{" "}
                      </ListItem>
                    </List>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>Spielregeln</InfoLabel>
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
                      kann bei Interesse angesprochen werden.
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
                    <InfoLabel>Müll und Umweltschutz</InfoLabel>
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
                      Zelten ist im Festivalticket inklusive. Du kannst dein
                      Zelt auf der ausgewiesenen Campingfläche aufstellen.
                      Achtung! Unter dem Zeltplatz verläuft eine
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
                    <InfoLabel>Getränke</InfoLabel>
                    <InfoText>
                      Faire Preise für nicht alkoholische Getränke, sowie für
                      Bier, Wein, Secco, Longdrinks & Kurze. Du kannst auch
                      eigene Getränke in normalen Mengen mit auf das
                      Festivalgelände nehmen. Bitte bedenke aber, dass wir zur
                      Erhaltung unseres Festivals auch auf die Einnahmen der
                      Bars angewiesen sind.
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
                      einrichten können sind Tiere nicht gestattet - zum Wohl
                      der Gesundheit eurer Vierbeiner.
                    </InfoText>
                  </InfoSection>
                </TextSection>
                <Footer bgColor="black " />
              </ScrollContainer>

              <ImageSectionDesktop>
                <InfoBild1 />
              </ImageSectionDesktop>
            </ContentSection>
          </MainGrid>
        </Content>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  background-color: red;
`

const Content = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: auto;
`
const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const ScrollContainer = styled.div`
  overflow-x: hidden;
  background-color: black;
  height: 100vh;
  overflow-y: hidden;
  overflow-y: scroll;
  /* :hover {
    overflow-y: scroll;
  } */
  @media (max-width: 1100px) {
    height: auto;
  }
`

const TextSection = styled.div`
  padding: 25px 10px 0 10px;

  @media (max-width: 1100px) {
    padding: 10px 10px 0 10px;
  }
`

const HeaderSection = styled.div`
  height: 85vh;
  @media (max-width: 1100px) {
    height: auto;
    margin-bottom: 200px;
  }
`

const InfoSection = styled.div`
  margin-bottom: 60px;
`

const InfoHeadline = styled.h3`
  color: white;
  display: inline-block;
  max-width: 800px;
  text-indent: 60px;
`

const InfoLabel = styled.h3`
  color: white;
  margin-bottom: 16px;
  display: inline-block;
  max-width: 800px;
`

const InfoText = styled.p`
  color: white;
  font-family: "GT-Alpina-Extended-Regular";
  margin-bottom: 20px;
  opacity: 0.75;
  max-width: 800px;
`

const DetailLabel = styled(SubheaderSmall)`
  color: white;
  font-family: "GT-Alpina-Extended-Regular";
  margin-top: 32px;
  margin-bottom: 6px;
  opacity: 0.7;
`

const LinkInline = styled.a`
  color: white;
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
`

const ImageSectionDesktop = styled.div`
  background-color: #a19089;
  height: 100vh;
  @media (max-width: 1100px) {
    display: none;
  }
`

const ImageSectionMobile = styled.div`
  background-color: #a19089;
  height: 70vh;
  @media (min-width: 1101px) {
    display: none;
  }
`

const InfoBild1 = styled.div`
  height: 100vh;
  /* width: 300px; */
  /* border: 20px solid white; */
  background-image: url(${Info1});
  background-size: cover;
  @media (max-width: 1100px) {
    max-width: 100%;
    max-height: 100%;
    height: inherit !important;
  }
  /* @media (max-width: 1300px) {
    width: 352px;
    height: 548px;
  } */
`

const List = styled.div`
  margin-top: 16px;
`

const ListItem = styled.p`
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 0 8px 16px;
  max-width: 800px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  /* display: grid;
  grid-template-columns: repeat(1, auto); */
  /* gap: 12px; */
  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`
