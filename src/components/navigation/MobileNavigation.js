import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import LogoSideNav from "../../../static/images/LogoSideNav-Black.png"

import { TextSmall } from "../styles/TextStyles"
import MenuTooltip from "../tooltips/MenuTooltip"

export default function MobileNavigation(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Mobile>
      <Wrapper bgColor={props.bgColor}>
        <SideNavLogoWrapper>
          <Link to="/">
            <SideNavLogo />
          </Link>
        </SideNavLogoWrapper>
        <MenuWrapper onClick={() => setIsOpen(!isOpen)}>
          Menu
          <MenuTooltip isOpen={isOpen} />
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
  height: 75px;
  background-color: white;
  position: fixed;
  z-index: 1000;
  width: 100vw;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
`

const SideNavLogoWrapper = styled.div`
  justify-self: start;
`

const MenuWrapper = styled.div`
  justify-content: end;
`

// KuH Logo in SideNav
const SideNavLogo = styled.div`
  width: 64px;
  height: 64px;
  background-image: url(${LogoSideNav});
  background-size: cover;

  :hover {
    cursor: pointer;
  }
`
