import React, { useState } from "react"
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
  const [formActive, setFormActive] = useState(false)
  const userData = props.userData
  const isHelfer = userData.Waehrend || userData.Aufbau || userData.Abbau
  const isAssigned =
    userData.Helferzuweisung && userData.Schichtzeitraum && userData.Schichtinfo
  const shiftCount = userData.Dauer === "S" ? 1 : userData.Dauer === "M" ? 2 : 3

  const createPreferenceString = () => {
    let preferenceString = userData.Food ? " Foodcourt," : ""
    preferenceString += userData.Bar ? " Bar," : ""
    preferenceString += userData.Einlass ? " Einlass," : ""
    preferenceString += userData.Security ? " Security," : ""
    preferenceString += userData.Awareness ? " Awareness," : ""
    preferenceString += userData.Hygiene ? " Hygiene," : ""
    preferenceString += userData.Technik ? " Technik," : ""
    preferenceString += userData.Entsorgung ? " Entsorgung," : ""
    return preferenceString.slice(0, -1)
  }

  const clickHandler = () => {
    setFormActive(true)
  }
  return (
    <CardWrapper>
      <Tile>
        {formActive ? (
          <p>Form coming soon</p>
        ) : (
          <TileGrid>
            {isHelfer ? (
              <>
                {isAssigned ? (
                  <>
                    <StatusGroup>
                      <Status />
                      <StatusLabel>zugeteilt</StatusLabel>
                    </StatusGroup>
                    <div></div>
                    <div>
                      <HelperInfo>{userData.Helferzuweisung}</HelperInfo>
                      <HelperInfo>{userData.Schichtanzahl}</HelperInfo>
                      <HelperInfo>{userData.Schichtzeitraum}</HelperInfo>
                      <InfoText>{userData.Schichtinfo}</InfoText>
                    </div>
                  </>
                ) : (
                  <>
                    <StatusGroupUnassigned>
                      <StatusUnassigned />
                      <StatusLabelUnassigned>
                        noch nicht zugeteilt
                      </StatusLabelUnassigned>
                    </StatusGroupUnassigned>
                    <div></div>
                    {/*<div>
              <HelperInfo>Deine Angaben
              <HelperInfo>{userData.Aufbau ? 'Aufbau (Mo-Do)' : userData.Waehrend ? 'Während des Festivals' : 'Abbau (Di-Do)'}</HelperInfo>
              <HelperInfo>{`${shiftCount}x 6h (${userData.Dauer})`}</HelperInfo>
              {userData.Waehrend && 
                <HelperInfo>Deine Präferenzen: {createPreferenceString()}</HelperInfo>
              }
            </div>*/}

                    <InfoGroup>
                      <InfoIcon src="/icons/Info.svg" />
                      <InfoText>
                        Alle Schichten während dem Festival werden erst kurz
                        davor bekannt gegeben. Zuweisungen können nach dem
                        Ticketkauf ein paar Tage dauern. Bitte checke ab und zu
                        deinen Status.
                      </InfoText>
                    </InfoGroup>
                  </>
                )}{" "}
              </>
            ) : (
              <>
                <StatusGroupBad>
                  <StatusBad />
                  <StatusLabelBad>nicht als Helfer registriert</StatusLabelBad>
                </StatusGroupBad>
                <div></div>
                <div>
                  <HelperInfo>
                    Du hast dich nicht als Helfer registriert.
                  </HelperInfo>
                  <HelperInfo>
                    Wenn du das ändern möchtest wende dich bitter per Mail an
                  </HelperInfo>
                  <MailTo href="mailto:ticket@kleinundhaarig.de">
                    ticket@kleinundhaarig.de
                  </MailTo>
                </div>
              </>
            )}
          </TileGrid>
        )}
      </Tile>
      <DescriptionGrid>
        <DescriptionGridContent>
          <InfoLabel>Passt etwas nicht?</InfoLabel>
          <InfoText>
            Sollte etwas für dich nicht passen gib uns bitte zeitnah Bescheid
            über{" "}
            <MailTo href="mailto:ticket@kleinundhaarig.de">
              ticket@kleinundhaarig.de
            </MailTo>
          </InfoText>
        </DescriptionGridContent>
        <DescriptionGridContent>
          <InfoLabel>Was bedeutet "tba"?</InfoLabel>
          <InfoText>
            Viele Schichten, und vor allem Schichtzeiträume, während dem
            Festival werden erst kurz davor bekannt gegeben. Bitte checke ab und
            zu deinen Status.
          </InfoText>
        </DescriptionGridContent>
      </DescriptionGrid>
    </CardWrapper>
  )
}

export default HelperSection

const StatusGroup = styled.div`
  padding: 16px;
  padding-right: 18px;
  background-color: rgba(0, 255, 56, 0.15);
  margin-bottom: 24px;
  display: inline-flex;
  width: auto;
  border-radius: 12px;
`
const StatusGroupUnassigned = styled.div`
  padding: 16px;
  padding-right: 18px;
  background-color: rgba(235, 255, 0, 0.15);
  margin-bottom: 24px;
  display: inline-flex;
  width: auto;
  border-radius: 12px;
`
const StatusGroupBad = styled.div`
  padding: 16px;
  padding-right: 18px;
  background-color: rgba(240, 240, 240, 0.15);
  margin-bottom: 24px;
  display: inline-flex;
  width: auto;
  border-radius: 12px;
`

const Status = styled.div`
  height: 16px;
  width: 16px;

  border-radius: 9px;
  background-color: #00ff38;
  /* float: left; */
`

const StatusUnassigned = styled.div`
  height: 16px;
  width: 16px;
  margin: 3px 6px;
  border-radius: 9px;
  background-color: #ebff00;
`

const StatusBad = styled.div`
  height: 16px;
  width: 16px;
  margin: 3px 6px;
  border-radius: 9px;
  background-color: rgba(255, 255, 255, 0.6);
`
const MailTo = styled.a`
  padding-top: 10px;
  padding-top: 32px;
  border-bottom: 1px solid white;
`

const CardWrapper = styled.div``

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

const SoftInfo = styled.h4``

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
  display: flex;
`

const TileGrid = styled.div``

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 32px auto;
  row-gap: 8px;
`

const InfoGroup = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
`
const Icon = styled.img`
  margin: 0px 16px 0px 16px;
  width: 24px;
  height: 24px;
  align-self: center;
`
const InfoIcon = styled.img`
  margin-top: 10px;
  width: 18px;
  height: 18px;
  /* align-self: center; */
`

export const StatusLabel = styled(Note)`
  color: #00ff38;
  margin-left: 12px;
`
export const StatusLabelUnassigned = styled(Note)`
  color: #ebff00;
  margin-left: 12px;
`
export const StatusLabelBad = styled(Note)`
  color: #f0f0f0;
  margin-left: 12px;
`
