import styled from "styled-components";

export const StyledStats = styled.div`

    font-family: 'Epilogue', sans-serif;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    /* border: 2px solid red; */
    width: 80%;

    & .container__value {
        /* Big font size */
        font-size: 2rem;
        font-weight: 500;
        color: #FDAD3B;
 
            }

    & .container__label {
        /* Smaller font size */
        font-size: 0.8rem;
        font-weight: 700;

        /* Uppercase the label */
        /* text-transform: uppercase; */
                    }

    
    @media(min-width: 700px) {

        width: 100%;
        & .container__value {
        /* Big font size */
        font-size: 2.5rem;
        font-weight: 500;
        color: #FDAD3B;
 
            }

        & .container__label {
            /* Smaller font size */
            font-size: 1rem;
            font-weight: 700;

            /* Uppercase the label */
            /* text-transform: uppercase; */
                        }

    }

`;