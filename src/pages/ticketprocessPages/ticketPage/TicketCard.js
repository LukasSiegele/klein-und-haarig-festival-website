import React from "react"
import styled from "styled-components"
import { animations } from "../styles/AnimationStyles"
// import TicketCardImage from "../../../static/images/TicketCardImage.jpg"

// import Background1 from "/static/images/Card-Bg1.jpg"
// import Background2 from "/static/images/Card-Bg2.jpg"
// import Background3 from "/static/images/Card-Bg3.jpg"

export default function TicketCard(props) {
  return (
    <Wrapper
      isSelected={props.isSelected}
      spendeSelected={props.spendeSelected}
      onClick={props.handleSelection}
      limit={props.limit}
      cardBackground={props.cardBackground}
    >
      <Title titleSize={props.titleSize} isSelected={props.isSelected}>
        {" "}
        {props.title}{" "}
      </Title>
      <Price>{props.price}</Price>
      <DetailWrapper
        isSelected={props.isSelected}
        singleLineDetail={props.singleLineDetail}
      >
        <Details>{props.details}</Details>
      </DetailWrapper>
      <BgImage
        isSelected={props.isSelected}
        cardBackground={props.cardBackground}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 464px;
  max-width: 242px;
  position: relative;
  transition: ${animations.slow};
  opacity: ${props => (props.limit ? ".3" : "1")};

  /* background: ${props =>
    props.isSelected
      ? `url(${props.cardBackground})`
      : "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 17%, rgba(0,0,0,1) 89%, rgba(0,0,0,1) 100%)"}; */

  /* background-size: cover; */
  background-position: -80px -0px;
  /* color: ${props => (props.isSelected ? "black" : "white")}; */
  color: ${props =>
    props.isSelected ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, .5)"};
  /* border: ${props => (props.isSelected ? "0px" : "1px solid white")}; */
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  :hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`

const BgImage = styled.div`
  position: absolute;
  transition: ${animations.slow};
  opacity: ${props => (props.isSelected ? "1" : ".3")};
  background: url(${props => props.cardBackground});
  background-size: cover;
  top: 0px;
  height: 100%;
  width: 100%;
  z-index: -1;
  :hover {
    cursor: pointer;
  }
`

const Title = styled.h1`
  transition: ${animations.slow};
  font-size: 40px;
  font-size: ${props => props.titleSize};
  color: ${props =>
    props.isSelected ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, .5)"};
  text-transform: none;
  padding: 30px 5px;
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
  bottom: ${props => (props.singleLineDetail ? "89px" : "75px")};
  right: ${props => (props.singleLineDetail ? "-53px" : "-40px")};
  transition: ${animations.slow};

  a  {
    color: ${props =>
      props.isSelected ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, .5)"};
    border-color: ${props =>
      props.isSelected ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, .5)"};
  }
`

const Details = styled.h4`
  transform: rotate(-90deg);
`
