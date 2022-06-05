import styled from "styled-components";

export const FirstDiv = styled.div`
    margin: auto;
    padding: 20px;
    @media (max-width: 900px) {
        padding: 0px;
    }
`;

export const Title = styled.p`
    text-align: center;
    font-size: 30px;
    color: #22274E;
    width: 100px;
    margin: auto;
    border-bottom: 3px solid #22274E;
    @media (max-width: 900px) {
        padding-top: 50px;
        font-size: 26px;   
    }
    @media (max-width: 600px) {
        padding-top: 22px;
        font-size: 22px;   
    }
`;

export const Subtitle = styled.p`
    padding: 20px 0;
    font-size: 18px;
    width: 100%;
    margin: auto;
    text-align: center;
    @media (max-width: 900px) {
        font-size: 24px;   
    }
    @media (max-width: 600px) {
        width: 100%;
        font-size: 16px;   
        text-align: center;
        line-height: 30px;
        padding: 0 20px;
    }
`;
