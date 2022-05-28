import styled from "styled-components";

export const FirstDiv = styled.div`
    margin: auto;
    width: 50%;
    @media (max-width: 800px) {
        width: 70%;
    }
`;

export const Title = styled.p`
    text-align: center;
    font-size: 30px;
    color: #22274E;
    border-bottom: 3px solid #22274E;
    @media (max-width: 800px) {
        padding-top: 100px;
        font-size: 20px;   
    }
`;

export const Subtitle = styled.p`
    padding: 20px 0;
    font-size: 20px;
    text-align: center;
    @media (max-width: 900px) {
        font-size: 16px;   
    }
`;
