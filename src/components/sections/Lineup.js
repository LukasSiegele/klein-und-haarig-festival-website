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
          {/* <Header>Lineup</Header> */}
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
              <Artist>16palomas</Artist>
              <Neu>live</Neu>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <LinkInline href="https://soundcloud.com/agyena" target="_blank">
                {" "}
                <Artist>AGY3NA</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/anjana-bbb"
                target="_blank"
              >
                <Artist>Anjana</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://soundcloud.com/ssg-b_e" target="_blank">
                <Artist>Balearic Eric</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/bleepgeeks"
                target="_blank"
              >
                <Artist>Bleepgeeks</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/pinkfatbuddha"
                target="_blank"
              >
                <Artist>Chaos Angel</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/schuh_schuh"
                target="_blank"
              >
                <Artist>chewchew</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/cristalyne"
                target="_blank"
              >
                <Artist>Cristalyne</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <LinkInline
                href="https://soundcloud.com/deejayfeelxx"
                target="_blank"
              >
                <Artist>FEEL X</Artist>
                <Icon src="/icons/StarYellow.svg"></Icon>
              </LinkInline>
            </Item>

            <Item>
              <LinkInline href="https://soundcloud.com/frdnnd" target="_blank">
                <Artist>Ferdinand Domes</Artist>
                <Neu>live</Neu>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://soundcloud.com/ghsttwn" target="_blank">
                <Artist>Ghosttown</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/jannischoppin"
                target="_blank"
              >
                <Artist>Jannis Choppin</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/nils-moritz-766797471"
                target="_blank"
              >
                <Artist>Kalut</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/kia-sydney"
                target="_blank"
              >
                <Artist>Kia</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://soundcloud.com/kiawash" target="_blank">
                <Artist>Kiawash</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/laf-musik"
                target="_blank"
              >
                <Artist>LAF</Artist>
              </LinkInline>
              <Artist>+</Artist>
              <LinkInline
                href="https://soundcloud.com/orbital_reflector/sets/forum"
                target="_blank"
              >
                <Artist>FORUM</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <Artist>Lu Copper</Artist>

              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/lucievuittong"
                target="_blank"
              >
                <Artist>Lucie Vuittong</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://soundcloud.com/luedj" target="_blank">
                <Artist>luedj</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/kanapee-nordwand"
                target="_blank"
              >
                <Artist>Max Langer</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/minaeminae"
                target="_blank"
              >
                <Artist>minäminä</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <Artist>nåmuh</Artist>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <LinkInline
                href="https://soundcloud.com/nina-gohl"
                target="_blank"
              >
                <Artist>Nin</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <Artist>SAT 70</Artist>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <LinkInline
                href="https://soundcloud.com/schnapolitur3000"
                target="_blank"
              >
                <Artist>Schnapolitur 3000</Artist>
                <Neu>live</Neu>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/selinselinselinselin"
                target="_blank"
              >
                <Artist>Selin</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <LinkInline
                href="https://soundcloud.com/shannon_felicitas"
                target="_blank"
              >
                <Artist>Shannon</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
            <Item>
              <LinkInline
                href="https://soundcloud.com/sophiepschorr"
                target="_blank"
              >
                <Artist>Sophie Pschorr</Artist>
              </LinkInline>
              <Icon src="/icons/StarYellow.svg"></Icon>
            </Item>
          </LineupSection>
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
  position: relative;
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
    float: left;
  }
`

const Icon = styled.img`
  margin: 20px 16px 0 16px;
  width: 24px;
  height: 24px;
  float: left;

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
