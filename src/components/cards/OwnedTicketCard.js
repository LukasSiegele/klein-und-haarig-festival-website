import React from "react"
import styled from "styled-components"
import { animations } from "../styles/AnimationStyles"
import { BigHeadline } from "../styles/TextStyles"
// import TicketCardImage from "../../../static/images/TicketCardImage.jpg"

// import Background1 from "/static/images/Card-Bg1.jpg"
// import Background2 from "/static/images/Card-Bg2.jpg"
// import Background3 from "/static/images/Card-Bg3.jpg"

export default function OwnedTicketCard(props) {
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
        tripleLineDetail={props.tripleLineDetail}
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
  height: 640px;
  max-width: 331px;
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
    props.isSelected ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, .5)"};
  /* border: ${props => (props.isSelected ? "0px" : "1px solid white")}; */
  /* border: 0.5px solid rgba(0, 0, 0, 0.3); */
  :hover {
    transform: translateY(-10px);
  }
  & > :hover {
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
`

const Title = styled(BigHeadline)`
  transition: ${animations.slow};
  font-size: ${props => props.titleSize};
  color: ${props =>
    props.isSelected ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, .5)"};
  text-transform: none;
  padding: 30px 24px;
`

const Price = styled.h3`
  margin: 30px 24px;
  font-family: "GT-Alpina-Extended-Regular";
`

const DetailWrapper = styled.div`
  position: absolute;
  width: ${props => (props.tripleLineDetail ? "300px" : "200px")};
  bottom: ${props => (props.tripleLineDetail ? "148px" : "95px")};
  right: ${props => (props.tripleLineDetail ? "-103px" : "-55px")};
  /* bottom: ${props => (props.singleLineDetail ? "89px" : "95px")};
  right: ${props => (props.singleLineDetail ? "-53px" : "-55px")}; */
  transition: ${animations.slow};

  a  {
    color: ${props =>
      props.isSelected ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, .5)"};
    border-color: ${props =>
      props.isSelected ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, .5)"};
  }
`

const Details = styled.h4`
  transform: rotate(-90deg);
`
