import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import LogoSideNav from "../../../static/images/LogoSideNav-Black.png"
import Menu from "../../../static/icons/Menu.svg"

import { TextSmall } from "../styles/TextStyles"
import MenuTooltip from "../tooltips/MenuTooltip"

export default function MobileNavigation(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Mobile>
      <Wrapper bgColor={props.bgColor}>
        <SideNavLogoWrapper>
          <Link to="/">
            <Logo src="/icons/Logo-Black.svg"></Logo>
          </Link>
        </SideNavLogoWrapper>
        <MenuWrapper onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
          <MenuTooltip
            isOpen={isOpen}
            isInfo={props.isInfo}
            isVolunteer={props.isVolunteer}
            isVerein={props.isVerein}
            bgColor={props.bgColor}
          />
        </MenuWrapper>
      </Wrapper>
    </Mobile>
  )
}

// Fixed SideNav on Frontpage
const Mobile = styled.div`
  @media (min-width: 801px) {
    display: none;
  }
`

const Wrapper = styled.div`
  /* height: 75px; */
  background-color: ${props => props.bgColor};
  position: fixed;
  z-index: 1000;
  width: 100vw;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 6px 10px;
  /* height: 80px; */
`

const SideNavLogoWrapper = styled.div`
  justify-self: start;
`

const MenuWrapper = styled.div`
  justify-items: end;
`

const MenuIcon = styled.div`
  width: 64px;
  height: 64px;
  background-image: url(${Menu});

  background-size: cover;
  :hover {
    cursor: pointer;
  }
`

// KuH Logo in SideNav
const Logo = styled.img`
  width: 54px;
  height: 52px;

  :hover {
    cursor: pointer;
  }
`
