import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import FormButton from "../components/buttons/FormButton"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { useLocation } from "@reach/router";

export default function ThanksPage() {
  const { t } = useTranslation()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get("product");
  
  return (  
    <Layout>
      {/* <SEO title="404: Not found" /> */}
      <Wrapper>
        <Title>{t("Order succesfull")}</Title>
        <Description>{t("Thank you for your support of Bunte Platte e.V. - we will send your order as fast as possible!")}</Description>
        <ButtonWrapper>
          <Link to="/shop">
            <FormButton label={t("Back")} color="black" />
          </Link>
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($language: String!) {
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
