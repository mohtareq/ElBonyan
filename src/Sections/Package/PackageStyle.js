import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    height: auto;
    margin: auto;
    display: flex;
    justify-content: center;
`;

export const Intro = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    display: grid;
    @media (max-width: 600px) {
        display: flow-root;
    }
`;
