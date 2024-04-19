import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FaceGrafik from "../../../static/images/Face.png"
import RingLineup from "../buttons/RingLineup"
import { animated } from "react-spring"
import { use3dEffect } from "use-3d-effect"

import Artwork from "../../../static/images/HeroArtwork2024Lineup.jpg"

import {
  TextSmall,
  ImageDescription,
  HeadlineRegular,
} from "../styles/TextStyles"
import TickerInline from "../ticker/TickerInline"
import FormButton from "../buttons/FormButton"
import { Link } from "gatsby"
import FormButtonSmall from "../buttons/FormButtonSmall"

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
                href=" https://soundcloud.com/0203983a"
                target="_blank"
              >
                <Artist>0203983A </Artist>

                <Neu>live</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/adalovvve"
                target="_blank"
              >
                <Artist>Ada Luvv</Artist>
              </LinkInline>
              <Backtoback> b2b</Backtoback>
              <LinkInline
                href=" https://soundcloud.com/soundsoflowki"
                target="_blank"
              >
                <Artist>low Ki</Artist>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            {/* <Item>
              <LinkInline
                href="https://soundcloud.com/airatoulouse"
                target="_blank"
              >
                {" "}
                <Artist>Aïra</Artist>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item> */}

            <Item>
              <LinkInline href="https://soundcloud.com/ae-ida" target="_blank">
                <Artist>Andrea Ida</Artist>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/freybenedikt"
                target="_blank"
              >
                {" "}
                <Artist>Benedikt Frey</Artist>
                <Neu>R.i.O.</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/candypollard"
                target="_blank"
              >
                <Artist>Candy Pollard </Artist>
              </LinkInline>
              <Backtoback> b2b</Backtoback>
              <LinkInline
                href=" https://soundcloud.com/ciao_ciao"
                target="_blank"
              >
                <Artist>Ciao Ciao</Artist>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/c-comberti"
                target="_blank"
              >
                {" "}
                <Artist>C. Comberti</Artist>
                <Neu>live</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/der_letzte_dutt"
                target="_blank"
              >
                {" "}
                <Artist>Der letzte Dutt</Artist>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://soundcloud.com/ebhardy" target="_blank">
                {" "}
                <Artist>DJ ebhardy</Artist>
                <Neu>live</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/frinda_di_lanco"
                target="_blank"
              >
                {" "}
                <Artist>Frinda di Lanco</Artist>
              </LinkInline>
              <Backtoback> b2b</Backtoback>
              <LinkInline
                href=" https://soundcloud.com/hendrik_stein"
                target="_blank"
              >
                <Artist>Hendrik Stein</Artist>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/laf-musik"
                target="_blank"
              >
                {" "}
                <Artist>Lux Lauterwasser</Artist>
              </LinkInline>
              <Backtoback>b2b</Backtoback>
              <LinkInline
                href=" https://soundcloud.com/herrdobler"
                target="_blank"
              >
                <Artist>Herr Dobler</Artist>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://soundcloud.com/janloup" target="_blank">
                {" "}
                <Artist>Jan Loup</Artist>
                <Neu>Aïra</Neu>
              </LinkInline>
              <Backtoback> b2b</Backtoback>
              <LinkInline
                href=" https://soundcloud.com/wckdwsb"
                target="_blank"
              >
                <Artist>Melocoton</Artist>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/kessel-vale"
                target="_blank"
              >
                {" "}
                <Artist>Kessel Vale</Artist>
                <Neu>Cancelled Crew</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://soundcloud.com/kiawash" target="_blank">
                {" "}
                <Artist>Kiawash</Artist>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://soundcloud.com/amlia" target="_blank">
                {" "}
                <Artist>Laima Adelaide</Artist>
              </LinkInline>
              <Backtoback> &nbsp;&&nbsp;</Backtoback>
              <LinkInline href=" https://soundcloud.com/edte-1" target="_blank">
                <Artist>Nils Edte</Artist>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/lara-kobayashi-maru"
                target="_blank"
              >
                {" "}
                <Artist>Lara Fein</Artist>
                <Neu>Cancelled Crew</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/lysfinke"
                target="_blank"
              >
                {" "}
                <Artist>Lys Finke</Artist>
              </LinkInline>
              <Backtoback>b2b</Backtoback>
              <LinkInline
                href=" https://soundcloud.com/kheymysterio"
                target="_blank"
              >
                <Artist>Khey Mysterio</Artist>
                <Neu>Aïra</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://sondumaquis.net/" target="_blank">
                {" "}
                <Artist>Maquis Son Sistèm</Artist>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://soundcloud.com/menqui" target="_blank">
                {" "}
                <Artist>Menqui</Artist>
                <Neu>R.i.O.</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/mtrl_audio"
                target="_blank"
              >
                {" "}
                <Artist>Mitra</Artist>
                <Neu>live</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/olgica-peri"
                target="_blank"
              >
                {" "}
                <Artist>Olgica</Artist>
                <Neu>Cancelled Crew</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/paulsenlinke"
                target="_blank"
              >
                {" "}
                <Artist>Paul Linke</Artist>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/general-intellect/pomander-wasabipatch"
                target="_blank"
              >
                {" "}
                <Artist>Pomander</Artist>
                <Neu>live</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/sarmabot"
                target="_blank"
              >
                {" "}
                <Artist>Sarmabot</Artist>
                <Neu>Cancelled Crew</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/smittness"
                target="_blank"
              >
                {" "}
                <Artist>Smittness</Artist>
                <Neu>live</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline href="https://soundcloud.com/u-r-s" target="_blank">
                {" "}
                <Artist>U-R-S</Artist>
                <Neu>R.i.O.</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/airatoulouse"
                target="_blank"
              >
                {" "}
                <Artist>UNDER/STANDING</Artist>
                <Neu>Aïra</Neu>
              </LinkInline>
              <Icon src="/icons/StarWhite.svg"></Icon>
            </Item>

            <Item>
              <LinkInline
                href="https://soundcloud.com/yeaahlena"
                target="_blank"
              >
                {" "}
                <Artist>yeahlena</Artist>
              </LinkInline>
              {/* <Icon src="/icons/StarWhite.svg"></Icon> */}
            </Item>

            <PlaylistSection>
              <PlaylistLeft>
                <Link
                  to="https://soundcloud.com/kleinundhaarig/sets/rec-2023?si=acafd5203abe4d498691752a57a3ac87&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  target="_blank"
                >
                  <FormButtonSmall label="Recordings 2023" />
                </Link>
              </PlaylistLeft>
              <PlaylistRight />
            </PlaylistSection>
          </LineupSection>

          {/* <TickerBottom>
            <TickerInline />
          </TickerBottom> */}

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
  background-image: url(${Artwork});
  background-size: cover;
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
  color: white;
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

const PlaylistSection = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 80px;
  z-index: 999;
`
const PlaylistLeft = styled.div``
const PlaylistRight = styled.div``

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
  /* @media (max-width: 800px) {
    display: inline-block;
  }
  @media (max-width: 450px) {
    display: block;
  } */
`

const Artist = styled(HeadlineRegular)`
  font-family: "Ginto";
  color: white;
  float: left;
`
const Backtoback = styled(ImageDescription)`
  display: inline;
  float: left;
  /* font-family: "Inter"; */
  margin-top: 1.3em;
  /* position: absolute; */
  color: white;
  /* text-transform: uppercase; */

  @media (max-width: 800px) {
    margin-top: 0.7em;
  }
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
  /* font-family: "Inter"; */
  margin-left: 4px;
  margin-top: 3px;
  /* position: absolute; */
  color: white;
  /* text-transform: uppercase; */
`
