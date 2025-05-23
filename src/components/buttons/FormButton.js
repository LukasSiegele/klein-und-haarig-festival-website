import React from "react"
import styled from "styled-components"

export default function FormButton(props) {
  return (
    <button
      type={props.typ}
      style={{
        fontFamily: "Kleber",
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
