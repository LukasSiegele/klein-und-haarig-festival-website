import React from "react"
import styled from "styled-components"

export default function SideLine(props) {
  return (
    // <SideBarBG bgColor={props.bgColor}>
    <SideNavWrapper>
      <Ghost></Ghost>
    </SideNavWrapper>
    // /* </SideBarBG> */
  )
}

// Fixed SideNav on Frontpage
const SideBarBG = styled.div`
  background-color: ${props => props.bgColor};
`

const SideNavWrapper = styled.div`
  height: auto;
  border-right: 1px solid white;
  width: 133px;
  /* mix-blend-mode: difference; */
  /* animation: SideBarAnimation 1.3s 0.4s forwards cubic-bezier(0.2, 0.8, 0.2, 1); */
  opacity: 1;

  @keyframes SideBarAnimation {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const Ghost = styled.div`
  width: 54px;
  margin: 40px;
`