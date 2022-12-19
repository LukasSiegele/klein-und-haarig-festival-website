// import React, { useState, useEffect } from "react"
// import styled from "styled-components"
// import Layout from "../components/layout/layout"
// // import SEO from "../components/layout/seo"
// import ShopTitle from "../components/shopping/ShopTitle"
// import FormButton from "../components/buttons/FormButton"
// import { navigate } from "gatsby"

// import { Headline, SubheaderSmall, Note } from "../components/styles/TextStyles"

// export default function HelferDetails({ location }) {
//   const { state = {} } = location
//   const {
//     sumTickets,
//     firstName,
//     lastName,
//     email,
//     phone,
//     street,
//     houseNumber,
//     postcode,
//     city,
//     datenspeicherung,
//     vereinsbeitritt,
//     newsletter,
//     helferBefore,
//     helferWhile,
//     helferAfter,
//     onlyFriends,
//   } = state

//   const [hSmall, setHSmall] = useState(false)
//   const [hMedium, setHMedium] = useState(false)
//   const [hLarge, setHLarge] = useState(false)
//   const [hEssen, setHEssen] = useState(false)
//   const [hBar, setHBar] = useState(false)
//   const [hEinlass, setHEinlass] = useState(false)

//   const [hSecuri, setHSecuri] = useState(false)

//   const [hAware, setHAware] = useState(false)
//   const [hKlo, setHKlo] = useState(false)
//   const [hTech, setHTech] = useState(false)
//   const [hClean, setHClean] = useState(false)
//   const [hSani, setHSani] = useState(false)
//   const [hBuddy, setHBuddy] = useState("")
//   const [hEhrenamtlich, setHEhrenamtlich] = useState(false)
//   const [buttonLabel, setButtonLabel] = useState("Zur Zusammenfassung ➞")
//   const [isWhile, setIsWhile] = useState(false)

//   const handleSubmit = e => {
//     e.preventDefault()
//     navigate("/summary", {
//       state: {
//         sumTickets: sumTickets,
//         onlyFriends: onlyFriends,
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         phone: phone,
//         street: street,
//         houseNumber: houseNumber,
//         postcode: postcode,
//         city: city,
//         vereinsbeitritt: vereinsbeitritt,
//         datenspeicherung: datenspeicherung,
//         newsletter: newsletter,
//         helferBefore: helferBefore,
//         helferWhile: helferWhile,
//         helferAfter: helferAfter,
//         helferSmall: hSmall,
//         helferMedium: hMedium,
//         helferLarge: hLarge,
//         helferEssen: hEssen,
//         helferBar: hBar,
//         helferEinlass: hEinlass,
//         helferSecuri: hSecuri,
//         helferAwareness: hAware,
//         helferKlo: hKlo,
//         helferTech: hTech,
//         helferClean: hClean,
//         helferSani: hSani,
//         helferBuddy: hBuddy,
//         helferEhrenamtlich: hEhrenamtlich,
//       },
//     })
//   }

//   console.log("Helfer Währrend?:", helferWhile)

