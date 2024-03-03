import React from "react"
import styled from "styled-components"
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';

import { TextSmall } from "../styles/TextStyles"

export default function SideNavigation(props) {
  const { isInfo, isVolunteer, isVerein, isOpenCalls } = props
  const {languages, originalPath, language} = useI18next();
  const {t} = useTranslation()
  return (
    <Desktop>
      <Wrapper bgColor={props.bgColor}>
        <LogoWrapper>
          <Link to="/">
            <Logo src="/icons/Logo-White.svg"></Logo>
          </Link>
          <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
        </LogoWrapper>


        <LinkWrapper>
          <LinkGroup>
            <Link to={"/info"} >
              
                <ListInfo isInfo={isInfo}>{t('navigation.infos')}</ListInfo>
              
            </Link>
            <Link to={"/volunteer"} language={language}>
              
                <ListVolunteer isVolunteer={isVolunteer}>
                  {t('navigation.volunteers')}
                </ListVolunteer>
              
            </Link>
            {/* <Link to={"/opencalls"}>
              <a>
                <ListVolunteer isOpenCalls={isOpenCalls}>
                  Open Calls
                </ListVolunteer>
              </a>
            </Link> */}
            <Link to={"/verein"} language={language}>
              
                <ListVerein isVerein={isVerein}>{t('navigation.association')}</ListVerein>
              
            </Link>
            {/* <Link
              to="https://pretix.eu/bunteplatte/kleinundhaarig"
              target="_blank"
            >
              <a>
                <ListTickets>Tickets</ListTickets>
              </a>
            </Link> */}
          </LinkGroup>
        </LinkWrapper>
      </Wrapper>
    </Desktop>
  )
}

// Fixed SideNav on Frontpage
const MobileView = styled.div`
  /* display: none; */
`

const Desktop = styled.div`
  /* display: none; */
`

const Wrapper = styled.div`
  position: fixed;
  display: grid;
  background-color: rgba(0, 0, 0, 1);
  backdrop-filter: blur(0px);
  grid-template-rows: auto 1fr;

  /* background-color: ${props => props.bgColor}; */

  height: 100vh;
  z-index: 100;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  width: 133px;

  /* animation: SideBarAnimation 1.3s 0.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1); */
  opacity: 1;

  @keyframes SideBarAnimation {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`

const LogoWrapper = styled.div`
  padding: 30px 15px 15px 15px;
  display: grid;
  justify-items: center;
  z-index: 99;

  /* mix-blend-mode: difference !important; */
`

// KuH Logo in SideNav
const Logo = styled.img`
  width: 64px;
  height: 62px;
  mix-blend-mode: difference;

  :hover {
    cursor: pointer;
  }
`

const LinkWrapper = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  margin-top: -94px;
`

const LinkGroup = styled.div`
  text-align: center;
  display: grid;

  grid-template-rows: 1fr 1fr;
  gap: 10px;
`

const ListInfo = styled(TextSmall)`
  color: white;
  font-family: "GT-Alpina-Extended-Regular";
  text-decoration: ${props =>
    props.isInfo ? "#A19089 wavy line-through" : "none"};

  &:hover {
    cursor: pointer;
  }
`

const ListVolunteer = styled(TextSmall)`
  color: white;
  font-family: "GT-Alpina-Extended-Regular";
  text-decoration: ${props =>
    props.isVolunteer ? "#6A79FF wavy line-through" : "none"};

  &:hover {
    cursor: pointer;
  }
`

const ListVerein = styled(TextSmall)`
  color: white;
  font-family: "GT-Alpina-Extended-Regular";
  text-decoration: ${props =>
    props.isVerein ? "#FF965B wavy line-through" : "none"};

  &:hover {
    cursor: pointer;
  }
`

const ListTickets = styled(TextSmall)`
  color: white;
  font-family: "GT-Alpina-Extended-Regular";
  &:hover {
    cursor: pointer;
  }
`
