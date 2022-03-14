import React from "react"
import HeroSection from "../components/sections/HeroSection"
import SideNavigation from "../components/navigation/SideNav"
import Message from "../components/sections/Message"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Header from "../components/layout/Header"
import ImageSection from "../components/sections/ImageSection"
import Kuenstler from "../components/sections/Kuenstler"
import Ticker from "../components/ticker/Ticker"
export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <SideNavigation />
      <HeroSection />
      <Message />
      <ImageSection />
      <Kuenstler />
      <Ticker />
    </Layout>
  )
}
