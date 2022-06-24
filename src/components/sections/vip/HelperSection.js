import React, { useState }from "react"
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
  const [formActive, setFormActive] = useState(false);
  const userData = props.userData
  const isHelfer = userData.Waehrend || userData.Aufbau || userData.Abbau 
  const isAssigned = userData.Helferzuweisung && userData.Schichtzeitraum && userData.Schichtinfo
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

  const clickHandler = () => {
    setFormActive(true);
  }
  return (
    <CardWrapper>
      <Tile>
        {formActive ? <p>Form coming soon</p> : 
        <TileGrid>
          { isHelfer ? <>
            {isAssigned ? <>
              <Status/>
              <Note>zugeteilt</Note>
              <div></div>
              <div>
                <HelperInfo>{userData.Helferzuweisung}</HelperInfo>
                <HelperInfo>{userData.Schichtanzahl}</HelperInfo>
                <HelperInfo>{userData.Schichtzeitraum}</HelperInfo>
                <InfoText>{userData.Schichtinfo}</InfoText>
              </div>
            </> : <>
            <StatusUnassigned/>
            <Note>noch nicht zugeteilt</Note>
            <div></div>
            {/*<div>
              <HelperInfo>Deine Angaben
              <HelperInfo>{userData.Aufbau ? 'Aufbau (Mo-Do)' : userData.Waehrend ? 'Während des Festivals' : 'Abbau (Di-Do)'}</HelperInfo>
              <HelperInfo>{`${shiftCount}x 6h (${userData.Dauer})`}</HelperInfo>
              {userData.Waehrend && 
                <HelperInfo>Deine Präferenzen: {createPreferenceString()}</HelperInfo>
              }
            </div>*/} 

              <InfoText>Alle Schichten während dem Festival werden erst kurz vor dem Festival zugeteilt. Zuweisungen können nach dem Ticketkauf ein paar Tage dauern. Bitte checke ab und zu deinen Status.</InfoText>

            </> } </> : 
            <>
            <StatusBad/> 
            <Note>nicht als Helfer registriert</Note>
            <div></div>
            <div>
              <HelperInfo>Du hast dich nicht als Helfer registriert.</HelperInfo>
              <HelperInfo>Wenn du das noch ändern möchtest wende dich bitter per Mail an</HelperInfo>
              <MailTo href="mailto:ticket@kleinundhaarig.de">ticket@kleinundhaarig.de</MailTo>
            </div>
            </>
            }
              
        </TileGrid>
        }
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
  height: 16px;
  width: 16px;
  margin: 3px 6px;
  border-radius: 9px;
  background-color: #00FF38;
`

const StatusUnassigned = styled.div`
  height: 16px;
  width: 16px;
  margin: 3px 6px;
  border-radius: 9px;
  background-color: #EBFF00;
`

const StatusBad = styled.div`
  height: 16px;
  width: 16px;
  margin: 3px 6px;
  border-radius: 9px;
  background-color: #F0F0F0;
`
const MailTo = styled.a`
  padding-top: 10px;
  color: rgba(255, 115, 33, 1);
  padding-top: 32px;
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

const SoftInfo = styled.h4`

`

const HelperInfo = styled.h3`
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "GT-Alpina-Extended-Bold";
  color: rgba(255, 255, 255, 1);
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
  max-width: 650px;
`

const IsHelper = styled.div`
  display: flex ;
`

const TileGrid = styled.div`
  display: grid;
  grid-template-columns: 32px auto;
  row-gap: 8px;
`
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 32px auto;
  row-gap: 8px;
`
const Icon = styled.img`
  margin: 0px 16px 0px 16px;
  width: 24px;
  height: 24px;
  align-self: center;
`