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
      {/* <Headline>Mehr auf</Headline> */}
      <Content>
        <LinkButton>
          <Link
            to="https://soundcloud.com/kleinundhaarig?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            target="_blank"
          >
            <FormButton
              fontFamily="Ginto"
              backgroundColor="#CCBBFF"
              color="black"
              label="Recordings 2024"
            />
          </Link>
        </LinkButton>
        <LinkButton>
          <Link to="https://www.instagram.com/kleinundhaarig/" target="_blank">
            <FormButton
              fontFamily="Ginto"
              backgroundColor="#6369C2"
              color="black"
              label="Instagram"
            />
          </Link>
        </LinkButton>

        <LinkButton>
          <Link to="mailto:info@kleinundhaarig.de">
            <FormButton
              fontFamily="Ginto"
              backgroundColor="#959772"
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

const Wrapper = styled.div`
  padding: 40px 40px 120px;
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

const Headline = styled(TextSmall)`
  font-family: "GT-Alpina-Extended-Regular";
  color: white;
  margin-bottom: 10px;
  text-align: center;
`

const LinkButton = styled.div`
  margin-bottom: 3px;
`
