import React, { useState } from "react"
import { TickerText } from "../styles/TextStyles"
import RTicker from "react-ticker"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"

import "./Ticker.css"
const Ticker = () => {
  const [isMoving, setIsMoving] = useState(true)

  const mouseEnterHandler = () => {
    setIsMoving(false)
  }

  const mouseLeaveHandler = () => {
    setIsMoving(true)
  }

  return (
    <TickerWrapper
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <RTicker speed={6} move={isMoving}>
        {({ index }) => (
          <Wrapper>
            <TickerText className="tickerText">
              Ticketverkauf ab 3. April, 16 Uhr
            </TickerText>
            <Icon src="/icons/banner-star.svg"></Icon>
          </Wrapper>
        )}
      </RTicker>
    </TickerWrapper>
  )
}

const Icon = styled.img`
  margin: 0px 16px 0px 16px;
  width: 24px;
  height: 24px;
  align-self: center;
`

const Wrapper = styled.div`
  /* display: flex; */
  padding: 4px 0;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr auto;

  /* width: auto; */
  /* display: grid; */
`

const TickerWrapper = styled.div`
  z-index: 199;
  position: fixed;
  left: 0;
  bottom: 6%;
  width: 100vw;

  display: grid;
  background-color: #000;
`

export default Ticker
