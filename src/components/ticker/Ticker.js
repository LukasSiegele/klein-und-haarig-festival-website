import React, {useState} from "react"
import {TickerText} from "../styles/TextStyles"
import RTicker from 'react-ticker'
import styled from 'styled-components'
import { themes } from "../styles/ColorStyles"

import './Ticker.css'
const Ticker = () => {
    const [isMoving , setIsMoving] = useState(true)

    const mouseEnterHandler = () => {
        setIsMoving(false);
    }

    const mouseLeaveHandler = () => {
        setIsMoving(true);
    }

    return(
        <TickerWrapper onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >

        <RTicker speed={6} move={isMoving} >
        {({ index }) => (
            <Wrapper>
                <TickerText className="tickerText" >Ticketverkauf startet am 15. März!</TickerText>
                <Icon src="/icons/banner-star.svg" ></Icon>
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
    display: flex;
`

const TickerWrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #000
`

export default Ticker