//   return (
//     <Layout>
//       {/* <SEO title="Helfer" /> */}
//       <ShopTitle info="Schritt 3.5/4" title="Helfer:innnen Details" />
//       <Container>
//         <Wrapper>
//           <Left>
//             <Header>Super, dass du uns helfen möchtest!</Header>
//             <HelperDescription>
//               Hast du schon genaue Vorstellungen? <br />
//               Dann gib uns Details und wir können dich besser einer Schicht
//               zuordnen. Wir geben unser Bestes deine Präferenzen zu
//               berücksichtigen.
//             </HelperDescription>
//           </Left>
//           <Right>
//             {" "}
//             <InfoLabel>Wie lange?</InfoLabel>
//             <InfoText>
//               Wir planen mit Schichten von ca. 6 Stunden. Du kannst wählen, ob
//               du ein, zwei oder maximal drei Schichten arbeiten möchtest. Pro
//               Schicht bekommst du nach getaner Arbeit ein Drittel des bezahlten
//               Ticketpreises erstattet.
//             </InfoText>
//             <form onSubmit={handleSubmit}>
//               <Label htmlFor="small">S</Label>
//               <CheckboxGroup>
//                 <label class="b-contain">
//                   <input
//                     className="checkBox"
//                     type="checkbox"
//                     name="small"
//                     checked={hSmall}
//                     onChange={e => {
//                       setHSmall(e.target.checked)
//                     }}
//                   />
//                   <div className="b-input"></div>
//                 </label>
//                 <CheckboxDecription>1x 6 h</CheckboxDecription>
//               </CheckboxGroup>
//               <br />
//               <Label htmlFor="medium">M</Label>
//               <CheckboxGroup>
//                 <label class="b-contain">
//                   <input
//                     className="checkBox"
//                     type="checkbox"
//                     name="medium"
//                     checked={hMedium}
//                     onChange={e => {
//                       setHMedium(e.target.checked)
//                     }}
//                   />
//                   <div className="b-input"></div>
//                 </label>
//                 <CheckboxDecription>2x 6 h</CheckboxDecription>
//               </CheckboxGroup>
//               <br />
//               <Label htmlFor="large">L</Label>
//               <CheckboxGroup>
//                 <label class="b-contain">
//                   <input
//                     className="checkBox"
//                     type="checkbox"
//                     name="large"
//                     checked={hLarge}
//                     onChange={e => {
//                       setHLarge(e.target.checked)
//                     }}
//                   />
//                   <div className="b-input"></div>
//                 </label>
//                 <CheckboxDecription>3x 6 h</CheckboxDecription>
//               </CheckboxGroup>
//               <Seperator />
//               <Wo isWhile={helferWhile}>
//                 <InfoLabel>Wo möchtest du helfen?</InfoLabel>
//                 <InfoText>
//                   Wir geben unser Bestes deine Präferenzen zu berücksichtigen,
//                   allerdings können wir sie dir nicht garantieren. Du wirst
//                   rechtzeitig von uns über deine Zuteilung benachrichtigt.
//                 </InfoText>
//                 <br />
//                 <CheckboxGroup>
//                   <label class="b-contain">
//                     <input
//                       className="checkBox"
//                       type="checkbox"
//                       name="essen"
//                       checked={hEssen}
//                       onChange={e => {
//                         setHEssen(e.target.checked)
//                       }}
//                     />
//                     <div className="b-input"></div>
//                   </label>
//                   <Label htmlFor="essen">Foodcourt</Label>
//                 </CheckboxGroup>
//                 <br />
//                 <CheckboxGroup>
//                   <label class="b-contain">
//                     <input
//                       className="checkBox"
//                       type="checkbox"
//                       name="bar"
//                       checked={hBar}
//                       onChange={e => {
//                         setHBar(e.target.checked)
//                       }}
//                     />
//                     <div className="b-input"></div>
//                   </label>
//                   <Label htmlFor="bar">Bar</Label>
//                 </CheckboxGroup>
//                 <br />
//                 <CheckboxGroup>
//                   <label class="b-contain">
//                     <input
//                       className="checkBox"
//                       type="checkbox"
//                       name="einlass"
//                       checked={hEinlass}
//                       onChange={e => {
//                         setHEinlass(e.target.checked)
//                       }}
//                     />
//                     <div className="b-input"></div>
//                   </label>
//                   <Label htmlFor="einlass">Einlass</Label>
//                 </CheckboxGroup>

//                 <br />
//                 <CheckboxGroup>
//                   <label class="b-contain">
//                     <input
//                       className="checkBox"
//                       type="checkbox"
//                       name="security"
//                       checked={hSecuri}
//                       onChange={e => {
//                         setHSecuri(e.target.checked)
//                       }}
//                     />
//                     <div className="b-input"></div>
//                   </label>
//                   <Label htmlFor="security">Security</Label>
//                 </CheckboxGroup>

