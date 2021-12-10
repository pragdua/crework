import styled, {keyframes} from "styled-components";

const appear = keyframes`

    0%{
        transform: translateY(20px);
        opacity: 0%;
    }
    100%{

    }


`;

export const StyledContainer = styled.div`

    width: 80%;
    /* max-width: 1000px; */
    margin: 2rem auto 0 auto;
    padding: 0;
    animation: ${appear} 1s ease;

`;