import styled from "styled-components";

export const StyledHero = styled.div`

    font-family: 'Epilogue', sans-serif;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    background: #121212;
    padding: 1.7rem;
    border-radius: 10px;

    & .hero-title button {
        padding: 10px 15px 10px 15px;
        border-radius: 20px;
        color: #121212;
        background: white;
        position: relative;
        font-family: 'Epilogue', sans-serif;
        border: none;
        cursor: pointer;
        margin-top: 20px;

    }


    @media(min-width: 700px) {

        flex-direction: row;
        justify-content: space-between;

        & .hero-title {
            width: 50%;
        }

    }

`