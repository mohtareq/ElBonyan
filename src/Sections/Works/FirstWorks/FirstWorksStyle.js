import styled from "styled-components";

export const FirstDiv = styled.div`
    margin: auto;
    padding: 20px 0;
    text-align: center;
    @media (max-width: 600px) {
        padding: 0;
        width: 100%;
    }
`;

export const Title = styled.p`
    font-size: 30px;
    color: #22274E;
    border-bottom: 4px solid #22274E;
    width: 200px;
    margin: auto;
    @media (max-width: 900px) {
        font-size: 26px;   
        margin: auto;
    }
    @media (max-width: 600px) {
        font-size: 22px;   
        width: 100px;
    }
`;

export const Subtitle = styled.p`
    padding: 20px 0;
    font-size: 20px;
    @media (max-width: 900px) {
        font-size: 24px;  
        padding-top: 50px;
    }
    @media (max-width: 600px) {
        font-size: 16px;   
    }
`;
