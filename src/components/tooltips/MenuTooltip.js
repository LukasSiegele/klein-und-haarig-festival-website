import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import React, { useState } from "react"
import styled from "styled-components"

export default function MenuTooltip(props) {
  const { isOpen, isInfo, isAbout, isVolunteer, isCode, isAwareness, isShop, bgColor } = props
  const { t } = useTranslation()
  const { languages, originalPath } = useI18next()

  return (
    <Wrapper isOpen={isOpen} bgColor={bgColor}>
      <MenuGrid>
        {/* <MenuButton>
          <Link to="/info">
            <MenuInfo isInfo={isInfo}>{t("navigation.infos")}</MenuInfo>
          </Link>
        </MenuButton>
        <MenuButton>
          <Link to="/volunteer">
            <MenuVolunteer isVolunteer={isVolunteer}>{t("navigation.volunteers")}</MenuVolunteer>
          </Link>
        </MenuButton> */}
        <MenuButton>
          <Link to="/about">
            <MenuAbout isAbout={isAbout}>{t("navigation.about")}</MenuAbout>
          </Link>
        </MenuButton>
        <MenuButton>
          <Link to="/code">
            <MenuCode isCode={isCode}>{t("navigation.code")}</MenuCode>
          </Link>
        </MenuButton>
        <MenuButton>
          <Link to="/awareness">
            <MenuAwareness isAwareness={isAwareness}>{t("navigation.awareness")}</MenuAwareness>
          </Link>
        </MenuButton>
        <MenuButton>
          <Link to="/shop">
            <MenuShop isShop={isShop}>{t("navigation.shop")}</MenuShop>
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
  padding: 16px;
  height: auto;
  /* background-color: white; */
  border-radius: 100px;
  /*  margin-bottom: 10px; */
  /* display: grid; */
  align-content: center;
  justify-items: center;
`

const MenuInfo = styled.h1`
  color: white;
  text-align: center;
  line-height: 0.8;
  font-size: 2.5rem;
  vertical-align: center;
  text-decoration: ${props =>
    props.isInfo ? "#ff5400 wavy line-through" : "none"};
  &:hover {
    cursor: pointer;
  }
`

const MenuVolunteer = styled.h1`
  color: white;
  text-align: center;
  line-height: 0.8;
  font-size: 2.5rem;
  vertical-align: center;
  text-decoration: ${props =>
    props.isVolunteer ? "#ff5400 wavy line-through" : "none"};
  &:hover {
    cursor: pointer;
  }
`

const MenuAbout = styled.h1`
  color: white;
  text-align: center;
  line-height: 0.8;
  font-size: 2.5rem;
  vertical-align: center;
  text-decoration: ${props =>
    props.isAbout ? "#ff5400 wavy line-through" : "none"};
  &:hover {
    cursor: pointer;
  }
`

const MenuCode = styled.h1`
  color: white;
  text-align: center;
  line-height: 0.8;
  font-size: 2.5rem;
  vertical-align: center;
  text-decoration: ${props =>
    props.isCode ? "#ff5400 wavy line-through" : "none"}; 
  &:hover {
    cursor: pointer;
  }
`

const MenuAwareness = styled.h1`
  color: white;
  text-align: center;
  line-height: 0.8;
  font-size: 2.5rem;
  vertical-align: center;
  text-decoration: ${props =>
    props.isAwareness ? "#ff5400 wavy line-through" : "none"};
  &:hover {
    cursor: pointer;
  }
`

const MenuShop = styled.h1`
  color: white;
  text-align: center;
  line-height: 0.8;
  font-size: 2.5rem;
  vertical-align: center;
  text-decoration: ${props =>
    props.isShop ? "#ff5400 wavy line-through" : "none"};
  &:hover {
    cursor: pointer;
  }
`