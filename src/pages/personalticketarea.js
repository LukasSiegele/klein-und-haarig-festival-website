import { Link } from "gatsby"
import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
// import SEO from "../components/layout/seo"
import LogoSVG from "../../static/images/LogoSideNavWhite.svg"
import Stairway from "../../static/images/TicketareaLogin.jpg"
import Zeplin from "../../static/images/SuccessZeppelin.png"
import Kritzel from "../../static/images/TicketareaRotesKritzel.png"
import Klecks from "../../static/images/TicketareaLila.png"
import VipLoginSection from "../components/sections/VipLoginSection"
import PersonalticketSection from "../components/sections/PersonalticketSection"
import verifyTicket from "../helper/verifyTicket"

//import useTicketVerify from "../helper/useTicketVerify"

// import { ProgressPlugin } from "webpack"

export default function PersonalTicketArea() {
  let queryParams = null
  const [userInfo, setUserInfo] = useState(false)
  const [ticketID, setTicketID] = useState(null)
  const [submitFailed, setSubmitFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  if (typeof window !== `undefined`) {
    queryParams = new URLSearchParams(window.location.search)
  }

  useEffect(() => {
    if (queryParams) {
      setTicketID(queryParams.get("k"))
    }
  }, [setTicketID, queryParams])

  useEffect(() => {
    const validateTicketID = async () => {
      const result = await verifyTicket(ticketID)
      setUserInfo(result)
      setSubmitFailed(!result)
      setIsLoading(false)
    }

    if (ticketID) {
      console.log(ticketID)
      validateTicketID()
    }
  }, [ticketID, setUserInfo])

  useEffect(() => {
    if (userInfo && queryParams) {
      console.log("User Info effect: ", userInfo.id)
      navigate("/personalticketarea?k=" + userInfo.id.substring(3, 17))
    }
  }, [ticketID, userInfo])

  const handleIDSubmit = id => {
    setTicketID(id)
    setIsLoading(true)
  }

  return (
    <>
      {userInfo ? (
        <PersonalticketSection ticketID={ticketID} userInfo={userInfo} />
      ) : isLoading ? (
        <Logo />
      ) : (
        <VipLoginSection
          handleSubmit={handleIDSubmit}
          hasError={submitFailed}
        />
      )}
    </>
  )
}

const Logo = styled.div`
  width: 84px;
  height: 79px;
  background-image: url(${LogoSVG});
  background-size: cover;
  position: absolute;
  margin: 40px;

  @media (max-width: 800px) {
    margin: 20px;
  }
  :hover {
    cursor: pointer;
  }
`
