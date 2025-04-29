import React from "react";
import styled from "styled-components";
import Layout from "../components/layout/layout";
// import SEO from "../components/layout/seo"
import Footer from "../components/footer/footer";
import SideNavigation from "../components/navigation/SideNavigation";
import SideLine from "../components/navigation/SideLine";
// Link wurde unten nicht verwendet, daher auskommentiert: import { Link } from "gatsby";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

import { SubheaderSmall, StyledText } from "../components/styles/TextStyles";
import { graphql } from "gatsby"; // Import ist vorhanden
import Info1 from "../../static/images/InfoBild1.jpg";
import MobileNavigation from "../components/navigation/MobileNavigation";

// Funktion angepasst, um props zu empfangen
export default function Info(props) {
  const { t } = useTranslation();
  const { pageContext } = props; // pageContext aus props extrahieren

  // --- Logging (bleibt drin) ---
  console.log("--- InfoPage pageContext ---");
  console.log("pageContext.language:", pageContext?.language);
  console.log(
    "pageContext.i18nResources vorhanden?:",
    !!pageContext?.i18nResources
  );
  if (pageContext?.i18nResources) {
    console.log(
      "pageContext.i18nResources Sprachen (Keys):",
      Object.keys(pageContext.i18nResources)
    );
  }
  // --- Ende Logging ---

  return (
    <Layout>
      {/* <SEO title="Info" /> */}
      <Wrapper>
        <MobileNavigation isInfo="info" bgColor="black" />
        <SideNavigation isInfo="info" bgColor="black" />
        <Content>
          <MainGrid>
            <SideLine />
            <ContentSection>
              <ImageSectionMobile>
                <InfoBild1 />
              </ImageSectionMobile>
              <ScrollContainer>
                <TextSection>
                  <HeaderSection>
                    <InfoHeadline>{t("pages.infos.headline")}</InfoHeadline>
                    <p style={{ color: "grey", marginLeft: "60px" }}>
                      (Context-Sprache: {pageContext?.language})
                    </p>
                  </HeaderSection>

                  {/* Abschnitt 'first' - KORRIGIERT */}
                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.first.label")}
                    </InfoLabel>
                    <InfoText>
                      {/* Annahme: 'first.text' enthält nur den Link oder Text mit Platzhalter  */}
                      {/* Variante A: Wenn 'first.text' NUR der Link sein soll (wahrscheinlich) */}
                      <LinkInline
                        href={t("pages.infos.sections.first.link.href")}
                        target="_blank"
                      >
                        {t("pages.infos.sections.first.link.text")}
                      </LinkInline>

                      {/* Variante B: Wenn 'first.text' Text + Platzhalter  enthält (anpassen!) */}
                      {/* <Trans
                        t={t}
                        i18nKey={"pages.infos.sections.first.text"}
                        components={[
                          <LinkInline
                            href={t("pages.infos.sections.first.link.href")}
                            target="_blank"
                          >
                            {t("pages.infos.sections.first.link.text")}
                          </LinkInline>
                        ]}
                      /> */}
                    </InfoText>
                  </InfoSection>

                  {/* Abschnitt 'storno' */}
                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.storno.label")}
                    </InfoLabel>
                    <InfoText>
                      {/* Hier wird <Trans> nur für Text verwendet, das ist OK */}
                      <Trans
                        t={t}
                        i18nKey={"pages.infos.sections.storno.text"}
                      ></Trans>
                    </InfoText>
                  </InfoSection>

                  {/* Abschnitt 'car' */}
                  <InfoSection>
                    <InfoLabel>{t("pages.infos.sections.car.label")}</InfoLabel>
                    {/* Hier wird nur t() verwendet, das ist OK */}
                    <InfoText>{t("pages.infos.sections.car.text")}</InfoText>
                  </InfoSection>

                  {/* Abschnitt 'publictransport' - KORRIGIERT */}
                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.publictransport.label")}
                    </InfoLabel>
                    <InfoText>
                      {/* Verwendung der components-Prop */}
                      <Trans
                        t={t}
                        i18nKey={"pages.infos.sections.publictransport.text"}
                        components={[ // Array für die Komponenten
                          <LinkInline // Die Komponente für den -Platzhalter
                            href={t(
                              "pages.infos.sections.publictransport.link.href" // URL aus JSON holen
                            )}
                            target="_blank"
                          />,
                          // Falls es weitere Platzhalter wie ,  gäbe, kämen die Komponenten hierhin
                        ]}
                      />
                    </InfoText>
                  </InfoSection>

                  {/* ... (Restliche InfoSections bleiben unverändert, da sie <Trans> entweder nur für Text oder gar nicht verwenden) ... */}
                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.camper.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.camper.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>{t("pages.infos.sections.pay.label")}</InfoLabel>
                    <InfoText>{t("pages.infos.sections.pay.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.waste.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.waste.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.camp.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.camp.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.fire.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.fire.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.food.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.food.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.drinks.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.drinks.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>{t("pages.infos.sections.wc.label")}</InfoLabel>
                    <InfoText>{t("pages.infos.sections.wc.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.secu.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.secu.text")}</InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.accessibility.label")}
                    </InfoLabel>
                    <InfoText>
                      {t("pages.infos.sections.accessibility.text")}
                    </InfoText>
                  </InfoSection>

                  <InfoSection>
                    <InfoLabel>
                      {t("pages.infos.sections.kids.label")}
                    </InfoLabel>
                    <InfoText>{t("pages.infos.sections.kids.text")}</InfoText>
                  </InfoSection>

                </TextSection>
                <Footer bgColor="black " />
              </ScrollContainer>

              <ImageSectionDesktop>
                <InfoBild1 />
              </ImageSectionDesktop>
            </ContentSection>
          </MainGrid>
        </Content>
      </Wrapper>
    </Layout>
  );
}

// Die GraphQL-Abfrage ist korrekt vorhanden
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
`;

// --- Styled Components (unverändert) ---
const Wrapper = styled.div`
  overflow: hidden;
  background-color: black; /* Zurück auf black geändert */
`;

const Content = styled.div`
  background-color: black;
  display: grid;
  grid-template-columns: auto;
`;
const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const ScrollContainer = styled.div`
  overflow-x: hidden;
  background-color: black;
  height: 100vh;
  overflow-y: hidden;
  overflow-y: scroll;
  @media (max-width: 1100px) {
    height: auto;
  }
`;

const TextSection = styled.div`
  padding: 25px 10px 0 10px;

  @media (max-width: 1100px) {
    padding: 10px 10px 0 10px;
  }
`;

const HeaderSection = styled.div`
  height: 85vh;
  @media (max-width: 1100px) {
    height: auto;
    margin-bottom: 200px;
  }
`;

const InfoSection = styled.div`
  margin-bottom: 60px;
`;

const InfoHeadline = styled.h3`
  color: white;
  display: inline-block;
  max-width: 800px;
  text-indent: 60px;
`;

const InfoLabel = styled.h3`
  color: white;
  margin-bottom: 16px;
  display: inline-block;
  max-width: 800px;
`;

const InfoText = styled.p`
  color: white;
  font-weight: 500;
  margin-bottom: 20px;
  opacity: 0.8;
  max-width: 800px;
  white-space: pre-wrap;
`;
const InfoLabelImportant = styled.h3`
  color: red;
  margin-bottom: 16px;
  display: inline-block;
  max-width: 800px;
`;

const InfoTextImportant = styled.p`
  color: red;
  font-family: "GT-Alpina-Extended-Regular";
  margin-bottom: 20px;
  opacity: 0.9;
  max-width: 800px;
`;

const DetailLabel = styled(SubheaderSmall)`
  color: white;
  font-family: "GT-Alpina-Extended-Regular";
  margin-top: 32px;
  margin-bottom: 6px;
  opacity: 0.7;
`;

const LinkInline = styled.a`
  color: white;
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  /* Hinzufügen, um sicherzustellen, dass es kein Block-Element ist, das verschachtelt wird */
  display: inline;
`;

const ImageSectionDesktop = styled.div`
  background-color: #a19089;
  height: 100vh;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const ImageSectionMobile = styled.div`
  background-color: #a19089;
  height: 70vh;
  @media (min-width: 1101px) {
    display: none;
  }
`;

const InfoBild1 = styled.div`
  height: 100vh;
  background-image: url(${Info1});
  background-size: cover;
  @media (max-width: 1100px) {
    max-width: 100%;
    max-height: 100%;
    height: inherit !important;
  }
`;

const List = styled.div`
  margin-top: 16px;
`;

const ListItem = styled.p`
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 0 8px 16px;
  max-width: 800px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
`;