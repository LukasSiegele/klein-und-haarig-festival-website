import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import { Link, graphql} from "gatsby"

export default function AGBS() {
  const {t} = useTranslation();
  return (
    <Layout>
      <Wrapper>
        <Content>
          <Section>
            <SectionHeader>{t('pages.agb.headline')}</SectionHeader>
            <Section>
              <Header>{t('pages.agb.sections.first.label')}</Header>
              <p>
              {t('pages.agb.sections.first.text')}
              </p>
            </Section>
            <Section>
              <Header>{t('pages.agb.sections.second.label')}</Header>
              <p>
              {t('pages.agb.sections.second.text')}
              </p>
            </Section>

            <Section>
              <Header>{t('pages.agb.sections.third.label')}</Header>
              <Trans t={t} i18nKey={"pages.agb.sections.third.text"} as="p">
                Die Käufer:innen können über unseren Partner
                <LinkInline
                  href="https://www.ticketswap.com/kleinundhaarig"
                  target="_blank"
                >
                  Ticketswap
                </LinkInline>
                die Tickets weiterkaufen. Alternativ können Käufer:innen bis zu vier Wochen vor Festivalbeginn schriftlich vom Kaufvertrag zurücktreten. In diesem Fall wird eine Stornogebühr in Höhe von 12% des Ticketpreises erhoben. Bei späterem Rücktritt oder Nichterscheinen wird keine Rückerstattung des Ticketpreises gewährt. Die Veranstalter:innen behalten sich das Recht vor, das Festival aus wichtigem Grund oder höherer Gewalt (Wetterbedingungen, Naturereignisse oder anderen Umständen) abzusagen oder zu verschieben. In diesem Fall werden die Ticketpreise in voller Höhe erstattet. Weitergehende Ansprüche der Käufer:innen sind ausgeschlossen.
                </Trans>
            </Section>
            <Section>
              <Header>{t('pages.agb.sections.fourth.label')}</Header>
              <p>
              {t('pages.agb.sections.fourth.text')}
              </p>
            </Section>
            <Section>
              <Header>{t('pages.agb.sections.fifth.label')}</Header>
              <p>
              {t('pages.agb.sections.fifth.text')}
              </p>
            </Section>
            <Section>
              <Header>{t('pages.agb.sections.sixth.label')}</Header>
              <p>
              {t('pages.agb.sections.sixth.text')}
              </p>
            </Section>
            <Section>
              <Header>{t('pages.agb.sections.seventh.label')}</Header>
              <p>
              {t('pages.agb.sections.seventh.text')}
              </p>
            </Section>
            <Section>
              <Header>{t('pages.agb.sections.eigth.label')}</Header>
              <p>
              {t('pages.agb.sections.eigth.text')}
              </p>
            </Section>
            <Section>
              <Header>{t('pages.agb.sections.ninth.label')}</Header>
              <p>
              {t('pages.agb.sections.ninth.text')}
              </p>
            </Section>
            <Section>
              <Header>{t('pages.agb.sections.tenth.label')}</Header>
              <p>
              {t('pages.agb.sections.tenth.text')}
              </p>
            </Section>
            <Section>
              <Header>{t('pages.agb.sections.eleventh.label')}</Header>
              <p>
              {t('pages.agb.sections.eleventh.text')}
              </p>
            </Section>
          </Section>
        </Content>
      </Wrapper>
    </Layout>
  )
}


export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

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

const LinkInline = styled.a`
  color: white;
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
`
