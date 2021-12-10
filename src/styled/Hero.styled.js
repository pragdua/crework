import styled from "styled-components";


export const StyledHero = styled.div`

    font-family: 'Epilogue', sans-serif;
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    background: #121212;
    /* padding: 1.7rem; */
    /* border-radius: 10px; */
    margin-top: 1rem;



    &   button {
        padding: 10px 15px 10px 15px;
        border-radius: 999px;
        color: #121212;
        background: white;
        position: relative;
        font-family: 'Epilogue', sans-serif;
        border: none;
        cursor: pointer;
        margin-top: 30px;
        font-weight: 600;


    }

    & .illus {
        width: 230px;
        /* height: 130px; */
        margin-top: 30px;
        /* border: 2px solid red; */
    }

    & .hero-img {
            display: none;
        }

    & .buttons {
        display: flex;
        justify-content: flex-start;
    }
  
    & .ml-button {
        margin-left: 10px;
        background: #121212;
        border: 2px solid white;
        color: white;
    }
    

    @media(min-width: 700px) {

        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;

        & .hero-title {
            width: 60%;
            font-size: 1.1rem;
        }

        & .hero-img {
            display: inline-flex;
        }

    }

`