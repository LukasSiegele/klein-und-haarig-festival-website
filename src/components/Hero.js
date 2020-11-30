import React from 'react'
import styled from 'styled-components'

import HeroImage from '../images/KUH-HeroBackground-3.png'
import FlussImage from '../images/Fluss.png'

const HeroContainer = styled.div`
    
    
    
    background: url(${HeroImage}), #000;
    /*background: url(${HeroImage}), radial-gradient(circle at bottom, rgba(255,157,226,1) 0%, rgba(255,96,61,1) 35%, rgba(149,62,247,1) 100%);*/
    /*background: url(${HeroImage}), radial-gradient(circle at bottom, rgba(255,157,226,1) 0%, rgba(255,96,61,1) 35%, rgba(58,3,30,1) 100%);*/
    background: url(${HeroImage}), radial-gradient(circle at bottom, rgba(255,157,226,.7) 0%, rgba(149,62,247,.7) 35%, rgba(255,255,255,.7) 100%), rgba(255, 255, 255, 1);

    background-size: cover;
    background-position: center;
    height: 800px;
    width: 100%;
    position: relative;
`

const HeroTextGroup = styled.div`
    max-width: 1260px;
    padding: 120px 96px;
`

const TitleLine1 = styled.h1``

const TitleLine2 = styled.h1`   
    margin-left: 116px;
`

const Year = styled.h1`
    font-family: GT-Walsheim-Pro-Black;
    -webkit-text-stroke: 2px white;
    color: rgba(255, 255, 255, 0);
    float: right;
    margin-right: 250px;
`

const HeroTitleDetails = styled.h3`
    clear: both;
    margin: 10px 0 0 400px;
`

const Hero = () => (
    <HeroContainer>
        <HeroTextGroup>
            <TitleLine1>Klein und</TitleLine1>
            <TitleLine2>Haarig Festival</TitleLine2>
            <Year>2021</Year>
            <HeroTitleDetails>9—11 Juli</HeroTitleDetails>
            <HeroTitleDetails>Bad Wildbad</HeroTitleDetails>
        </HeroTextGroup>
    </HeroContainer>
)

export default Hero