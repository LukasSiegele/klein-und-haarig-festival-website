import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Footer from "../components/footer/footer"
import SideNavigation from "../components/navigation/SideNavigation"
import SideLine from "../components/navigation/SideLine"
import { Link } from "gatsby"

import { SubheaderSmall, Text } from "../components/styles/TextStyles"

export default function Info() {
  return (
    <Layout>
      <SEO title="Info" />
      <Wrapper>
        <SideNavigation />

        <Content>
          <MainGrid>
            <SideLine />
            <ContentSection>
              <InfoSection>
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
                    Ladezone einrichten, in die du zum Be- und Entladen (max. 5
                    min) vorfahren kannst.
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

                  {/* <img
                        src={require("../../../static/images/Shuttle.jpg")}
                        width="100%"
                        height="auto"
                      /> */}

                  <DetailLabel>— Anreise</DetailLabel>
                  <InfoText>
                    Komme bei deiner Anreise bitte zuerst zum Festivaleingang,
                    um dort dein Gepäck und deine Mitfahrenden abzuladen (max. 5
                    min). Fahre dann alleine zum Parkplatz. Der Shuttle bringt
                    dich von dort wieder zurück zum Festival.
                  </InfoText>
                  <DetailLabel>— Abreise</DetailLabel>
                  <InfoText>
                    Vom Festivaleingang bringt der Shuttle alle Fahrer*innen zum
                    Parkplatz. Fahre anschließend zum Festival um dort zu
                    Beladen.
                  </InfoText>
                  <DetailLabel>— Hinweis</DetailLabel>
                  <InfoText>
                    Der Shuttle kann ausschließlich zur An- und Abreise genutzt
                    werden. Vergewissere dich daher, dein gesamtes Gepäck,
                    insbesondere alle Wertgegenstände, aus dem Auto zu laden.
                    Der Parkplatz ist öffentlich und wird nicht überwacht. Wir
                    übernehmen keine Haftung. Zu Stoßzeiten solltest du
                    Wartezeiten einplanen. Wir bitten um dein Verständnis und
                    deine Geduld.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Anreise mit dem Camper </InfoLabel>
                  <InfoText>
                    Mit einem Camperticket kannst du auf das Gelände fahren und
                    dort für die Dauer des Festivals stehen bleiben. Melde dich
                    dazu mit deinem Ticket am Einlass und wir zeigen dir deinen
                    Parkplatz.
                  </InfoText>

                  <DetailLabel>— Wichtig: Plane mitbringen</DetailLabel>
                  <InfoText>
                    Das Gelände befindet sich in einem Wasserschutzgebiet.
                    Bringe deshalb bitte eine undurchlässiche Plane mit, auf die
                    du deinen Camper stellen kannst. Es darf kein Öl oder
                    Treibstoff in den Boden gelangen.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Corona</InfoLabel>
                  <InfoText>
                    Bitte teste dich vor der Anreise zum Schutz aller Anderen.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Awareness</InfoLabel>
                  <InfoText>
                    Wir möchten gemeinsam mit dir einen Raum schaffen, in dem
                    sich alle Personen sicher fühlen und ausleben können. Dafür
                    braucht es von allen Aufmerksamkeit. <br />
                    Bitte achte auf andere! Wenn du merkst dass es jemandem
                    schlecht geht, deine oder andere Grenzen missachtet werden,
                    zögere nicht zu handeln! Wenn du dich einer Situation nicht
                    gewachsen fühlst oder Unterstützung benötigst, wende dich an
                    das Awareness Team oder einen Menschen mit Funkgerät. Du
                    musst niemandem direkt erzählen, was vorgefallen ist. Sage
                    nur, dass du in Kontakt mit dem Awareness Team treten
                    möchtest. Es gibt auf dem Gelände einen Safe-Space, wo du
                    aufgefangen werden kannst. Psychische wie physische Gewalt
                    in Form von rassistischem, sexistischem, homophoben und
                    menschenverachtenden Verhalten jeglicher Art wird von uns
                    nicht toleriert und führt zum Ausschluss der Veranstaltung.
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
                    Auf dem Festival kannst du nur mit Bargeld bezahlen. Es gibt
                    keine Möglichkeit Geld abzuheben.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Müll</InfoLabel>
                  <InfoText>
                    Das gesamte Festivalgelände befindet sich in einem
                    Wasserschutzgebiet. Wir haben uns verpflichtet den Zeltplatz
                    so zu verlassen, wie wir ihn vorgefunden haben. Bitte hilf
                    uns dabei - nutze die von uns bereitgestellten Mülleimer,
                    Mülltüten und Taschenascher und lasse weder defekte noch
                    intakte Zelte, Pavillons oder Campingstühle auf dem Gelände
                    stehen.
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
                    Private Grills sind auf dem Gelände nicht gestattet. Offenes
                    Feuer ist außer in der zentralen Feuerstelle strengstens
                    verboten. Campingkocher sind kein Problem.
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
                    Die folgenden Gegenstände sind auf dem Festival strengstens
                    untersagt: sämtliche Pyrotechnik, Drogen, Drohnen, Waffen
                    aller Art und andere gefährliche Gegenstände.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Lost & Found</InfoLabel>
                  <InfoText>
                    Bitte sei ehrlich und bringe Gefundenes an eine unserer
                    offenen Bars. Diese sollten auch immer die erste
                    Anlaufstelle sein, wenn du etwas verloren hast. Wenn dort
                    nichts abgegeben wurde oder du deinen Verlust erst Zuhause
                    bemerkst, schreib uns eine Mail und wir werden sehen was wir
                    tun können.
                  </InfoText>
                </InfoSection>

                <InfoSection>
                  <InfoLabel>Kinder & Minderjährige</InfoLabel>
                  <InfoText>
                    Kinder und Minderjährige haber nur in Begleitung einer oder
                    eines Erziehungsberechtigten Zutritt zum Festival. Wir raten
                    ausdrücklich davon ab in Begleitung von Kindern oder
                    Jugendlichen anzureisen, da wir keine Ruhezonen zur
                    Verfügung stellen können. Solltest du dich dennoch dazu
                    entscheiden, erwarten wir von dir, dich deiner Verantwortung
                    bewusst zu sein und für die Betreuung deiner Kinder selbst
                    zu sorgen. Kinder unter 14 Jahren benötigen kein Ticket. Für
                    Kinder unter 10 Jahren besteht Gehörschutzpflicht.
                    Muttizettel werden nicht akzeptiert. Eltern haften für ihre
                    Kinder.
                  </InfoText>
                </InfoSection>
                <InfoSection>
                  <InfoLabel>Hunde & andere Tiere</InfoLabel>
                  <InfoText>
                    Da wir aufgrund der Geländegröße keine Ruhezonen einrichten
                    können sind Tiere nicht gestattet - zum Wohl der Gesundheit
                    eurer Vierbeiner.
                  </InfoText>
                </InfoSection>
              </InfoSection>
              <ImageSection></ImageSection>
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
  overflow-x: hidden;
  background-color: blue;
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
  background-color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const InfoSection = styled.div`
  background-color: yellow;
  height: 100vh;
`

const ImageSection = styled.div`
  background-color: green;
  height: 100vh;
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
  font-family: "GT-Alpina-Extended-Regular";
  margin-top: 32px;
  margin-bottom: 6px;
  opacity: 0.7;
`

const LinkInline = styled.a`
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
`
