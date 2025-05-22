import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import FormButton from "../components/buttons/FormButton"
import { useTranslation } from "gatsby-plugin-react-i18next"

export default function NotFoundPage() {
  const { t } = useTranslation()
  
  return (
    <Layout>
      <Wrapper>
        <Title>{t("pages.404.title")}</Title>
        <Description>{t("pages.404.description")}</Description>
        <ButtonWrapper>
          <Link to="/">
            <FormButton label={t("pages.404.button")} color="black" />
          </Link>
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

const Wrapper = styled.div`
  padding: 120px 40px;
  background: black;
`

const Title = styled.h1`
  color: white;
`
const Description = styled.h2`
  margin-top: 40px;
  color: white;
`

const ButtonWrapper = styled.div`
  margin-top: 120px;
  width: 250px;
`
