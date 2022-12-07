import React, { useState } from "react"
import styled from "styled-components"

export default function MenuTooltip(props) {
  const { isOpen } = props
  return (
    <Wrapper isOpen={isOpen}>
      <MenuButton>
        <MenuLabel>Info</MenuLabel>
      </MenuButton>
      <MenuButton>
        <MenuLabel>Volunteer</MenuLabel>
      </MenuButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
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
  visability: ${props => (props.isOpen ? "visible" : "hidden")};
`

const MenuButton = styled.div`
  padding: 20px;
  height: 75px;
  background-color: white;
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
`
