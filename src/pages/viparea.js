import { Link } from "gatsby"
import { navigate } from "gatsby"
import React, { useState } from "react"
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
import PersonalTicketArea from "../components/sections/personalticketarea"
//import useTicketVerify from "../helper/useTicketVerify"


// import { ProgressPlugin } from "webpack"



export default function VIParea() {
  const [hasAccess, setHasAccess] = useState(false);



  // let queryParams
  // const isBrowser = () => typeof window !== "undefined"
  // if(isBrowser()){
  //   queryParams = new URLSearchParams(window.location.search);
  // }
  // let querykey
  // const [key, setKey] = useState(queryParams.get('key'));
  // const [hasAccess, setHasAccess] = useState(false);

  // const ticketVerify = useTicketVerify(key)
  // console.log(ticketVerify)

  

  return ( <>
    {hasAccess ? <PersonalTicketArea/> : <VipLoginSection/>}
    </>
  )
}

