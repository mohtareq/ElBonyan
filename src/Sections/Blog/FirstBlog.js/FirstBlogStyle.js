import styled from "styled-components";

export const FirstDiv = styled.div`
    padding-top: 10px;
    @media (max-width: 800px) {
        width: 70%;
    }
`;

export const Title = styled.p`
    text-align: center;
    font-size: 20px;
    color: #22274E;
    width: 100px;
    margin: auto;
    border-bottom: 2px solid #22274E;
    @media (max-width: 800px) {
        padding-top: 100px;
        font-size: 20px;   
    }
`;

export const Subtitle = styled.p`
    padding: 10px;
    font-size: 16px;
    width: 80%;
    margin: auto;
    text-align: center;
    @media (max-width: 900px) {
        font-size: 16px;   
    }
`;
