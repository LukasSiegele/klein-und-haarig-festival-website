import React from "react"
import styled from "styled-components"

const RingLineup = props => {
  console.log(props.top)

  return <Ring top={props.top} height={props.height} />
}
export default RingLineup

const Ring = styled.div`
  transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);

  position: absolute;
  z-index: 10;
  top: ${props => (props.top ? props.top : props.top)}px;
  height: ${props => (props.height ? props.height : props.height)}px;
  /* transform: rotate3d(${props =>
    props.top ? props.top : props.top}deg, 0, 1); */

  width: 70vw;
  /* height: 120px; */
  border: 1px solid black;
  border-radius: 50%;
  margin-bottom: -200px;
  mix-blend-mode: exclusion;
`
