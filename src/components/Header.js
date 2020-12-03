import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react'
// import styled from 'styled-components'
import './Header.css'

const Header = () => {

    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll, handleScroll')
        }
    }, []
    )

    const handleScroll = (event) => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 50) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    }

    return (
        <div className={hasScrolled ? 'HeaderContainer HeaderScrolled' : 'HeaderContainer'}>
            <div className="HeaderGroup">
                <Link to="/">Home</Link>
                <Link to="/location">Location</Link>
                <Link to="/artists">Artists</Link>
                <Link className = "Ticket" to="/tickets">Tickets</Link>
            </div>
        </div>      
    )
}

export default Header