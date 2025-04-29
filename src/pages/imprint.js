import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import { Link, graphql } from "gatsby"

export default function Imprint() {
  const {t} = useTranslation();
  return (
    <Layout>
      {/* <SEO title="Impressum" /> */}
      <Wrapper>
        <Content>
          <Section>
            <SectionHeader>{t('pages.imprint.headline')}</SectionHeader>
            <Header>{t('pages.imprint.sections.first.label')}</Header>
            <Trans t={t} as="p" i18nKey={'pages.imprint.sections.first.text'}>
            Bunte Platte e.V.Türkenstraße 2180799 München Vertreten durch: Luca Prohl und Mareike Klaus (Vorstand)E-Mail:
              <a href="mailto:info@kleinundhaarig.de">info@bunte-platte.de</a>
            </Trans>
          </Section>
          <Section></Section>
          <Section>
            <Header>{t('pages.imprint.sections.second.label')}</Header>
            <p style={{whiteSpace: "pre-wrap"}}>{t('pages.imprint.sections.second.text')}</p>
          </Section>
          <Section>
            <Header>{t('pages.imprint.sections.third.label')}</Header>
            <Trans t={t} as="p" i18nKey={'pages.imprint.sections.third.text'}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:
            <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </Trans>
          </Section>
          <Section>
            <Header>{t('pages.imprint.sections.fourth.label')}</Header>
            <p>
            {t('pages.imprint.sections.fourth.text')}
            </p>
          </Section>
          <Section>
            <Header>{t('pages.imprint.sections.fifth.label')}</Header>
            <p style={{whiteSpace: "pre-wrap"}}>
            {t('pages.imprint.sections.fifth.text')}
            </p>
          </Section>
          <Section>
            <Header>{t('pages.imprint.sections.sixth.label')}</Header>
            <p style={{whiteSpace: "pre-wrap"}}>
            {t('pages.imprint.sections.sixth.text')}
            </p>
          </Section>
          <Section>
            <Header>{t('pages.imprint.sections.seventh.label')}</Header>
            <p style={{whiteSpace: "pre-wrap"}}>
            {t('pages.imprint.sections.seventh.text')}
            </p>
          </Section>
        </Content>
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

const HiddenLink = styled(Link)`
  border-bottom: 0;
`

const Wrapper = styled.div`
  padding: 120px 40px;
  color: white;
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const Content = styled.div`
  max-width: 900px;
`

const Section = styled.div`
  margin-bottom: 80px;
`

const SectionHeader = styled.h2`
  margin-bottom: 60px;
`

const Header = styled.h2`
  font-size: 1.7em;
  margin-bottom: 15px;
`
