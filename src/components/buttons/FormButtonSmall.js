import React from "react"
import styled from "styled-components"
import { TextSmall } from "../styles/TextStyles"

export default function FormButtonSmall(props) {
  return (
    <SmallButton>
      <ButtonLabel>{props.label}</ButtonLabel>
    </SmallButton>
  )
}

// const FormButton = props => <button type={props.typ}>{props.label}</button>

// export default FormButton

const SmallButton = styled.div`
  background-color: black;
  border-radius: 500px;
  padding: 4px 16px;
  text-align: center;
  /* border: 1px solid black; */

  & > :hover {
    cursor: pointer;
  }
  /* font-size: 12px; */
`

const ButtonLabel = styled(TextSmall)`
  color: white;
`
