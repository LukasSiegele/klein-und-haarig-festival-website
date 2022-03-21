import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import LogoSVG from "../../static/images/LogoSideNav.svg"
import BackgroundTexture from "../../static/images/BackgroundTexture.png"

import { Headline, SubheaderSmall, Note } from "../components/styles/TextStyles"

export default function Submitted() {
  return (
    <Layout>
      <SEO title="Submitted" />
      <Container>
        <Wrapper>
          <Left>
            <Link to="/">
              <Logo />
            </Link>
            <ButtonSection>
              <Link to="/">
                <FormButton label="Zurück zur Homepage"></FormButton>
              </Link>
            </ButtonSection>
          </Left>
          <Right></Right>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Container = styled.div``

const Wrapper = styled.div`
  padding: 40px;
  height: 900px;
  background-image: url(${BackgroundTexture});
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Left = styled.div``
const Right = styled.div``

// KuH Logo in TopNav
const Logo = styled.div`
  width: 84px;
  height: 79px;
  margin-right: 40px;
  background-image: url(${LogoSVG});
  background-size: cover;
  align-self: center;
  @media (max-width: 800px) {
    margin-right: 24px;
  }
  :hover {
    cursor: pointer;
  }
`

const Header = styled(Headline)``

const ButtonSection = styled.div`
  padding: 0;
`
