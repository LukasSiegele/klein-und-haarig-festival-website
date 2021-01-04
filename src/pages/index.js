import React from "react"
import "../components/layout/layout.css"
import HeroSection from "../components/sections/HeroSection"
import Message from "../components/sections/Message"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Header from "../components/layout/Header"
import ImageSection from "../components/sections/ImageSection"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <HeroSection />
      <Message />
      <ImageSection />
    </Layout>
  )
}
