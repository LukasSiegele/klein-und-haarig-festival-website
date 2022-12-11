import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

export default function MenuTooltip(props) {
  const { isOpen, isInfo, isVolunteer, bgColor } = props
  return (
    <Wrapper isOpen={isOpen} bgColor={bgColor}>
      <MenuButton>
        <Link to="/info">
          <MenuLabel isInfo={isInfo}>Info</MenuLabel>
        </Link>
      </MenuButton>
      <MenuButton>
        <Link to="/volunteer">
          <MenuLabel isVolunteer={isVolunteer}>Volunteer</MenuLabel>
        </Link>
      </MenuButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${props => props.bgColor};
  padding: 20px;
  position: absolute;
  left: 0;
  top: 75px;
  width: 100vw;

  opacity: ${props => (props.isOpen ? 1 : 0)};
  height: ${props => (props.isOpen ? "100vh" : "0vh")};
  z-index: 1000;
  transition: 0.3 ease-in-out;
  /* display: ${props => (props.isOpen ? "block" : "none")}; */
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
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

const MenuLabel = styled.h1`
  color: black;
  text-align: center;
  vertical-align: center;
  text-decoration: ${props =>
    props.isInfo || props.isVolunteer ? "#ff7121 wavy line-through" : "none"};
`
