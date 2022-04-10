import React, { useState } from "react"
import styled from "styled-components"
import Ring from "./Ring"

const initVals = []

const TicketButton = props => {
  const [l1, setl1] = useState(45)
  const [l2, setl2] = useState(55)
  const [l3, setl3] = useState(65)

  const mouseEnterHandler = () => {
    setl1(Math.floor(Math.random() * 10))
    setl2(Math.floor(Math.random() * 10) + 92)
    setl3(Math.floor(Math.random() * 50) + 25)
  }
  const mouseLeaveHandler = () => {
    setl1(45)
    setl2(55)
    setl3(65)
  }

  return (
    <Wrapper onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <Ring open={l1 < 100 ? true : false} left={l1}></Ring>
      <Ring open={l2 < 100 ? true : false} left={l2}></Ring>
      <Ring open={l3 < 100 ? true : false} left={l3}></Ring>
      <TicketBackground src="/images/ticket-bg.svg"></TicketBackground>
      <TicketButtonText>TICKETS</TicketButtonText>
    </Wrapper>
  )
}

const TicketButtonText = styled.p`
  font-family: "GT-Alpina-Extended-Bold";
  text-align: center;
  position: absolute;
  width: 126px;
  left: 0px;
  top: 0px;
  color: black;

  height: 41px;
  line-height: 41px;
`

const TicketBackground = styled.img`
  width: 126px;
  position: absolute;
  left: 0px;
  top: 0px;
  cursor: pointer;
  pointer-events: auto;
  height: 41px;
`
const Wrapper = styled.div`
  position: absolute;
  /* left: 25vw; */
  height: 41px;
  width: 126px;

  & > :hover {
    cursor: pointer;
  }
`
export default TicketButton
