import React from "react"
import "./index.css"
import Hero from "../components/Hero"
import Header from "../components/Header"
import Message from "../components/Message"
import TicketFormular from "../components/Form"
import TicketFormularAPI from "../components/FormAPI"

const IndexPage = () => (
  <div className="Page">
    {/* <Header/> */}
    <Hero />
    <Message />
    <TicketFormularAPI />
  </div>
)

export default IndexPage
