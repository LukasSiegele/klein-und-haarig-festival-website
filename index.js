import React from "react"
import "./index.css"
import Hero from "./src/components/Hero"
import Message from "./src/components/Message"
import TicketFormularAPI from "./src/components/FormAPI"

const IndexPage = () => (
  <div className="Page">
    {/* <Header/> */}
    <Hero />
    <Message />
    <TicketFormularAPI />
  </div>
)

export default IndexPage
