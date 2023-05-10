import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FaceGrafik from "../../../static/images/Face.png"
import RingLineup from "../buttons/RingLineup"
import { animated } from "react-spring"
import { use3dEffect } from "use-3d-effect"

import {
  // PageHeader,
  TextSmall,
  ImageDescription,
  HeadlineRegular,
  HeadlineRegular2,
} from "../styles/TextStyles"
import TickerInline from "../ticker/TickerInline"

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
        <TickerTop>
          <TickerInline />
        </TickerTop>

        <HoverGroup
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          {/* <Header>Lineup 2022</Header> */}
          <Header></Header>
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
          <LineupSection>
            <Item>
              <LinkInline
                href=" https://soundcloud.com/700wet-751845521"
                target="_blank"
              >
                <Artist>700WET</Artist>

                <Neu>live</Neu>
              </LinkInline>
              <Icon src="/icons/StarBlack.svg"></Icon>
            </Item>
            <Item>
              <LinkInline href="https://soundcloud.com/ainodj" target="_blank">
                {" "}
                <Artist>Aino DJ</Artist>
              </LinkInline>
              <Icon src="/icons/StarBlack.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://soundcloud.com/ae-ida" target="_blank">
                {" "}
                <Artist>Andrea Ida</Artist>
              </LinkInline>
              <Icon src="/icons/StarBlack.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://www.instagram.com/av.archv/?hl=de"
                target="_blank"
              >
                {" "}
                <Artist>av.archv</Artist>
                <Neu>live</Neu>
              </LinkInline>
              <Icon src="/icons/StarBlack.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/bleepgeeks"
                target="_blank"
              >
                {" "}
                <Artist>Bleepgeeks</Artist>
              </LinkInline>
              <Icon src="/icons/StarBlack.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://www.instagram.com/cancelled__party/"
                target="_blank"
              >
                {" "}
                <Artist>Cancelled</Artist>
                <Neu>crew</Neu>
              </LinkInline>
              <Icon src="/icons/StarBlack.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/candypollard"
                target="_blank"
              >
                {" "}
                <Artist>Candy Pollard</Artist>
              </LinkInline>
              <Icon src="/icons/StarBlack.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/ciao_ciao"
                target="_blank"
              >
                {" "}
                <Artist>Ciao Ciao</Artist>
              </LinkInline>
              <Icon src="/icons/StarBlack.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/deejayfeelx"
                target="_blank"
              >
                {" "}
                <Artist>FEEL X</Artist>
              </LinkInline>
              <Icon src="/icons/StarBlack.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://soundcloud.com/janloup" target="_blank">
                {" "}
                <Artist>Jan Loup</Artist>
              </LinkInline>
              <Icon src="/icons/StarBlack.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/lyschenfinkorum"
                target="_blank"
              >
                {" "}
                <Artist>Lyschen Finkorum</Artist>
              </LinkInline>
              <Icon src="/icons/StarBlack.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://sondumaquis.net/" target="_blank">
                {" "}
                <Artist>Maquis Son Sistèm</Artist>
                <Neu>live</Neu>
              </LinkInline>
              <Icon src="/icons/StarBlack.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/supersoundglobal"
                target="_blank"
              >
                {" "}
                <Artist>Super Sound Global</Artist>
                <Neu>crew</Neu>
              </LinkInline>
            </Item>
          </LineupSection>

          <TickerBottom>
            <TickerInline />
          </TickerBottom>

          {/* <Header>Lineup 2022</Header> */}
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
  z-index: 0;

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
  margin-bottom: 0px;

  position: relative;
`

const Container = styled.div`
  /* width: 100%; */
  position: relative;
  /* z-index: 99; */
  background-color: none;
  /* overflow: hidden; */
  color: white;
  padding: 10px 0px;
`

const HoverGroup = styled.div``

const Header = styled(TextSmall)`
  font-family: "GT-Alpina-Extended-Regular";
  color: black;
  opacity: 0.75;
  margin-bottom: 40px;
`

const TickerTop = styled.div`
  top: 0px;
  position: absolute;
`

const TickerBottom = styled.div`
  bottom: 0px;
  position: absolute;
`

const LineupSection = styled.div`
  /* display: inline; */
  /* position: relative; */
  padding: 200px 20px 200px 20px;
  @media (max-width: 800px) {
    padding: 125px 10px 125px 10px;
  }
`
const LinkInline = styled.a`
  /* display: inline; */

  & > :hover {
    cursor: pointer;
  }
  :hover {
    opacity: 0.6;
  }
`

const Item = styled.div`
  display: inline-block;
  margin-bottom: 8px;
  position: relative;
  overflow: hidden;
  @media (max-width: 800px) {
    display: block;
  }
  /* @media (max-width: 800px) {
    display: inline-block;
  }
  @media (max-width: 450px) {
    display: block;
  } */
`

const Artist = styled(HeadlineRegular)`
  color: black;
  float: left;
  /* @media (max-width: 800px) {
    float: none;
  } */
  /* @media (max-width: 800px) {
    float: left;
  }
  @media (max-width: 450px) {
    float: left;
  } */
`

const Icon = styled.img`
  margin: 10px 16px 0 16px;
  width: 24px;
  height: 24px;
  float: left;

  @media (max-width: 800px) {
    display: none;
  }

  /* @media (max-width: 800px) {
    display: inline-block;
    margin: 12px 8px 0 8px;
    width: 16px;
    height: 16px;
  }

  @media (max-width: 450px) {
    display: none;
  } */
`
const IconLast = styled.img`
  margin: 10px 16px 0 16px;
  width: 24px;
  height: 24px;
  opacity: 0;

  /* @media (max-width: 800px) {
    margin: 12px 8px 0 8px;
    width: 16px;
    height: 16px;
  } */
`

const LiveArtist = styled.div`
  /* display: grid; */
`

const Up = styled.div``

const Neu = styled(ImageDescription)`
  display: inline;
  float: left;
  font-family: "Inter";
  margin-left: 8px;
  /* position: absolute; */
  color: black;
  text-transform: uppercase;
`
