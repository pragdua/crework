import React from 'react'
import { StyledStats } from '../styled/Stats.styled'

const Stats = () => {
    return (
        <StyledStats>
            <div className="stat-one">
            <div class="container__value">14</div>
            <div class="container__label">graduates</div>
            </div>
            <div className="stat-two">
            <div class="container__value">1000+</div>
            <div class="container__label">applicants</div>
            </div>
            <div className="stat-three">
            <div class="container__value">30</div>
            <div class="container__label">members</div>
            </div>
        </StyledStats>
    )
}

export default Stats
