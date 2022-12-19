// import React, { useState }from "react"
// import styled from "styled-components"

// const LatecomerForm = props => {
//   const [formActive, setFormActive] = useState(false);
//   const userData = props.userData
//   const isHelfer = userData.Waehrend || userData.Aufbau || userData.Abbau
//   const shiftCount = userData.Dauer === 'S' ? 1 : userData.Dauer === 'M' ? 2 : 3

//   const createPreferenceString = () => {
//     let preferenceString = userData.Food ? ' Foodcourt,' :'' ;
//     preferenceString += userData.Bar ? ' Bar,' : '' ;
//     preferenceString += userData.Einlass ? ' Einlass,' :'' ;
//     preferenceString += userData.Security ? ' Security,' :'' ;
//     preferenceString += userData.Awareness ? ' Awareness,' :'' ;
//     preferenceString += userData.Hygiene ? ' Hygiene,' :'' ;
//     preferenceString += userData.Technik ? ' Technik,' :'' ;
//     preferenceString += userData.Entsorgung  ? ' Entsorgung,' :'' ;
//     return preferenceString.slice(0, -1);
//   }

//   const clickHandler = () => {
//     setFormActive(true);
//   }
//   return (
//     <CardWrapper>
//       <h3>LatecomerForm</h3>
//     </CardWrapper>
//   )
// }

// export default LatecomerForm

// const Status = styled.div`
//   height: 16px;
//   width: 16px;
//   margin: 3px 6px;
//   border-radius: 9px;
//   background-color: #00FF38;
// `

// const StatusBad = styled.div`
//   height: 16px;
//   width: 16px;
//   margin: 3px 6px;
//   border-radius: 9px;
//   background-color: #FF004D;
// `

// const CardWrapper = styled.div`
// `

// const CustomButton = styled.button`
//   max-width: 400px;
//   margin-top: 16px;
// `

// const Tile = styled.div`
//   padding: 30px 32px;
//   border-radius: 30px 0 0 30px;
//   background: rgba(255, 255, 255, 0.1);
//   width: 100vw;

//   @media (max-width: 800px) {
//     padding: 20px;
//     border-radius: 30px;
//   }
// `

// const HelperInfo = styled.h3`
//   font-size: 20px;
//   font-family: "GT-Alpina-Extended-Bold";
// `

// const DescriptionGrid = styled.div`
//   padding: 60px;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 40px;
//   @media (max-width: 800px) {
//     grid-template-columns: 1fr;
//     gap: 20px;
//   }
// `

// const DescriptionGridContent = styled.div``

// const InfoLabel = styled(SubheaderSmall)`
//   color: white;
//   margin-top: 20px;
//   display: inline-block;
// `

// const InfoText = styled(Note)`
//   margin-top: 8px;
//   margin-bottom: 20px;
// `

// const IsHelper = styled.div`
//   display: flex ;
// `

// const TileGrid = styled.div`
//   display: grid;
//   grid-template-columns: 32px auto;
//   row-gap: 8px ;
// `

// /*
// *{
//     "OrderID": "5MM9683927279660P",
//     "Dauer": "-",
//     "HausNr": "2",
//     "Vereinsbeitritt": true,
//     "Vorname": "Tobias",
//     "Datenspeicherung": true,
//     "Festival": true,
//     "Nachname": "Schmücker",
//     "Email": "schmuecker.tobias@gmail.com",
//     "Stadt": "Radolfzell am Bodensee",
//     "Friend": true,
//     "PLZ": 78315,
//     "Newsletter": true,
//     "Straße": "Im Lehen",
//     "TicketID": "yZf0jrG4tEMyia",
//     "Created": "2022-04-10T15:46:26.000Z",
//     "Last Modified": "2022-04-10T15:46:26.000Z"
// }
// */
