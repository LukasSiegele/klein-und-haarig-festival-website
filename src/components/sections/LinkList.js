import React from "react"
import styled from "styled-components"

import {
  // PageHeader,
  TextSmall,
  // ImageDescription,
  HeadlineRegular,
  HeadlineRegular2,
} from "../styles/TextStyles"

export default function LinkList() {
  return (
    <Wrapper>
      <Content>
        <Headline>Gefördert durch</Headline>
        <LinkButton>
          <Link to="https://www.instagram.com/kleinundhaarig/" target="_blank">
            <FormButton label="@kleinundhaarig" />
          </Link>
        </LinkButton>
      </Content>
      {/* <Face /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 120px 40px;
  display: grid;
  justify-content: center;
  /* background: white; */
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const Content = styled.div`
  max-width: 800px;
  display: grid;
  justify-content: center;
`

const Headline = styled(TextSmall)`
  font-family: "GT-Alpina-Extended-Regular";
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 64px;
  text-align: center;
`

const LinkButton = styled.div``
