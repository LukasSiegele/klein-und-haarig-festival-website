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
import Newsletter from "../form/Newsletter"

export default function LinkList() {
  return (
    <Wrapper>
      {/* <Headline>Mehr auf</Headline> */}
      <Content>
        <LinkButton>
          <Link to="/newsletter" target="_blank">
            <FormButton
              fontFamily="Ginto"
              backgroundColor="white"
              color="black"
              label="Newsletter"
            />
          </Link>
        </LinkButton>

        <LinkButton>
          <Link
            to="https://soundcloud.com/kleinundhaarig?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            target="_blank"
          >
            <FormButton
              fontFamily="Ginto"
              backgroundColor="#CECCD6"
              color="black"
              label="Recordings 2024"
            />
          </Link>
        </LinkButton>
        <LinkButton>
          <Link to="https://www.instagram.com/kleinundhaarig/" target="_blank">
            <FormButton
              fontFamily="Ginto"
              backgroundColor="#515A88"
              color="black"
              label="Instagram"
            />
          </Link>
        </LinkButton>

        <LinkButton>
          <Link to="mailto:info@kleinundhaarig.de">
            <FormButton
              fontFamily="Ginto"
              backgroundColor="#176F6B"
              color="black"
              label="E-Mail"
            />
          </Link>
        </LinkButton>

        {/* <LinkButton>
          <Link
            to="https://pretix.eu/bunteplatte/kleinundhaarig"
            target="_blank"
          >
            <FormButton
              fontFamily="Ginto"
              backgroundColor="#d2e403"
              color="black"
              label="Tickets"
            />
          </Link>
        </LinkButton> */}
      </Content>
      {/* <Face /> */}
    </Wrapper>
  )
}

const NewsletterGroup = styled.div`
  margin-top: 120px;
`

const Wrapper = styled.div`
  padding: 20px 20px 120px;
  /* display: grid; */
  justify-content: center;
  /* background: white; */
  /* border-top: 0.5px solid rgba(255, 255, 255, 1); */
  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`

const Content = styled.div`
  /* max-width: 800px;
  display: grid;
  justify-content: center; */
`

const LinkButton = styled.div`
  margin-bottom: 8px;
`
