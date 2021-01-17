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
  /* height: 1000px; */
  padding: 200px 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  /*background-color: black;
    background: radial-gradient(circle at 70% 150px, rgba(3,250,129,1) 0%, rgba(107,35,178,1) 5%, rgba(0,0,0,1) 10%);*/
  background-color: black;
  /* background: radial-gradient(
    circle at 65% 200px,
    rgba(251, 119, 22, 1) 0%,
    rgba(211, 11, 11, 1) 5%,
    rgba(0, 0, 0, 1) 10%
  ); */
  overflow: hidden;
  color: white;

  /* @media (max-width: 640px) {
    background: radial-gradient(
      circle at 50% 30%,
      rgba(251, 119, 22, 1) 0%,
      rgba(211, 11, 11, 1) 15%,
      rgba(0, 0, 0, 1) 25%
    );
  } */
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