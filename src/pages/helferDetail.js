import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ShopTitle from "../components/shopping/ShopTitle"
import FormButton from "../components/buttons/FormButton"
import { navigate } from "gatsby"

import { Headline, SubheaderSmall, Note } from "../components/styles/TextStyles"

export default function HelferDetails({ location }) {
  const { state = {} } = location
  const {
    sumTickets,
    firstName,
    lastName,
    email,
    phone,
    street,
    houseNumber,
    postcode,
    city,
    datenspeicherung,
    vereinsbeitritt,
    newsletter,
    helferBefore,
    helferWhile,
    helferAfter,
    onlyFriends,
  } = state

  const [hSmall, setHSmall] = useState(false)
  const [hMedium, setHMedium] = useState(false)
  const [hLarge, setHLarge] = useState(false)
  const [hEssen, setHEssen] = useState(false)
  const [hBar, setHBar] = useState(false)
  const [hEinlass, setHEinlass] = useState(false)
  const [hParken, setHParken] = useState(false)
  const [hSecuri, setHSecuri] = useState(false)
  const [hSani, setHSani] = useState(false)
  const [hAware, setHAware] = useState(false)
  const [hKlo, setHKlo] = useState(false)
  const [hTech, setHTech] = useState(false)
  const [hClean, setHClean] = useState(false)
  const [hBuddy, setHBuddy] = useState("")
  const [hEhrenamtlich, setHEhrenamtlich] = useState(false)
  const [buttonLabel, setButtonLabel] = useState("Zur Zusammenfassung")

  const handleSubmit = e => {
    e.preventDefault()
    navigate("/summary", {
      state: {
        sumTickets: sumTickets,
        onlyFriends: onlyFriends,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        street: street,
        houseNumber: houseNumber,
        postcode: postcode,
        city: city,
        vereinsbeitritt: vereinsbeitritt,
        datenspeicherung: datenspeicherung,
        newsletter: newsletter,
        helferBefore: helferBefore,
        helferWhile: helferWhile,
        helferAfter: helferAfter,
        helferSmall: hSmall,
        helferMedium: hMedium,
        helferLarge: hLarge,
        helferEssen: hEssen,
        helferBar: hBar,
        helferEinlass: hEinlass,
        helferParken: hParken,
        helferSecuri: hSecuri,
        helferSani: hSani,
        helferAwareness: hAware,
        helferKlo: hKlo,
        helferTech: hTech,
        helferClean: hClean,
        helferBuddy: hBuddy,
        helferEhrenamtlich: hEhrenamtlich,
      },
    })
  }

  return (
    <Layout>
      <SEO title="Helfer" />
      <ShopTitle info="Schritt 3.5/4" title="Wir suchen Helfer!" />
      <Container>
        <Wrapper>
          <Left>
            <Header>Super, dass du uns helfen willst!</Header>
            <HelperDescription>
              <ol>
                <li>
                  Mit ein paar Präferenzen können wir dich besser einer Schicht
                  zuordnen.
                </li>
                <li>Keine Garantie, Präferenzen.</li>
                <li>
                  Wir geben unser bestes deine Präferenzen zu berücksichtigen.
                </li>
              </ol>
            </HelperDescription>
          </Left>
          <Right>
            {" "}
            <InfoLabel>Wie lange?</InfoLabel>
            <InfoText>
              Deine Arbeit wird in 6 Stunden Schichten eingeteilt. Je nach Paket
              wirst du ein, zwei oder maximal drei Schichten arbeiten.
            </InfoText>
            <form onSubmit={handleSubmit}>
              <Label htmlFor="small">S</Label>
              <CheckboxGroup>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="small"
                    checked={hSmall}
                    onChange={e => {
                      setHSmall(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <CheckboxDecription>1x 6 h</CheckboxDecription>
              </CheckboxGroup>
              <br />
              <Label htmlFor="medium">M</Label>
              <CheckboxGroup>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="medium"
                    checked={hMedium}
                    onChange={e => {
                      setHMedium(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <CheckboxDecription>2x 6 h</CheckboxDecription>
              </CheckboxGroup>
              <br />
              <Label htmlFor="large">L</Label>
              <CheckboxGroup>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="large"
                    checked={hLarge}
                    onChange={e => {
                      setHLarge(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <CheckboxDecription>3x 6 h</CheckboxDecription>
              </CheckboxGroup>
              <Seperator />
              // WO MÖCHTEST DU HELFEN?
              <InfoLabel>Wo möchtest du helfen?</InfoLabel>
              <InfoText>
                Wir geben unser bestes deine Präferenzen zu berücksichtigen,
                allerdings können wir sie dir nicht garantieren. Du wirst aber
                rechtzeitig von uns darüber benachrichtigt welchem Bereich du
                zugeteilt wurdest.
              </InfoText>
              <br />
              <CheckboxGroupKompri>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="essen"
                    checked={hEssen}
                    onChange={e => {
                      setHEssen(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <Label htmlFor="essen">Essensverkauf</Label>
              </CheckboxGroupKompri>
              <br />
              <CheckboxGroupKompri>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="bar"
                    checked={hBar}
                    onChange={e => {
                      setHBar(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <Label htmlFor="bar">Bar</Label>
              </CheckboxGroupKompri>
              <br />
              <CheckboxGroupKompri>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="einlass"
                    checked={hEinlass}
                    onChange={e => {
                      setHEinlass(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <Label htmlFor="einlass">Einlass</Label>
              </CheckboxGroupKompri>
              <br />
              <CheckboxGroupKompri>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="parken"
                    checked={hParken}
                    onChange={e => {
                      setHParken(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <Label htmlFor="parken">Parkplatzeinweisung</Label>
              </CheckboxGroupKompri>
              <br />
              <CheckboxGroupKompri>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="security"
                    checked={hSecuri}
                    onChange={e => {
                      setHSecuri(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <Label htmlFor="security">Security</Label>
              </CheckboxGroupKompri>
              <br />
              <CheckboxGroupKompri>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="sani"
                    checked={hSani}
                    onChange={e => {
                      setHSani(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <Label htmlFor="sani">Sanitäter</Label>
              </CheckboxGroupKompri>
              <br />
              <CheckboxGroupKompri>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="awareness"
                    checked={hAware}
                    onChange={e => {
                      setHAware(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <Label htmlFor="awareness">Awareness</Label>
              </CheckboxGroupKompri>
              <br />
              <CheckboxGroupKompri>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="klo"
                    checked={hKlo}
                    onChange={e => {
                      setHKlo(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <Label htmlFor="klo">Sanitäre Anlagen</Label>
              </CheckboxGroupKompri>
              <br />
              <CheckboxGroupKompri>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="technik"
                    checked={hTech}
                    onChange={e => {
                      setHTech(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <Label htmlFor="technik">Technik</Label>
              </CheckboxGroupKompri>
              <br />
              <CheckboxGroupKompri>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="clean"
                    checked={hClean}
                    onChange={e => {
                      setHClean(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>
                <Label htmlFor="clean">Aufräumdienst</Label>
              </CheckboxGroupKompri>
              <Seperator />
              <InfoLabel>Mit wem?</InfoLabel>
              <InfoText>
                Hast du einen Buddy mit dem du zusammen helfen möchtest? Falls
                Ja, sag uns Vor und Nachnamen.
              </InfoText>
              <input
                type="buddy"
                name="buddy"
                value={hBuddy}
                required
                onChange={e => setHBuddy(e.target.value)}
              />{" "}
              <Seperator />
              <Label htmlFor="ehrenamtlich">Ehrenamtlich helfen?</Label>
              <CheckboxGroup>
                <label class="b-contain">
                  <input
                    className="checkBox"
                    type="checkbox"
                    name="ehrenamtlich"
                    checked={hEhrenamtlich}
                    onChange={e => {
                      setHEhrenamtlich(e.target.checked)
                    }}
                  />
                  <div className="b-input"></div>
                </label>

                <CheckboxDecription>
                  Auf Vergütung verzichten kommt dem Festival zugute :)
                </CheckboxDecription>
              </CheckboxGroup>
              <WeiterWrapper>
                <FormButton typ="submit" label={buttonLabel} />
              </WeiterWrapper>
            </form>
          </Right>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`

const Wrapper = styled.div`
  padding: 120px 40px;
  display: grid;
  grid-template-columns: 1.333fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const Left = styled.div`
  max-width: 500px;
`
const Right = styled.div`
  max-width: 500px;
`

const Header = styled(Headline)``

const HelperDescription = styled.h5`
  color: white;
  margin-top: 40px;
`

const InfoLabel = styled(SubheaderSmall)`
  color: white;
  margin-top: 20px;
  display: inline-block;
`

const InfoText = styled(Note)`
  margin-top: 8px;
  margin-bottom: 20px;
`

const Label = styled(SubheaderSmall)`
  /* color: white; */
  /* margin-top: 20px; */
  /* display: inline-block; */
`

const Seperator = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.15);
  margin: 40px 0 20px 0;
  width: 100%;
`

const WeiterWrapper = styled.div`
  margin-top: 80px;
`

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: 42px auto;
  gap: 20px;
  padding-top: 15px;
  align-items: center;
`

const CheckboxGroupKompri = styled.div`
  display: grid;
  grid-template-columns: 42px auto;
  gap: 20px;
  padding-top: 15px;
  align-items: center;
`

const CheckboxDecription = styled(Note)``
