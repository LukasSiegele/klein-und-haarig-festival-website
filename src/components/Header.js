import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    height: 120px;
    position: fixed;
    background-color: #000;
`

const Header = () => (
    <HeaderContainer>
        <Link to="/course"></Link>
    </HeaderContainer>
)

export default Header