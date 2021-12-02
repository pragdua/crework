import React from 'react'
import { StyledHero } from '../styled/Hero.styled'
import illus from "../images/illus.svg"

const Hero = () => {
    return (
        <StyledHero>
            
            <div className="hero-title">
            <h1>learn while building projects with a community.</h1>
            <button>join waitlist</button>
            </div>

            <div className="hero-img">
            <img className = "illus" src={illus} alt="geometric-illustartion" />
            </div>
            
        </StyledHero>
        
    )
}

export default Hero
