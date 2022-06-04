import styled from "styled-components";

export const FirstDiv = styled.div`
    margin: 10px auto;
    @media (max-width: 900px) {
        margin: auto;
    }
`;

export const Title = styled.p`
    text-align: center;
    font-size: 22px;
    color: #22274E;
    width: 100px;
    margin: auto;
    border-bottom: 3px solid #22274E;
    @media (max-width: 900px) {
        font-size: 26px;   
    }
    @media (max-width: 600px) {
        padding-top: 0px;
        font-size: 22px;   
    }
`;

export const Subtitle = styled.p`
    font-size: 20px;
    margin: auto;
    font-size: 20px;   
    text-align: justify;
    line-height: 30px;
    width: 80%;
    padding: 20px;
    text-align: center;
    @media (max-width: 1300px) {
        font-size: 18px;
    }
    @media (max-width: 600px) {
        font-size: 16px;   
        text-align: justify;
        line-height: 30px;
        width: 100%;
        padding: 20px;
    }
`;
