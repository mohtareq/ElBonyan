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
    padding-top: 20px;
    font-size: 20px;
    margin: auto;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 16px;   
        text-align: justify;
        line-height: 30px;
        width: 100%;
        padding: 20px;
    }
`;
