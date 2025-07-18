import React from "react"
import styled from "styled-components"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import { TextSmall } from "../styles/TextStyles"

export default function SideNavigation(props) {
  const { isInfo, isVolunteer, isAbout, isCode, isAwareness, isShop} = props
  const { t } = useTranslation()
  const { languages, originalPath } = useI18next()

  return (
    <Desktop>
      <Wrapper bgColor={props.bgColor}>
        <LogoWrapper>
          <Link to="/">
            <Logo src="/icons/Logo-White-25.svg"></Logo>
          </Link>
        </LogoWrapper>

        <LinkWrapper>
          <LinkGroup>
            {/* <Link to={"/info"}>
              <ListInfo isInfo={isInfo}>{t("navigation.infos")}</ListInfo>
            </Link>
            <Link to={"/volunteer"}>
              <ListVolunteer isVolunteer={isVolunteer}>
                {t("navigation.volunteers")}
              </ListVolunteer>
            </Link> */}
            <Link to={"/about"}>
              <ListAbout isAbout={isAbout}>{t("navigation.about")}</ListAbout>
            </Link>
            <Link to={"/code"}>
              <ListCode isCode={isCode}>{t("navigation.code")}</ListCode>
            </Link>
            <Link to={"/awareness"}>
              <ListAwareness isAwareness={isAwareness}>{t("navigation.awareness")}</ListAwareness>
            </Link>
            <Link to={"/shop"}>
              <ListShop isShop={isShop}>{t("navigation.shop")}</ListShop>
            </Link>
          </LinkGroup>
          <ul style={{ listStyle: "none", margin: "0px", alignSelf: "start" }}>
            {languages.map(lng => (
              <li key={lng} style={{ margin: "0px" }}>
                <LanguageLink to={originalPath} language={lng}>
                  {lng}
                </LanguageLink>
              </li>
            ))}
          </ul>
        </LinkWrapper>
      </Wrapper>
    </Desktop>
  )
}

// Fixed SideNav on Frontpage
const MobileView = styled.div`
  /* display: none; */
`

const Desktop = styled.div`
  /* display: none; */
`

const Wrapper = styled.div`
  position: fixed;
  display: grid;
  background-color: rgba(0, 0, 0, 1);
  backdrop-filter: blur(0px);
  grid-template-rows: auto 1fr;

  /* background-color: ${props => props.bgColor}; */

  height: 100vh;
  z-index: 100;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  width: 133px;

  /* animation: SideBarAnimation 1.3s 0.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1); */
  opacity: 1;

  @keyframes SideBarAnimation {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`

const LogoWrapper = styled.div`
  padding: 30px 5px 5px 5px;
  display: grid;
  justify-items: center;
  z-index: 99;

  /* mix-blend-mode: difference !important; */
`

// KuH Logo in SideNav
const Logo = styled.img`
  width: 80px;
  height: 58px;
  mix-blend-mode: difference;

  :hover {
    cursor: pointer;
  }
`

const LinkWrapper = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  margin-top: -94px;
  gap: 32px;
`

const LinkGroup = styled.div`
  text-align: center;
  display: grid;
  align-self: end;
  grid-template-rows: 1fr 1fr;
  gap: 16px;
`

const ListInfo = styled(TextSmall)`
  color: white;
  font-family: "Kleber";
  line-height: 1.2;
  text-decoration: ${props =>
    props.isInfo ? "#ff5400 wavy line-through" : "none"};

  &:hover {
    cursor: pointer;
  }
`

const ListVolunteer = styled(TextSmall)`
  color: white;
  font-family: "Kleber";
  line-height: 1.2;
  text-decoration: ${props =>
    props.isVolunteer ? "#ff5400 wavy line-through" : "none"};

  &:hover {
    cursor: pointer;
  }
`

const ListAbout = styled(TextSmall)`
  color: white;
  font-family: "Kleber";
  line-height: 0.8;
  text-decoration: ${props =>
    props.isAbout ? "#ff5400 wavy line-through" : "none"};

  &:hover {
    cursor: pointer;
  }
`
const ListCode = styled(TextSmall)`
  color: white;
  font-family: "Kleber";
  line-height: 0.8;
  text-decoration: ${props =>
    props.isCode ? "#ff5400 wavy line-through" : "none"};

  &:hover {
    cursor: pointer;
  }
`

const ListAwareness = styled(TextSmall)`
  color: white;
  font-family: "Kleber";
  line-height: 0.8;
  text-decoration: ${props =>
    props.isAwareness ? "#ff5400 wavy line-through" : "none"};

  &:hover {
    cursor: pointer;
  }
`

const ListShop = styled(TextSmall)`
  color: white;
  font-family: "Kleber";
  line-height: 0.8;
  text-decoration: ${props =>
    props.isShop ? "#ff5400 wavy line-through" : "none"};

  &:hover {
    cursor: pointer;
  }
`

const LanguageLink = styled(Link)`
  color: white;
  opacity: 0.7;
  font-family: "Kleber";
`

