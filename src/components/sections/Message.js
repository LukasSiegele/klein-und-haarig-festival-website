import React from "react"
import styled from "styled-components"

export default function Message() {
  return (
    <MessageContainer>
      <MessageWrapper>
        <MessageText>
          Ein kleines <Liebe>Festival</Liebe> im Schwarzwald organisiert von
          Freunden aus Liebe zur <Liebe>elektronischen Musik</Liebe> und zur{" "}
          <Liebe>Natur</Liebe>.
        </MessageText>
        <MessageLink
          href="https://soundcloud.com/kleinundhaarig"
          target="_blank"
        >
          <Icon>
            <img src={require("/static/icons/soundcloud.svg")} width="24" />
          </Icon>
          <LinkText>Das war 2020</LinkText>
        </MessageLink>
      </MessageWrapper>
    </MessageContainer>
  )
}

const MessageContainer = styled.div`
  padding: 200px 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  overflow: hidden;
  color: white;

  @media (max-width: 768px) {
    padding: 150px 0;
  }
`

const MessageWrapper = styled.div`
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
`

const Icon = styled.div`
  margin-top: 1px;
`

const LinkText = styled.h4``

const Liebe = styled.span`
  font-family: "GT-Alpina-Fine-Light-Italic";
`
