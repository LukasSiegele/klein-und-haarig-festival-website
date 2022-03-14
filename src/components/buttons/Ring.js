import React from 'react';
import styled from "styled-components"

const Ring = (props) =>{
    console.log(props.left);
    const imgSrc = props.open ? "/images/ring-open.svg" : "/images/ring-closed.svg"
    return(
        <Image src={imgSrc} left={props.left}/>
    )
}
export default Ring

const Image = styled.img`
    transition: left 0.5s;
    position: absolute;
    height: 98px;
    top: -29px;
    z-index: 10;
    left: ${props => props.left ? props.left : props.left}px;
`