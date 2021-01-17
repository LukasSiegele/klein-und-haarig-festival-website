import React from "react"
import styled from "styled-components"
import { animations } from "../styles/AnimationStyles"

export default function TicketCard(props) {
  return (
    <Wrapper isSelected={props.isSelected} onClick={props.handleSelection}>
      <Title titleSize={props.titleSize}> {props.title}</Title>
      <Price>{props.price}</Price>
      <DetailWrapper isSelected={props.isSelected}>
        <Details>{props.details}</Details>
      </DetailWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 464px;
  width: 242px;
  position: relative;
  transition: ${animations.slow};
  color: ${props => (props.isSelected ? "black" : "white")};
  border: ${props => (props.isSelected ? "0px" : "1px solid white")};
  background: ${props =>
    props.isSelected
      ? "radial-gradient(circle at 50% 50%, rgba(255,215,68,1) 0%, rgba(255,215,68,1) 17%, rgba(208,255,53,1) 89%, rgba(162,250,76,1) 100%)"
      : "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 17%, rgba(0,0,0,1) 89%, rgba(0,0,0,1) 100%)"};

  :hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`

const Title = styled.h1`
  font-size: 64px;
  font-size: ${props => props.titleSize};
  text-transform: none;
  margin: 30px 0px;
  :hover {
    cursor: pointer;
  }
`

const Price = styled.h4`
  /* font-family: GT-Walsheim-Pro-Black;   */
  margin: 30px 20px;
  :hover {
    cursor: pointer;
  }
`

const DetailWrapper = styled.div`
  position: absolute;
  width: 160px;
  bottom: 75px;
  right: -40px;

  a  {
    color: ${props => (props.isSelected ? "black" : "white")};
    border-color: ${props => (props.isSelected ? "black" : "white")};
  }
`

const Details = styled.h4`
  transform: rotate(-90deg);
`
