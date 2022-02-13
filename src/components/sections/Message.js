import React from "react"
import styled from "styled-components"

export default function Message() {
  return (
    <Container>
      <Wrapper>
        <MessageText>
          Ein kleines <Liebe>musikalisches Festival</Liebe> im Schwarzwald
          organisiert von Freunden <Break />
          aus Liebe zur <Liebe>elektronischen Musik</Liebe> und
          <Liebe> Natur</Liebe>.
        </MessageText>
        <MessageLink
          href="https://soundcloud.com/kleinundhaarig/sets/s2021"
          target="_blank"
        >
          <Icon>
            <img src={require("/static/icons/soundcloud.svg")} width="24" />
          </Icon>
          <LinkText>Das war 2021</LinkText>
        </MessageLink>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  padding: 200px 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  color: white;

  @media (max-width: 768px) {
    padding: 150px 0;
  }
`

const Wrapper = styled.div`
  max-width: 1100px;
  align-self: center;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  padding: 0 40px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 20px;
  }
`

const MessageText = styled.h2`
  margin-bottom: 60px;
  text-align: center;
  color: white;
`

const MessageLink = styled.a`
  text-align: center;
  padding-bottom: 5 px;
  border-bottom: 1px solid white;
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;

  & > :hover {
    cursor: pointer;
  }
`

const Icon = styled.div`
  margin-top: 1px;
`

const LinkText = styled.h4``

const Liebe = styled.span`
  font-family: "GT-Alpina-Fine-Light-Italic";
`

const Break = styled.span`
  @media (max-width: 700px) {
    display: block;
  }
`
