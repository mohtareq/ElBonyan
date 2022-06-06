import styled from "styled-components";

export const SecDiv = styled.div`
    margin: auto 100px;
    @media (max-width: 900px) {
        margin: auto;
    }   
`;

export const Box = styled.div`
    padding: 30px;
    border: 2px dashed #22274E;
    border-radius: 15%;  
    box-shadow: 1px 6px 36px #0000001A;
    opacity: 1;
    background: #fff;
    height: 350px;
    margin: 30px;
    margin-bottom: 80px;
    @media (max-width: 900px) {
        width: 200px;
        height: 200px;
    }
    @media (max-width: 600px) {
        width: 150px;
        height: 202px;
        padding: 20px;
        margin: auto;
        margin-bottom: 80px;
        border: 2px dashed #0000005A;
        box-shadow: 0px 0px;
    }
`;

export const Icon = styled.svg`
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
    @media (max-width: 900px) {
        width: 70px;
        height: 70px;    
    }
    @media (max-width: 600px) {
        margin: 10px;
        width: 58px;
        height: 58px;    
    }
`;

export const Title = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    @media (max-width: 600px) {
        font-size: 16px;
    }
`;

export const SubTitle = styled.div`
    font-size: 14px;
    justify-content: center;

    @media (max-width: 900px) {
        display: none;
    }
`;