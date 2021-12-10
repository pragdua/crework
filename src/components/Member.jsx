import React from 'react'
import {StyledMember} from "../styled/Member.styled"


const Member = ({name, description, role}) => {
    return (
        <StyledMember>
            <div className="member-name">{name} </div>
            <span className="member-role">{role} </span>
            <div className="member-desc">{description}</div>
        </StyledMember>
    )
}

export default Member
