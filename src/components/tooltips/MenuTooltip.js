import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import React, { useState } from "react"
import styled from "styled-components"

export default function MenuTooltip(props) {
  const { isOpen, isInfo, isAbout, bgColor } = props
  const { t } = useTranslation()
  const { languages, originalPath } = useI18next()

  return (
    <Wrapper isOpen={isOpen} bgColor={bgColor}>
      <MenuGrid>
        <MenuButton>
          <Link to="/info">
            <MenuInfo isInfo={isInfo}>{t("navigation.infos")}</MenuInfo>
          </Link>
        </MenuButton>
        {/* <MenuButton>
          <Link to="/volunteer">
            <MenuVolunteer isVolunteer={isVolunteer}>
              {" "}
              {t("navigation.volunteers")}
            </MenuVolunteer>
          </Link>
        </MenuButton> */}
        <MenuButton>
          <Link to="/about">
            <MenuAbout isAbout={isAbout}>{t("navigation.about")}</MenuAbout>
          </Link>
        </MenuButton>

        {/* <MenuButton>
          <Link
            to="https://pretix.eu/bunteplatte/kleinundhaarig"
            target="_blank"
          >
            <MenuTickets>Tickets</MenuTickets>
          </Link>
        </MenuButton> */}
        <Language>
          <ul>
            {languages.map(lng => (
              <li key={lng} style={{ margin: "8px" }}>
                <Link to={originalPath} language={lng}>
                  {lng}
                </Link>
              </li>
            ))}
          </ul>
        </Language>
      </MenuGrid>
    </Wrapper>
  )
}

const Language = styled.div`
  margin-top: 80px;
  justify-self: center;
  text-align: center;
`

const Wrapper = styled.div`
  background-color: ${props => props.bgColor};
  padding: 20px;
  position: absolute;
  left: 0;
  top: 75px;
  width: 100vw;
  display: grid;
  align-items: center;
  overflow: hidden;

  opacity: ${props => (props.isOpen ? 1 : 0)};
  height: ${props => (props.isOpen ? "100vh" : "0vh")};
  z-index: 1000;
  transition: 0.3 ease-in-out;
  /* display: ${props => (props.isOpen ? "block" : "none")}; */
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
`

const MenuGrid = styled.div`
  display: grid;
  gap: 10px;
`

const MenuButton = styled.div`
  padding: 20px;
  height: 75px;
  /* background-color: white; */
  border-radius: 100px;
  margin-bottom: 10px;
  /* display: grid; */
  align-content: center;
  justify-items: center;
`

const MenuInfo = styled.h1`
  color: white;
  text-align: center;
  vertical-align: center;
  text-decoration: ${props =>
    props.isInfo ? "#959772 wavy line-through" : "none"};
`

const MenuAbout = styled.h1`
  color: white;
  text-align: center;
  vertical-align: center;
  text-decoration: ${props =>
    props.isVerein ? "#ff5400 wavy line-through" : "none"};
`

const MenuTickets = styled.h1`
  color: white;
  text-align: center;
  vertical-align: center;
`
