import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

export default function MenuTooltip(props) {
  const { isOpen, isInfo, isVolunteer, isVerein, bgColor } = props
  return (
    <Wrapper isOpen={isOpen} bgColor={bgColor}>
      <MenuGrid>
        <MenuButton>
          <Link to="/info">
            <MenuInfo isInfo={isInfo}>Infos</MenuInfo>
          </Link>
        </MenuButton>
        <MenuButton>
          <Link to="/volunteer">
            <MenuVolunteer isVolunteer={isVolunteer}>Volunteer</MenuVolunteer>
          </Link>
        </MenuButton>
        <MenuButton>
          <Link to="/verein">
            <MenuVerein isVerein={isVerein}>Verein</MenuVerein>
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
      </MenuGrid>
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
  padding: 20px;
  height: 75px;
  /* background-color: white; */
  border-radius: 100px;
  margin-bottom: 10px;
  /* display: grid; */
  align-content: center;
  justify-items: center;
`

const MenuInfo = styled.h1`
  color: white;
  text-align: center;
  vertical-align: center;
  text-decoration: ${props =>
    props.isInfo ? "#A19089 wavy line-through" : "none"};
`

const MenuVolunteer = styled.h1`
  color: white;
  text-align: center;
  vertical-align: center;
  text-decoration: ${props =>
    props.isVolunteer ? "#6A79FF wavy line-through" : "none"};
`

const MenuVerein = styled.h1`
  color: white;
  text-align: center;
  vertical-align: center;
  text-decoration: ${props =>
    props.isVerein ? "#FF965B wavy line-through" : "none"};
`

const MenuTickets = styled.h1`
  color: white;
  text-align: center;
  vertical-align: center;
`
