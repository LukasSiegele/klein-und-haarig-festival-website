import React from "react"
import styled from "styled-components"
import Stairway from "../../../static/images/image-01.jpg"
import Smoke from "../../../static/images/image-02.jpg"
import Night from "../../../static/images/image-03.jpg"

export default function ImageSection() {
  return (
    <Container>
      <Content>
        <Image01></Image01>
        <Image02></Image02>
        <Image03></Image03>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  background-color: black;
  max-width: 1700px;
  overflow: hidden;
  position: relative;
  padding: 200px 0;
  @media (max-width: 768px) {
    padding: 150px 0;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 100px;
`

const Image01 = styled.div`
  background-image: url(${Stairway});
  width: 445px;
  height: 667px;
  justify-self: right;
  margin-right: 20%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    margin-right: 0%;
    background-size: cover;
    width: 90%;
    height: 420px;
  }
`

const Image02 = styled.div`
  background-image: url(${Smoke});
  width: 284px;
  height: 437px;
  justify-self: left;
  margin-left: 20%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    margin-left: 0%;
  }
`

const Image03 = styled.div`
  background-image: url(${Night});
  width: 648px;
  height: 432px;
  justify-self: right;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 768px) {
    justify-self: center;
    width: 100%;
  }
`
