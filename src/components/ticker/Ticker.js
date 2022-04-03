import React, { useState, useEffect } from "react"
import { TickerText } from "../styles/TextStyles"
import RTicker from "react-ticker"
import styled from "styled-components"
import { themes } from "../styles/ColorStyles"

import Delayed from "../ticker/useTickerDelay"

import "./Ticker.css"


// Ticker Component
const Ticker = () => {
  const [isMoving, setIsMoving] = useState(true)

  const mouseEnterHandler = () => {
    setIsMoving(false)
  }

  const mouseLeaveHandler = () => {
    setIsMoving(true)
  }

  return (
    <Delayed>
      <TickerWrapper
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <RTicker speed={6} move={isMoving}>
          {({ index }) => (
            <Wrapper>
              <TickerText className="tickerText">
                Sorry, der Ticketverkauf verschiebt sich leider wegen technische
                Problemen.
              </TickerText>
              <Icon src="/icons/banner-star.svg"></Icon>
            </Wrapper>
          )}
        </RTicker>
      </TickerWrapper>
    </Delayed>
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
  white-space: nowrap;

  /* width: auto; */
  /* display: grid; */
`

const TickerWrapper = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  bottom: 6%;
  width: 100vw;

  display: grid;
  background-color: #000;
`

export default Ticker
