import React from 'react'
import styled from 'styled-components'

import HeroImage from '../images/KUH-HeroBackground-4.png'
import FlussImage from '../images/Fluss.png'

const HeroContainer = styled.div`
    

    background: url(${HeroImage}), #000;
    
    background: url(${HeroImage}), radial-gradient(circle at bottom, rgba(238,163,43,.7) 0%, rgba(240,94,40,1) 35%, rgba(215,65,9,1) 100%);
    
    
    

    background: url(${HeroImage}), radial-gradient(circle at bottom, rgba(251,119,22,1) 0%, rgba(211,11,11,1) 35%, rgba(165,2,2,1) 100%);
    background: url(${HeroImage}), radial-gradient(circle at bottom, rgba(3,250,129,1) 0%, rgba(107,35,178,1) 45%, rgba(0,0,0,1) 100%);
    background: url(${HeroImage}), radial-gradient(circle at bottom, rgba(255,157,226,1) 0%, rgba(255,96,61,1) 35%, rgba(58,3,30,1) 100%);
    background: url(${HeroImage}), radial-gradient(circle at bottom, rgba(255,157,226,.7) 0%, rgba(149,62,247,.7) 35%, rgba(255,255,255,.7) 100%), rgba(255, 255, 255, 1);
    /*background: url(${HeroImage}), radial-gradient(circle at bottom, rgba(255,157,226,1) 0%, rgba(255,96,61,1) 35%, rgba(149,62,247,1) 100%);*/
    
    

    background-size: cover;
    background-position: center;
    height: 800px;
    width: 100%;
    position: relative;
    overflow: hidden;

    @media(max-width: 640px){
        height: 750px;
    }
`

const HeroTextGroup = styled.div`
    max-width: 1260px;
    padding: 120px 80px;

    @media(max-width: 640px){
        max-width: 100%;
        padding: 90px 20px;
    }
`

const TitleLine1 = styled.h1`
`

const TitleLine2 = styled.h1` 
    margin-left: 116px;
    @media(max-width: 640px){
        margin: 0px;
    }
`

const Year = styled.h1`
    font-family: GT-Walsheim-Pro-Black;
    -webkit-text-stroke: 2px black;
    color: rgba(255, 255, 255, 0);
    float: right;
    margin-right: 250px;
    
    @media(max-width: 640px){
        margin: 0 0 60px 0;
    }
`

const HeroTitleDetails = styled.h3`
    clear: both;
    margin: 10px 0 0 400px;
   
    @media(max-width: 640px){
        margin: 0px 0;
    }
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