//                 <br />
//                 <CheckboxGroup>
//                   <label class="b-contain">
//                     <input
//                       className="checkBox"
//                       type="checkbox"
//                       name="awareness"
//                       checked={hAware}
//                       onChange={e => {
//                         setHAware(e.target.checked)
//                       }}
//                     />
//                     <div className="b-input"></div>
//                   </label>
//                   <Label htmlFor="awareness">Awareness</Label>
//                 </CheckboxGroup>
//                 <br />
//                 <CheckboxGroup>
//                   <label class="b-contain">
//                     <input
//                       className="checkBox"
//                       type="checkbox"
//                       name="klo"
//                       checked={hKlo}
//                       onChange={e => {
//                         setHKlo(e.target.checked)
//                       }}
//                     />
//                     <div className="b-input"></div>
//                   </label>
//                   <Label htmlFor="klo">Hygiene</Label>
//                 </CheckboxGroup>
//                 <br />
//                 <CheckboxGroup>
//                   <label class="b-contain">
//                     <input
//                       className="checkBox"
//                       type="checkbox"
//                       name="technik"
//                       checked={hTech}
//                       onChange={e => {
//                         setHTech(e.target.checked)
//                       }}
//                     />
//                     <div className="b-input"></div>
//                   </label>
//                   <Label htmlFor="technik">Technik</Label>
//                 </CheckboxGroup>
//                 <br />
//                 <CheckboxGroup>
//                   <label class="b-contain">
//                     <input
//                       className="checkBox"
//                       type="checkbox"
//                       name="clean"
//                       checked={hClean}
//                       onChange={e => {
//                         setHClean(e.target.checked)
//                       }}
//                     />
//                     <div className="b-input"></div>
//                   </label>
//                   <Label htmlFor="clean">Entsorgung</Label>
//                 </CheckboxGroup>
//                 <br />
//                 <CheckboxGroup>
//                   <label class="b-contain">
//                     <input
//                       className="checkBox"
//                       type="checkbox"
//                       name="sani"
//                       checked={hSani}
//                       onChange={e => {
//                         setHSani(e.target.checked)
//                       }}
//                     />
//                     <div className="b-input"></div>
//                   </label>
//                   <Label htmlFor="clean">Sani</Label>
//                 </CheckboxGroup>
//                 <Seperator />
//               </Wo>
//               <InfoLabel>
//                 Von wann bis wann bist du verfügbar? Helfer:innen Buddy?
//               </InfoLabel>
//               <InfoText>
//                 Nenne uns deinen An- und Abreisetag und falls du einen Buddy
//                 hast, trage hier ihren/seinen Vor- und Nachnamen ein.
//               </InfoText>
//               <input
//                 type="buddy"
//                 name="buddy"
//                 value={hBuddy}
//                 onChange={e => setHBuddy(e.target.value)}
//               />{" "}
//               <Seperator />
//               <InfoLabel>Ehrenamtlich helfen?</InfoLabel>
//               <CheckboxGroup>
//                 <label class="b-contain">
//                   <input
//                     className="checkBox"
//                     type="checkbox"
//                     name="ehrenamtlich"
//                     checked={hEhrenamtlich}
//                     onChange={e => {
//                       setHEhrenamtlich(e.target.checked)
//                     }}
//                   />
//                   <div className="b-input"></div>
//                 </label>

//                 <CheckboxDecription>
//                   Ich möchte, dass meine Vergütung dem Festival zugute kommt.
//                 </CheckboxDecription>
//               </CheckboxGroup>
//               <WeiterWrapper>
//                 <FormButton typ="submit" label={buttonLabel} />
//               </WeiterWrapper>
//             </form>
//           </Right>
//         </Wrapper>
//       </Container>
//     </Layout>
//   )
// }

// const Container = styled.div`
//   margin: 0 auto;
//   display: grid;
//   grid-template-columns: 1fr;
//   justify-items: center;
// `

// const Wrapper = styled.div`
//   padding: 120px 40px;
//   display: grid;
//   grid-template-columns: 1.333fr 1fr;
//   gap: 40px;
//   @media (max-width: 768px) {
//     padding: 60px 20px;
//     grid-template-columns: 1fr;
//   }
// `

// const Wo = styled.div`
//   display: ${props => (props.isWhile ? "grid" : "none")};
// `

// const Left = styled.div`
//   max-width: 500px;
// `
// const Right = styled.div`
//   max-width: 500px;
// `

// const Header = styled(Headline)``

// const HelperDescription = styled.h5`
//   color: white;
//   margin-top: 40px;
// `

// const InfoLabel = styled(SubheaderSmall)`
//   color: white;
//   margin-top: 20px;
//   display: inline-block;
// `

// const InfoText = styled(Note)`
//   margin-top: 8px;
//   margin-bottom: 20px;
// `

// const Label = styled(SubheaderSmall)`
//   /* color: white; */
//   /* margin-top: 20px; */
//   /* display: inline-block; */
// `

// const Seperator = styled.div`
//   height: 1px;
//   background-color: rgba(255, 255, 255, 0.2);
//   margin: 40px 0 20px 0;
//   width: 100%;
// `

// const WeiterWrapper = styled.div`
//   margin-top: 80px;
// `

// const CheckboxGroup = styled.div`
//   display: grid;
//   grid-template-columns: 42px auto;
//   gap: 20px;
//   padding-top: 15px;
//   align-items: center;
// `

// const CheckboxDecription = styled(Note)``
