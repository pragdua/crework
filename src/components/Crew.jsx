import React, { useState } from 'react'
import Member from './Member';
import {members} from "./member-list"
import {StyledCrew} from "../styled/Crew.styled"
import ishant from "../images/ishant.png"
import antaripa from "../images/antaripa.png"
import ruchika from "../images/ruchika.png"
import akshat from "../images/akshat.png"
import herumb from "../images/herumb.png"
import sahil from "../images/sahil.png"
import arshpreet from "../images/arshpreet.png"

const imageList = [ishant, antaripa,ruchika, akshat,herumb, sahil, arshpreet];

const Crew = () => {

    const [member, setMember] = useState(0);


    return (
        <>
        <StyledCrew>
          <div className="meet">
              Meet The Crew  
              </div> 
              <div className="avatars">
                    {imageList.map((av, index) => <img onClick = {() => setMember(index)} src={av} className={member === index? 'avatar avatar-active': 'avatar'} alt="member" /> )}
              </div>
        </StyledCrew>
        <Member name={members[member].name}  description={members[member].desc} role={members[member].role} />
        </>
    )
}

export default Crew
