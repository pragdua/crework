import styled from "styled-components";

export const StyledCrew = styled.div`

    margin-top: 2rem;

    & .meet {
        font-size: 1.5rem;
        color: #FDAD3B;
        font-family: 'Epilogue', sans-serif;
        font-weight: 600;
    }

    & .avatars {
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
     
    & .avatar {
        width: 5rem;
        height: 5rem;
        border-radius: 9999px;
        transition: all 0.5s ease;   
        filter: gray; /* IE6-9 */
        -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
        filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */

    }

    & .avatar-active {
        width: 5rem;
        height: 5rem;
        border-radius: 9999px; 
        transition: all 0.5s ease;   
        -webkit-filter: grayscale(0);
        filter: none;

    }

    & .avatar + .avatar {
        margin-left: 20px;
    }

    @media(max-width: 700px) {

        & .avatar {
            margin-top: 0.5rem;
        }

        & .avatar + .avatar{
            margin-left: 0.5rem;
            margin-top: 0.5rem;
        }
    }

    

`;