import { Link } from "gatsby"
import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import FormButton from "../components/buttons/FormButton"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
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



export default function VIParea() {
  let queryParams = null
  const [userInfo, setUserInfo] = useState(false);
  const [ticketID, setTicketID] = useState(null);
  
  
  if (typeof window !== `undefined`){
    queryParams = new URLSearchParams(window.location.search);
  }

  useEffect(() => {
    if(queryParams){
      setTicketID(queryParams.get('k'));
    }
  },[setTicketID, queryParams]);

  useEffect(() => {

    const validateTicketID = async() => {
      const result = await verifyTicket(ticketID);
      setUserInfo(result);
    }

    if(ticketID){
      console.log(ticketID)
      validateTicketID()
    }
  },[ticketID, setUserInfo])
  // const [key, setKey] = useState(queryParams.get('key'));
  // const [hasAccess, setHasAccess] = useState(false);

  // const ticketVerify = useTicketVerify(key)
  // console.log(ticketVerify)

  

  return ( <>
    {userInfo ? <PersonalticketSection ticketID={ticketID} userInfo={userInfo}/> : <VipLoginSection/>}
    </>
  )
}

