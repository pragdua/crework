import React from 'react'
import { StyledHero } from '../styled/Hero.styled'
import illus from "../images/illus.svg"

const Hero = () => {
    return (
        <StyledHero>
            
            <div className="hero-title">
            <h1>learn while building projects with a community.</h1>
            <div className="buttons">

            <button>join webdev waitlist</button>
            <button className='ml-button'>apply for ML batch 3</button>
            </div>
            </div>

            <div className="hero-img">
            <img className = "illus" src={illus} alt="geometric-illustartion" />
            </div>
            
        </StyledHero>
        
    )
}

export default Hero
