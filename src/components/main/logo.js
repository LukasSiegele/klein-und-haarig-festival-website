import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import LogoSVG from "../../../static/images/LogoSideNav.svg"

export default function KuhLogo() {
  return (
    <Link to="/">
      <Logo src="../../../static/images/LogoSideNav.svg" />
    </Link>
  )
}

const Logo = styled.div`
  width: 84px;
  height: 79px;

  :hover {
    cursor: pointer;
  }
`
