import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// import LeitgrafikImage from "/static/images/Leitgrafik.jpg"
// import TicketBackground from "/static/icons/ticket-ausverkauft.svg"

import useAudienceCount from "../../helper/useAudienceCount"
import useAutoCount from "../../helper/useAutoCount"
import useCamperCount from "../../helper/useCamperCount"

export default function HeroSection() {
  // Audience Cunt
  const audienceCount = useAudienceCount()
  const maxAudience = 229

  // Auto Count
  const autoCount = useAutoCount()

  // Camper Count
  const camperCount = useCamperCount()

  return (
    <Container>
      <Wrapper>
        <Title>Klein und Haarig 2023</Title>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: #f8f6ef;
  max-width: 2300px;
  height: 900px;
`

const Wrapper = styled.div``
const Title = styled.h2``
