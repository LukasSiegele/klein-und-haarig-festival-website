import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { TextSmall } from "../styles/TextStyles"

export default function SideNavigation(props) {
  const { isInfo, isVolunteer, isVerein, isOpenCalls } = props
  return (
    <Desktop>
      <Wrapper bgColor={props.bgColor}>
        <LogoWrapper>
          <Link to="/">
            <Logo src="/icons/Logo-Black.svg"></Logo>
          </Link>
        </LogoWrapper>
        <LinkWrapper>
          <LinkGroup>
            <Link to={"/info"}>
              <a>
                <ListInfo isInfo={isInfo}>Infos</ListInfo>
              </a>
            </Link>
            <Link to={"/volunteer"}>
              <a>
                <ListVolunteer isVolunteer={isVolunteer}>
                  Volunteer
                </ListVolunteer>
              </a>
            </Link>
            {/* <Link to={"/opencalls"}>
              <a>
                <ListVolunteer isOpenCalls={isOpenCalls}>
                  Open Calls
                </ListVolunteer>
              </a>
            </Link> */}
            <Link to={"/verein"}>
              <a>
                <ListVerein isVerein={isVerein}>Verein</ListVerein>
              </a>
            </Link>
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
  grid-template-rows: auto 1fr;

  /* background-color: ${props => props.bgColor}; */

  height: 100vh;
  z-index: 100;
  border-right: 1px solid;
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
  color: black;
  font-family: "GT-Alpina-Extended-Regular";
  text-decoration: ${props =>
    props.isInfo ? "#9A9EFF wavy line-through" : "none"};

  &:hover {
    cursor: pointer;
  }
`

const ListVolunteer = styled(TextSmall)`
  color: black;
  font-family: "GT-Alpina-Extended-Regular";
  text-decoration: ${props =>
    props.isVolunteer ? "#CBC3FF wavy line-through" : "none"};

  &:hover {
    cursor: pointer;
  }
`

const ListVerein = styled(TextSmall)`
  color: black;
  font-family: "GT-Alpina-Extended-Regular";
  text-decoration: ${props =>
    props.isVerein ? "#CBC3FF wavy line-through" : "none"};

  &:hover {
    cursor: pointer;
  }
`
