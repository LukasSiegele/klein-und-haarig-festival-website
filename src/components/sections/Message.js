import React from "react"
import styled from "styled-components"

export default function Message() {
  return (
    <Container>
      <Wrapper>
        <MessageText>
          Ein kleines <Liebe>Festival</Liebe> <Break /> 
          im Schwarzwald, organisiert von Freunden aus Liebe <Break /> 
          zur <Liebe>elektronischen Musik</Liebe> und
          <Liebe> Natur</Liebe>.
        </MessageText>
        <MessageLink
          href="https://soundcloud.com/kleinundhaarig"
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
  width: 100%;
  height: 0%;
  display: grid;
  grid-template-columns: 1fr;
  background-color: none;
  overflow: hidden;
  color: white;

  @media (max-width: 768px) {
    padding: 167px 0;
    margin-bottom: 400px;
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
  text-align: left;
  color: black;
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

// Soundcloud Icon (Inverted Color)
const Icon = styled.div`
  margin-top: 1px;
  -webkit-filter: invert(100%);
  filter: invert(100%);
`

const LinkText = styled.h4`
  color: black;
  text-decoration: none;
`

const Liebe = styled.span`
  font-family: "GT-Alpina-Extended-Regular";
`

const Break = styled.span`
  @media (max-width: 700px) {
    display: block;
  }
`
