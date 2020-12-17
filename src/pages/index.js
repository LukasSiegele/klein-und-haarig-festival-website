import React from "react"
import "./index.css"
import Hero from "../components/Hero"
import Header from "../components/Header"
import Message from "../components/Message"
import TicketFormular from "../components/Form"

const IndexPage = () => (
  <div className="Page">
    {/* <Header/> */}
    <Hero />
    <Message />
    <TicketFormular />
  </div>
)

export default IndexPage
