import React from "react"

export default function FormButton(props) {
  return (
    <button
      type={props.typ}
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundSize: "cover",
        color: props.color,
      }}
    >
      {props.label}
    </button>
  )
}

// const FormButton = props => <button type={props.typ}>{props.label}</button>

// export default FormButton
