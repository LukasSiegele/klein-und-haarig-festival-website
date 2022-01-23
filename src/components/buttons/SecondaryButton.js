import React from "react"

export default function SecondaryButton(props) {
  return (
    <button
      type={props.typ}
      style={{
        background: "black",
        color: "white",
        border: "1px solid white",
      }}
    >
      {props.label}
    </button>
  )
}
