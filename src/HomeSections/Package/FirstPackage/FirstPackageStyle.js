import styled from "styled-components";

export const FirstDiv = styled.div`
    margin: auto 100px;
    @media (max-width: 900px) {
        margin: auto 100px;
    }
    @media (max-width: 600px) {
        margin: auto 30px;
    }
`;

export const Title = styled.p`
    font-size: 24px;
    color: #22274E;
    width: 100px;
    margin: auto;
    border-bottom: 3px solid #22274E;
    @media (max-width: 600px) {
        font-size: 22px;   
    }
`;

export const Subtitle = styled.p`
    font-size: 20px;
    margin: 20px auto;
    font-size: 18px;
    text-align: justify;
    line-height: 30px;
    padding: 20px 0;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 16px;   
        text-align: center;
        line-height: 25px;
        width: 100%;
        padding: 20px;
    }
`;