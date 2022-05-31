import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    @media (max-width: 800px) {
        display: grid;
    }
`;

export const Intro = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    display: grid;
`;
