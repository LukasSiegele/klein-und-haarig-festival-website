import React from "react"
import styled from "styled-components"
import { Link as SideNavStyledLink } from "gatsby"

import NavBackground from "../../../public/images/SideNavBackground.png"

import LogoSideNav from "../../../public/images/LogoSideNav.svg"

export default function SideNavigation() {
  return (
    <SideNavWrapper>
      <SideNavLogoWrapper>
        <SideNavLogo />
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
  position: fixed;
  background-image: url(${NavBackground});
  width: 167px;
  height: 100vh;
  z-index: 100;
  border-right: 1px solid;

  @media (max-width: 768px) {
    display: none;
  }
`

const SideNavLogoWrapper = styled.div`
  margin: 40px;
  width: 84px;
  height: 79px;

  @media (max-width: 800px) {
    margin: 20px;
  }
`

// KuH Logo in SideNav
const SideNavLogo = styled.div`
  max-width: 100%;
  height: 100%;
  background-image: url(${LogoSideNav});
  background-size: cover;
`

// Div of Links in SideNav
// const SideNavLinkGroup = styled.div`
//     float: left;
//     margin-top: 25%;
//     margin-left: 15%;
//     display: block;
//     width: 70%;
//     height: auto;
// `

// // Links in SideNav
// const SideNavLinks = styled(SideNavStyledLink)`
//     text-decoration: none;
//     display: block;
//     float: left;
//     width: 130px;
//     color: black;
//     font-size: 0.8em;
//     font-weight: normal;
//     margin-bottom: 12px;

//     & > :hover {
//         cursor: pointer;
//       }

//     transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
//     :hover {
//       /* transform: translateY(-10px); */
//       /* transform: scale(1.03);
//       cursor: pointer; */
//     }
// `
