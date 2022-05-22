import React from "react"
import styled from "styled-components"

import {
  Headline,
  MasterHeadline,
  PageInfo,
  ImageDescription,
  SubheaderSmall,
  Note,
} from "../../styles/TextStyles"

const HelperSection = props => {
  const userData = props.userData
  const isHelfer = userData.Waehrend || userData.Aufbau || userData.Abbau 
  const shiftCount = userData.Dauer === 'S' ? 1 : userData.Dauer === 'M' ? 2 : 3

  const createPreferenceString = () => { 
    let preferenceString = userData.Food ? ' Foodcourt,' :'' ;
    preferenceString += userData.Bar ? ' Bar,' : '' ;
    preferenceString += userData.Einlass ? ' Einlass,' :'' ; 
    preferenceString += userData.Security ? ' Security,' :'' ;
    preferenceString += userData.Awareness ? ' Awareness,' :'' ;  
    preferenceString += userData.Hygiene ? ' Hygiene,' :'' ; 
    preferenceString += userData.Technik ? ' Technik,' :'' ; 
    preferenceString += userData.Entsorgung  ? ' Entsorgung,' :'' ;
    return preferenceString.slice(0, -1);
  }
  return (
    <CardWrapper>
      <Tile>
        <TileGrid>
          { isHelfer ? <>
            <Status/>
            <Note>zugeteilt</Note>
            <div></div>
            <div>
              <HelperInfo>{userData.Aufbau ? 'Aufbau (Mo-Do)' : userData.Waehrend ? 'Während des Festivals' : 'Abbau (Mo-Do)'}</HelperInfo>
              <HelperInfo>{`${shiftCount}x 6h (${userData.Dauer})`}</HelperInfo>
              {isHelfer && 
                <HelperInfo>Deine Präferenzen: {createPreferenceString()}</HelperInfo>
              }
            </div></> : null }
              
        </TileGrid>
        

      </Tile>
      <DescriptionGrid>
        <DescriptionGridContent>
          <InfoLabel>Wie läuft das ab?</InfoLabel>
          <InfoText>
          Halte am Eingang deinen Ausweis und entweder diesen QR Code oder dein Hardticket bereit.
          </InfoText>
        </DescriptionGridContent>
        <DescriptionGridContent>
          <InfoLabel>Tipp</InfoLabel>
          <InfoText>
            Auf dem Festivalgelände gibt es schlechten Empfang. Wenn
            du kein Hardticket hast empfehlen wir einen Screenshot
            vom QR Code zu machen und das Foto bereitzuhalten.
          </InfoText>
        </DescriptionGridContent>
      </DescriptionGrid>
    </CardWrapper>
  )
}

export default HelperSection

const Status = styled.div`
  height: 18px;
  width: 18px;
  margin: 3px 6px;
  border-radius: 9px;
  background-color: #00FF38;
`

const CardWrapper = styled.div`
`

const Tile = styled.div`
  padding: 30px 32px;
  border-radius: 30px 0 0 30px;
  background: rgba(255, 255, 255, 0.1);
  width: 100vw;

  @media (max-width: 800px) {
    padding: 20px;
    border-radius: 30px;
  }
`

const HelperInfo = styled.h3`
  font-size: 24px;
`

const DescriptionGrid = styled.div`
  padding: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const DescriptionGridContent = styled.div``

const InfoLabel = styled(SubheaderSmall)`
  color: white;
  margin-top: 20px;
  display: inline-block;
`

const InfoText = styled(Note)`
  margin-top: 8px;
  margin-bottom: 20px;
`

const IsHelper = styled.div`
  display: flex ;
`

const TileGrid = styled.div`
  display: grid;
  grid-template-columns: 32px auto;
  row-gap: 8px ;
`

/* 
*{
    "OrderID": "5MM9683927279660P",
    "Dauer": "-",
    "HausNr": "2",
    "Vereinsbeitritt": true,
    "Vorname": "Tobias",
    "Datenspeicherung": true,
    "Festival": true,
    "Nachname": "Schmücker",
    "Email": "schmuecker.tobias@gmail.com",
    "Stadt": "Radolfzell am Bodensee",
    "Friend": true,
    "PLZ": 78315,
    "Newsletter": true,
    "Straße": "Im Lehen",
    "TicketID": "yZf0jrG4tEMyia",
    "Created": "2022-04-10T15:46:26.000Z",
    "Last Modified": "2022-04-10T15:46:26.000Z"
}
*/