import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

export default function Imprint() {
  return (
    <Layout>
      <SEO title="Impressum" />
      <Wrapper>
        <Content>
          <Section>
            <SectionHeader>Impressum</SectionHeader>
            <Header>Kontakt</Header>
            <p>
              Bunte Platte e.V.
              <br />
              T&uuml;rkenstra&szlig;e 21
              <br />
              80799 M&uuml;nchen
            </p>
            <p>
              <strong>Vertreten durch:</strong> Luca Prohl und Mareike
              Klau&szlig; (Vorstand)
            </p>
            <br />
            <p>
              E-Mail:{" "}
              <a href="mailto:info@kleinundhaarig.de">info@bunte-platte.de</a>
            </p>
          </Section>
          <Section></Section>
          <Section>
            <Header>Eingetragener Verein</Header>
            <p>Vereinsregisternummer: VR 208738</p>
            <p>Registergericht: Amtsgericht München</p>
            <p>
              Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
              Umsatzsteuergesetz: [UMSATZSTEUER-ID]
            </p>
          </Section>
          <Section>
            <Header>EU-Streitschlichtung</Header>
            <p>
              Die Europ&auml;ische Kommission stellt eine Plattform zur
              Online-Streitbeilegung bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </Section>
          <Section>
            <Header>Verbraucherstreitbeilegung</Header>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </Section>
          <Section>
            <Header>Haftung f&uuml;r Inhalte</Header>{" "}
            <p>
              Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
              f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
              Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte
              oder gespeicherte fremde Informationen zu &uuml;berwachen oder
              nach Umst&auml;nden zu forschen, die auf eine rechtswidrige
              T&auml;tigkeit hinweisen.
            </p>{" "}
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst
              ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
              m&ouml;glich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>{" "}
          </Section>
          <Section>
            <Header>Haftung f&uuml;r Links</Header>{" "}
            <p>
              Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
              f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
              &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
              stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
              &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>{" "}
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>{" "}
          </Section>
          <Section>
            <Header>Urheberrecht</Header>{" "}
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
              bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
              bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
              f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>{" "}
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
              werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>
          </Section>
        </Content>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  padding: 120px 40px;
  color: white;
  display: grid;
  /* grid-template-columns: 1fr; */
  justify-content: center;
`

const Content = styled.div`
  max-width: 900px;
`

const Section = styled.div`
  margin-bottom: 80px;
`

const SectionHeader = styled.h2`
  margin-bottom: 60px;
`

const Header = styled.h2`
  font-size: 1.7em;
  margin-bottom: 15px;
`
