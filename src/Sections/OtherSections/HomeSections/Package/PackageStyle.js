import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    padding: 50px 20px;
    display: flex;
    justify-content: center;
    background: #bcbfc22a;
    @media (max-width: 900px) {
        margin: auto;
    }
    @media (max-width: 600px) {
        padding: 20px 20px;
    }
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
