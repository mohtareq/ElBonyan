import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    height: auto;
    margin: auto;
    background: #bcbfc22a;
    display: flex;
    justify-content: center;
    @media (max-width: 900px) {
        display: grid;
    }
    @media (max-width: 600px) {
        height: auto;
        padding: 30px 0;
    }
`;

export const Intro = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    display: grid;
`;
