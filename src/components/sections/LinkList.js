import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FormButton from "../buttons/FormButton"

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
      {/* <Headline>Mehr von </Headline> */}
      <Content>
        <LinkButton>
          <Link to="https://www.instagram.com/kleinundhaarig/" target="_blank">
            <FormButton label="Instagram" />
          </Link>
        </LinkButton>
        <LinkButton>
          <Link
            to="https://soundcloud.com/kleinundhaarig?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            target="_blank"
          >
            <FormButton label="Soundcloud" />
          </Link>
        </LinkButton>
        <LinkButton>
          <Link to="mailto:info@kleinundhaarig.de">
            <FormButton label="E-Mail" />
          </Link>
        </LinkButton>
      </Content>
      {/* <Face /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 120px 40px 20px;
  /* display: grid; */
  justify-content: center;
  /* background: white; */
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const Content = styled.div`
  /* max-width: 800px;
  display: grid;
  justify-content: center; */
`

const Headline = styled(TextSmall)`
  font-family: "GT-Alpina-Extended-Regular";
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 40px;
  text-align: center;
`

const LinkButton = styled.div`
  margin-bottom: 20px;
`
