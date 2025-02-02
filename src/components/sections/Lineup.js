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
        <LineupSection>
          <Item>
            <LinkInline href="https://soundcloud.com/0203983a" target="_blank">
              <Artist>0203983A</Artist>
              <Neu>live</Neu>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/akvilina" target="_blank">
              <Artist>Akvilina</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/ameliaholt"
              target="_blank"
            >
              <Artist>Amelia Holt</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/andrea_ida"
              target="_blank"
            >
              <Artist>Andrea Ida</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/research_wax"
              target="_blank"
            >
              <Artist>BalTribe</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/freybenedikt"
              target="_blank"
            >
              <Artist>Benedikt Frey</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://www.discogs.com/artist/8706025-C3D-E"
              target="_blank"
            >
              <Artist>C3D-E</Artist>
              <Neu>live</Neu>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <Artist>Der Haken</Artist>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/diamantegrafito"
              target="_blank"
            >
              <Artist>Diamin</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/ebhardy" target="_blank">
              <Artist>DJ Ebhardy</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/hybris-dj" target="_blank">
              <Artist>DJ Hybris</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/elise-guillaut-991125437"
              target="_blank"
            >
              <Artist>Elisethere</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/gioelia" target="_blank">
              <Artist>Gio Elia</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/el-em-ka-be"
              target="_blank"
            >
              <Artist>grossvater</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/isolatedmaterial"
              target="_blank"
            >
              <Artist>Isolated Material</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/user-94998257"
              target="_blank"
            >
              <Artist>jess_whereyouat</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/kosmas-dinh"
              target="_blank"
            >
              <Artist>Kosmas Ðinh</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/soundsoflowki"
              target="_blank"
            >
              <Artist>low Ki</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/lysfinke" target="_blank">
              <Artist>Lys Finke</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/aemaenda" target="_blank">
              <Artist>MAENDI</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/marklando" target="_blank">
              <Artist>Mark Lando</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/menqui" target="_blank">
              <Artist>Menqui</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://www.instagram.com/_mitra__mitra_/"
              target="_blank"
            >
              <Artist>Mitra</Artist>
              <Neu>live</Neu>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/montage-impuls"
              target="_blank"
            >
              <Artist>Montage</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/pasci-hi" target="_blank">
              <Artist>pasci</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/bisamapfel"
              target="_blank"
            >
              <Artist>pomander</Artist>
              <Neu>live</Neu>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/vulxr" target="_blank">
              <Artist>Riin</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/sarmabot" target="_blank">
              <Artist>Sarmabot</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://soundcloud.com/schnucki47"
              target="_blank"
            >
              <Artist>schnucki47</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://www.instagram.com/404_spacebar/"
              target="_blank"
            >
              <Artist>Spacebar 404</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/tx_4" target="_blank">
              <Artist>T4X</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/mpdt14" target="_blank">
              <Artist>Unter Welten</Artist>
              <Neu>live</Neu>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline href="https://soundcloud.com/yugo_zen" target="_blank">
              <Artist>Yugo</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          <Item>
            <LinkInline
              href="https://www.instagram.com/kantarion.sound/"
              target="_blank"
            >
              <Powered>Powered by </Powered>
              <Artist>Kantarion Sound</Artist>
            </LinkInline>
            {/* <Icon src="/icons/StarYellow.svg"></Icon> */}
          </Item>

          {/* <PlaylistSection>
            <PlaylistLeft>
              <Link
                to="https://soundcloud.com/kleinundhaarig/sets/rec-2023?si=acafd5203abe4d498691752a57a3ac87&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                target="_blank"
              >
                <FormButtonSmall label="Recordings 2023" />
              </Link>
            </PlaylistLeft>
            <PlaylistRight />
          </PlaylistSection> */}
        </LineupSection>

        {/* <TickerBottom>
            <TickerInline />
          </TickerBottom> */}

        {/* <Header>Lineup 2022</Header> */}
        {/* </HoverGroup> */}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 0px;
  text-align: center;

  /* position: relative; */
  /* background-image: url(${Artwork}); */
  /* background-size: cover; */
`

const Container = styled.div`
  /* display: grid;
  justify-items: center; */
  /* width: 100%; */
  /* position: relative; */

  /* z-index: 99; */
  background-color: none;
  /* overflow: hidden; */
  color: white;
  padding: 10px 0px;
`

const LineupSection = styled.div`
  display: inline-block;
  overflow: hidden;
  justify-items: center;

  /* justify-content: center; */
  /* align-items: center; */
  /* position: relative; */
  /* justify-items: center; */
  padding: 40px 40px 200px 40px;
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
    transform: scale(1.02);
    transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  :hover {
    /* transform: scale(1.02); */
    /* cursor: pointer; */
    /* transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1); */
  }
`

const Item = styled.div`
  display: inline-block;
  margin-bottom: 0px;
  position: relative;
  margin-left: 8px;
  margin-right: 8px;
  text-shadow: 4px 4px 40px rgba(0, 0, 0, 0.7);

  @media (max-width: 800px) {
    text-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  }

  /* overflow: hidden; */
  /* @media (max-width: 1100px) {
    display: block;
  } */

  /* @media (max-width: 800px) {
    display: inline-block;
  }
  @media (max-width: 450px) {
    display: block;
  } */
`

const Artist = styled(HeadlineRegular)`
  /* font-family: "Ke"; */
  color: #f0f263;

  /* -webkit-text-stroke: 2px black; */
  float: left;

  /* margin-right: 16px; */
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
  margin-left: 0px;
  /* margin-top: 3px; */
  /* position: absolute; */
  color: #f0f263;
  /* text-transform: uppercase; */
`

const Powered = styled(ImageDescription)`
  margin-left: 0px;
  /* margin-top: 3px; */
  /* position: absolute; */
  color: #f0f263;
  /* text-transform: uppercase; */
`
