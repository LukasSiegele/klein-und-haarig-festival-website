import React from 'react'
import styled from 'styled-components'

const MessageContainer = styled.div`
    height: 500px;
    display: grid;
    grid-template-columns: 1fr;
    /*background-color: black;
    background: radial-gradient(circle at 70% 150px, rgba(3,250,129,1) 0%, rgba(107,35,178,1) 5%, rgba(0,0,0,1) 10%);*/
    background-color: black;
    background: radial-gradient(circle at 70% 150px, rgba(251,119,22,1) 0%, rgba(211,11,11,1) 5%, rgba(0,0,0,1) 10%);
`

const MessageText = styled.h3`
    text-align: center;
    max-width: 1100px;
    align-self: center;
    margin: 0 auto;
    color: green;
`

const Message = () => (
    <MessageContainer>
        <MessageText>Ein kleines Festival im Schwarzwald organisiert von ein paar Freunden aus Liebe zur elektronischen Musik und zur Natur.</MessageText>
    </MessageContainer>
)

export default Message