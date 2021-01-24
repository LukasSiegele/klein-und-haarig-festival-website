import React from "react"
import styled from "styled-components"

export default function Message() {
  return (
    <MessageContainer>
      <MessageWrapper>
        <MessageText>
          Ein kleines Festival im Schwarzwald organisiert von ein paar Freunden
          aus Liebe zur elektronischen Musik und zur Natur.
        </MessageText>
        <MessageLink
          href="https://soundcloud.com/kleinundhaarig"
          target="_blank"
        >
          Das war 2020
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
`
