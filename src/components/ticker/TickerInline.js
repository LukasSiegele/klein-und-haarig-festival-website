import React, { useState, useEffect } from "react"
import { TextSmall } from "../styles/TextStyles"
import RTicker from "react-ticker"
import styled from "styled-components"

import Delayed from "./useTickerDelay"

import "./Ticker.css"

// Ticker Component
const TickerInline = () => {
  return (
    <Delayed>
      <TickerMask>
        <TickerWrapper>
          <RTicker speed={12}>
            {({ index }) => (
              <Wrapper>
                <TickerTextSmall>Lineup 2024</TickerTextSmall>
                <Icon src="/icons/banner-star-white.svg"></Icon>
              </Wrapper>
            )}
          </RTicker>
        </TickerWrapper>
      </TickerMask>
    </Delayed>
  )
}

const TickerTextSmall = styled(TextSmall)`
  color: white;
  margin: 0px 8px 0px 8px;
`

const LinkInline = styled.a`
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255);
`

const Icon = styled.img`
  margin: 0px 16px 0px 16px;
  width: 16px;
  height: 16px;
  align-self: center;
`

const Wrapper = styled.div`
  /* display: flex; */

  align-self: center;
  display: grid;
  grid-template-columns: auto 1fr;
  white-space: nowrap;
  padding: -10px;

  /* width: auto; */
  /* display: grid; */
`

const TickerMask = styled.div`
  /* display: grid;
  align-content: center; */
  /* padding: 20px 0; */

  /* overflow: hidden; */
`

const TickerWrapper = styled.div`
  /* z-index: 999; */
  left: 0;
  width: 100vw;

  display: grid;
  background-color: none;
  padding: 10px 0;
  /* background-color: #ff003a; */

  animation: TickerAnimation 3.3s 0s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
  opacity: 0;

  @keyframes TickerAnimation {
    0% {
      opacity: 0;
      max-height: 0;
      /* transform: translateX(25vw); */
    }

    100% {
      opacity: 1;
      max-height: 200px;
      /* transform: translateX(0px); */
    }
  }
`

export default TickerInline
