import React from "react"
import styled from "styled-components"

export default function PageGrid() {
  return <Wrapper></Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`
