import React from 'react'
import styled from 'styled-components'

const MessageContainer = styled.div`
    height: 500px;
    display: grid;
    grid-template-columns: 1fr;
    background-color: black;
`

const MessageText = styled.h3`
    text-align: center;
    max-width: 1100px;
    align-self: center;
    margin: 0 auto;
`

const Message = () => (
    <MessageContainer>
        <MessageText>Ein kleines Festival im Schwarzwald organisiert von ein paar Freunden aus Liebe zur elektronischen Musik und zur Natur.</MessageText>
    </MessageContainer>
)

export default Message