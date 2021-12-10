import styled from "styled-components";




export const StyledStep = styled.div`
    font-family: 'Epilogue', sans-serif;     
    /* padding: 2rem; */
    /* border: 2px solid red; */
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    /* width: 80%; */
    align-items: stretch;
    justify-content: space-between;


    & .primary-title {
        font-size: 1.5rem;
        font-weight: 600;
        color:#FDAD3B;
    }

    & .secondary-title {
        margin-top: 10px;
        font-weight: 500;
        font-size: 1rem;
        color: grey;
    }
    & .info {
        font-size: 1rem;
        font-weight: 400;
    }
    
    & .card {
        
        border-radius: 10px;
        background: black;
        padding: 2rem;
        
    }

    & .card + .card {

        margin-top: 30px;
    }
    
    @media(min-width: 1000px) {

        flex-direction: row;

        & .card + .card {

        margin-top: 0px;
        }

        .card {
            width: 300px;
        }

    }


`;