import React from 'react'
import { StyledStep } from '../styled/Step.styled'

const Step = () => {
    return (
        <StyledStep>
            <div className="card">

            <div className="primary-title">1. Bootcamp</div>
            <div className="info">
            <div className="secondary-title">2 weeks free program for selected applicants</div>
            <div className="points">
                <ul>
                    <li>Learn the skills you need for the project</li>
                    <li>Get your doubts solved by mentors</li>
                    <li>Level up with the best peer group</li>
                </ul>
            </div>
            </div>
            </div>
            <div className="card">
                
            <div className="primary-title">2. Build With Us
</div>
            <div className="info">
            <div className="secondary-title">6 weeks program for building the best project
</div>
            <div className="points">
                <ul>
                    <li>Think of problems you want to solve</li>
                    <li>Find right people to ideate the solution</li>
                    <li>Build the project from scratch in 6 weeks</li>
                </ul>
            </div>
            </div>
            </div>
            <div className="card">

            <div className="primary-title">3. Demo Day</div>
            <div className="info">
            <div className="secondary-title">A chance to show off your hard work </div>
            <div className="points">
                <ul>
                    <li>Present your project in front of the whole community</li>
                    <li>Show recruiters what you are capable of</li>
                    <li>Get opportunities but not on the basis of your resume</li>
                </ul>
            </div>
            </div>
            </div>
        </StyledStep>
    )
}

export default Step
