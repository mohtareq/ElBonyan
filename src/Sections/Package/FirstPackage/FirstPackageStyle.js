import styled from "styled-components";

export const FirstDiv = styled.div`
    margin: auto;
    padding: 20px;
`;

export const Title = styled.p`
    text-align: center;
    font-size: 25px;
    color: #22274E;
    width: 100px;
    margin: auto;
    border-bottom: 3px solid #22274E;
    @media (max-width: 768px) {
        padding-top: 100px;
        font-size: 20px;   
    }
    @media (max-width: 425px) {
        padding-top: 50px;
        font-size: 18px;   
    }
`;

export const Subtitle = styled.p`
    padding: 20px 0;
    font-size: 18px;
    width: 80%;
    margin: auto;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 18px;   
    }
    @media (max-width: 425px) {
        font-size: 16px;   
    }
`;
