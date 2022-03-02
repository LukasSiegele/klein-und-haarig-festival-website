import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import LeitgrafikImage from "/static/images/Leitgrafik.jpg"
import TicketBackground from "/static/icons/ticket-ausverkauft.svg"

import useAudienceCount from "../../helper/useAudienceCount"
import useAutoCount from "../../helper/useAutoCount"
import useCamperCount from "../../helper/useCamperCount"

export default function HeroSection() {
  // Audience Cuunt
  const audienceCount = useAudienceCount()
  const maxAudience = 229

  // Auto Count
  const autoCount = useAutoCount()

  // Camper Count
  const camperCount = useCamperCount()

  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background-color: blue;
  overflow: hidden;
  max-width: 2300px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 800px;
`
