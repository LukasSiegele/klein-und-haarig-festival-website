import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FaceGrafik from "../../../static/images/Face.png"
import RingLineup from "../buttons/RingLineup"
import { animated } from "react-spring"
import { use3dEffect } from "use-3d-effect"

import {
  // PageHeader,
  TextSmall,
  // ImageDescription,
  HeadlineRegular,
  HeadlineRegular2,
} from "../styles/TextStyles"

export default function Lineup() {
  const [l1, setl1] = useState(0)
  const [l2, setl2] = useState(0)
  const [l3, setl3] = useState(0)
  const [l4, setl4] = useState(0)
  const [l5, setl5] = useState(0)
  const [l6, setl6] = useState(0)
  const [h1, setH1] = useState(50)

  const mouseEnterHandler = () => {
    setl1(Math.floor(Math.random() * 50))
    setl2(Math.floor(Math.random() * 100))
    setl3(Math.floor(Math.random() * 200))
    setl4(Math.floor(Math.random() * -100))
    setl5(Math.floor(Math.random() * -175))
    setl6(Math.floor(Math.random() * -350))
    setH1(300)
  }
  const mouseLeaveHandler = () => {
    setl1(0)
    setl2(0)
    setl3(0)
    setl4(0)
    setl5(0)
    setl6(0)
    setH1(50)
  }

  const ref = React.useRef(null)
  const { style, ...mouseHandlers } = use3dEffect(ref)

  return (
    <Wrapper>
      <Container>
        <HoverGroup
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Header>Lineup [in progress]</Header>
          <LineupSection>
            <Item>
              <Artist>AGY3NA</Artist>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <Artist>Chaos Angel</Artist>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <Artist>ChewChew</Artist>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <Artist>Cristalyne</Artist>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <Artist>Ghosttown</Artist>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <Artist>Lucie Vuittong</Artist>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <Artist>Schnapolitur 3000</Artist>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <Artist>Selin</Artist>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <Artist>Sophie Pschorr</Artist>
              <IconLast src="/icons/StarYellow.svg"></IconLast>
            </Item>
          </LineupSection>
          <RingGroup>
            {/* <animated.div
            ref={ref}
            style={{
              ...style,
            }}
            {...mouseHandlers}
          > */}
            <RingLineup top={l1} h={h1}></RingLineup>
            <RingLineup top={l2} h={h1}></RingLineup>
            <RingLineup top={l3} h={h1}></RingLineup>
            <RingLineup top={l4} h={h1}></RingLineup>
            <RingLineup top={l5} h={h1}></RingLineup>
            <RingLineup top={l6} h={h1}></RingLineup>
            {/* </animated.div> */}
          </RingGroup>
        </HoverGroup>
      </Container>
    </Wrapper>
  )
}

const RingGroup = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  justify-items: center;
  gap: 0px;
  position: absolute;
  left: 50%;
  top: 36%;
  transform: translate(-50%, 0);
  z-index: 100;

  @media (max-width: 800px) {
    display: none;
  }
`

const Ring = styled.div`
  width: 80vw;
  height: 120px;
  border: 1px solid black;
  border-radius: 50%;
  margin-bottom: -200px;
`

const Wrapper = styled.div`
  padding: 120px 60px 120px 60px;
  @media (max-width: 800px) {
    padding: 60px 20px 60px 20px;
  }
  position: relative;
`

const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 99;
  background-color: none;
  /* overflow: hidden; */
  color: white;
`

const HoverGroup = styled.div``

const Header = styled(TextSmall)`
  font-family: "GT-Alpina-Extended-Regular";
  /* font-family: "Inter"; */
  /* font-weight: 600; */
  color: black;
  opacity: 0.75;
  /* text-transform: uppercase; */
  margin-bottom: 40px;
`

const LineupSection = styled.div`
  /* display: inline; */
`

const Item = styled.div`
  display: inline-block;
  margin-bottom: 8px;
  @media (max-width: 1100px) {
    display: block;
  }
  @media (max-width: 800px) {
    display: inline-block;
  }
  @media (max-width: 450px) {
    display: block;
  }
`

const Artist = styled(HeadlineRegular)`
  color: black;
  float: left;
  @media (max-width: 1100px) {
    float: none;
  }
  @media (max-width: 800px) {
    float: left;
  }
  @media (max-width: 450px) {
    float: none;
  }
`

const Icon = styled.img`
  margin: 20px 16px 0 16px;
  width: 24px;
  height: 24px;

  @media (max-width: 1100px) {
    display: none;
  }

  @media (max-width: 800px) {
    display: inline-block;
    margin: 8px 8px 0 8px;
    width: 16px;
    height: 16px;
  }

  @media (max-width: 450px) {
    display: none;
  }
`
const IconLast = styled.img`
  margin: 20px 16px 0 16px;
  width: 24px;
  height: 24px;
  opacity: 0;

  @media (max-width: 800px) {
    margin: 8px 8px 0 8px;
    width: 16px;
    height: 16px;
  }
`