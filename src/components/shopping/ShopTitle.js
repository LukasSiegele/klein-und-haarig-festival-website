import React from "react"
import styled from "styled-components"
import { PageHeader, PageInfo } from "../styles/TextStyles"

export default function ShopTitle(props) {
  return (
    <Wrapper>
      <Content>
        <Info>{props.info}</Info>
        <Title>{props.title}</Title>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 40px 20px;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Content = styled.div`
  display: grid;
  justify-items: center;
`

const Info = styled(PageInfo)``
const Title = styled(PageHeader)`
  color: white;
`
