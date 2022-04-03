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
      <TickerMask>
        <TickerWrapper
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <RTicker speed={6} move={isMoving}>
            {({ index }) => (
              <Wrapper>
                <TickerText className="tickerText">
                  Sorry, der Ticketverkauf verschiebt sich leider wegen
                  technischen Problemen.
                </TickerText>
                <Icon src="/icons/banner-star.svg"></Icon>
              </Wrapper>
            )}
          </RTicker>
        </TickerWrapper>
      </TickerMask>
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

const TickerMask = styled.div`
  display: block;
  overflow: hidden;
`

const TickerWrapper = styled.div`
  z-index: 999;
  position: fixed;
  left: 0;
  bottom: 6%;
  width: 100vw;

  display: grid;
  background-color: #000;

  animation: TickerAnimation 1.3s 1s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  @keyframes TickerAnimation {
    0% {
      opacity: 0;
      transform: translateX(25vw);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`

export default Ticker
