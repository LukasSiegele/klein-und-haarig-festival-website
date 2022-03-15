import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import VipAccessForm from "../components/vip/VipAccess"
import useTicketVerify from "../helper/useTicketVerify"

export default function VIParea() {
  let queryParams 
  const isBrowser = () => typeof window !== "undefined"
  if(isBrowser()){
    queryParams = new URLSearchParams(window.location.search);
  } 
  const [key, setKey] = useState(queryParams.get('key'));
  const [hasAccess, setHasAccess] = useState(false);
  

    const ticketVerify = useTicketVerify(key)
    console.log(ticketVerify)

  
  

  return (
    <Layout>
      <SEO title="vip area" />
      <Wrapper>
        {hasAccess ? <h1>Secret festival information</h1> : <VipAccessForm/>}
        <Title>Insert your </Title>
        <Description>I like Turtlefvsvs.</Description>
       
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  padding: 120px 40px;
`

const Title = styled.h1`
  color: white;
`
const Description = styled.h2`
  margin-top: 40px;
  color: white;
`

const Home = styled(Link)`
  margin-top: 120px;
  display: inline-block;
  padding: 20px;
  background: white;
  color: black;
`
