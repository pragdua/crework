import React from 'react'
import { StyledHero } from '../styled/Hero.styled'
import HeroImage from './HeroImage'

const Hero = () => {
    return (
        <StyledHero>
            
            <div className="hero-title">
            <h1>Learn while building projects with the community.</h1>
            <button>Join Waitlist</button>
            </div>

            <div className="hero-img">
                {/* <HeroImage/> */}
            </div>
            
        </StyledHero>
        
    )
}

export default Hero
