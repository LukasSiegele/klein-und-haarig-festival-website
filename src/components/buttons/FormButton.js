import React from "react"
import styled from "styled-components"

export default function FormButton(props) {
  return (
    <button
      type={props.typ}
      style={{
        fontFamily: "Ginto",
        backgroundColor: props.backgroundColor,
        backgroundSize: "cover",
        color: props.color,
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      {props.label}
    </button>
  )
}

// const FormButton = props => <button type={props.typ}>{props.label}</button>

// export default FormButton
