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
                {/* <TickerText className="tickerText">
                  Weitere Infos auf{" "}
                  <LinkInline
                    href="https://instagram.com/kleinundhaarig?igshid=YmMyMTA2M2Y="
                    target="_blank"
                  >
                    Instagram
                  </LinkInline>{" "}
                  &{" "}
                  <LinkInline
                    href="https://soundcloud.com/kleinundhaarig?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    target="_blank"
                  >
                    Soundcloud
                  </LinkInline>
                </TickerText> */}
                {/* <TickerText className="tickerText">Infrastruktur</TickerText>
                <Icon src="/icons/banner-star.svg"></Icon>
                <TickerText className="tickerText">Verpflegung</TickerText>
                <Icon src="/icons/banner-star.svg"></Icon>
                <TickerText className="tickerText">
                  Veranstaltungstechnik
                </TickerText>
                <Icon src="/icons/banner-star.svg"></Icon>
                <TickerText className="tickerText">
                  Wir suchen dringend Unterstützung für
                </TickerText>
                 */}
                <Icon src="/icons/banner-star.svg"></Icon>
                <TickerText className="tickerText">Presale is on!</TickerText>

                {/* <TickerText className="tickerText">
                  Aktuell sind keine Zahlungen möglich. Wir haben ein Problem
                  mit Paypal, sind aber an der Lösung dran. Danke für dein
                  Verständnis & Geduld.
                </TickerText> */}

                {/* <TickerText className="tickerText">
                  Schreib uns
                  <LinkInline
                    href="mailto:info@kleinundhaarig.de"
                    target="_blank"
                  >
                    inf0@kleinundhaarig.de
                  </LinkInline>
                </TickerText> */}
              </Wrapper>
            )}
          </RTicker>
        </TickerWrapper>
      </TickerMask>
    </Delayed>
  )
}

const LinkInline = styled.a`
  border-bottom: 1px solid rgba(255, 255, 255);
`

const Icon = styled.img`
  margin: 0px 16px 0px 16px;
  width: 24px;
  height: 24px;
  align-self: center;
`

const Wrapper = styled.div`
  /* display: flex; */

  align-self: center;
  display: grid;
  grid-template-columns: 1fr auto;
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
  background-color: #000;
  padding: 5px 0;
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

export default Ticker
