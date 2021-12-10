import styled from "styled-components";





export const StyledMember = styled.div`
    font-family: 'Epilogue', sans-serif;
    margin-top: 2rem;
    
    & .member-name {
        font-size: 1.5rem;
        font-weight: 600;
    }

    & .member-role {
       margin-top: 0.5rem;
       text-transform: uppercase;
       padding: 7px 15px 7px 15px;
       border-radius: 999px;
       background: black;
       display:inline-block;

    }

    & .member-desc{
        margin-top: 0.5rem;

    }

`;