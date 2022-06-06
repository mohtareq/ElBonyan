import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    padding: 100px 20px;
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
    padding: 80px 0;
`;
