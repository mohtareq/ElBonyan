import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    height: auto;
    margin: auto;
    display: flex;
    justify-content: center;
    background: #bcbfc22a;
    @media (max-width: 600px) {
        display: grid;
    }
`;

export const Intro = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    display: grid;
    padding: 20px 100px;
`;