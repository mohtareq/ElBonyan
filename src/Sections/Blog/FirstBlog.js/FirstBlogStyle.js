import styled from "styled-components";

export const FirstDiv = styled.div`
    padding-top: 10px;
    margin: 20px auto;
`;

export const Title = styled.p`
    text-align: center;
    font-size: 30px;
    color: #22274E;
    width: 100px;
    margin: auto;
    border-bottom: 2px solid #22274E;
    @media (max-width: 900px) {
        font-size: 26px;
    }
    @media (max-width: 600px) {
        font-size: 22px;
    }
`;

export const Subtitle = styled.p`
    padding: 10px;
    font-size: 20px;
    width: 80%;
    margin: auto;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 16px;   
        text-align: justify;
        line-height: 30px;
        }
`;
