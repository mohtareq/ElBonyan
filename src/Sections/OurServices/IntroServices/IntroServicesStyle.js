import styled from "styled-components";

export const FirstDiv = styled.div`
    margin: 40px auto;
`;

export const Title = styled.p`
    text-align: center;
    font-size: 30px;
    color: #22274E;
    width: 100px;
    margin: auto;
    border-bottom: 3px solid #22274E;
    @media (max-width: 768px) {
        padding-top: 100px;
        font-size: 20px;   
    }
    @media (max-width: 600px) {
        padding-top: 0px;
        font-size: 22px;   
    }
`;

export const Subtitle = styled.p`
    padding-top: 20px;
    font-size: 20px;
    width: 80%;
    margin: auto;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 16px;   
    }
    @media (max-width: 600px) {
        font-size: 16px;   
        text-align: justify;
        line-height: 30px;
    }
`;
