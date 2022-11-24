import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import NavBackground from "../../static/images/SideNavBackground.png"

import LogoSideNav from "../../static /images/LogoSideNav.svg"

export default function SideNavigation() {
  return (
    <SideNavWrapper>
      <SideNavLogoWrapper>
        <Link to="/">
          <SideNavLogo />
        </Link>
      </SideNavLogoWrapper>
      {/* <SideNavLinkGroup>
                <SideNavLinks to={"/voll"} activeClassName="active">
                    Festival 
                </SideNavLinks>
                <SideNavLinks to={"/voll"}>
                    Programm
                </SideNavLinks>
                <SideNavLinks to={"/voll"}>
                    Infos
                </SideNavLinks>
                <SideNavLinks to={"/helfer"}>
                    Helfen
                </SideNavLinks>
            </SideNavLinkGroup> */}
    </SideNavWrapper>
  )
}

// Fixed SideNav on Frontpage
const SideNavWrapper = styled.div`
  /* position: fixed; */
  /* background-image: url(${NavBackground}); */

  height: auto;
  /* z-index: 100; */
  border-right: 1px solid;

  animation: SideBarAnimation 1.3s 0.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

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

  @media (max-width: 768px) {
    display: none;
  }
`

const SideNavLogoWrapper = styled.div`
  margin: 40px;
  width: 84px;
  height: 79px;
`

// KuH Logo in SideNav
const SideNavLogo = styled.div`
  max-width: 87%;
  height: 87%;
  background-image: url(${LogoSideNav});
  background-size: cover;
  :hover {
    cursor: pointer;
  }
`
