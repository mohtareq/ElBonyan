import styled from "styled-components";

export const SecDiv = styled.div`
    padding: 0;
`;

export const Box = styled.div`
    padding: 10px;
    border: 1px dashed #22274E;
    border-radius: 10%;  
    box-shadow: 1px 6px 36px #0000001A;
    opacity: 1;
    background: #fff;
    width: 300px;
    height: auto;
    margin: 50px auto;
    @media (max-width: 900px) {
        width: 200px;
        height: 200px;
    }
    @media (max-width: 600px) {
        width: 140px;
        height: 180px;
        padding: 30px 0;
        border: 2px dashed #0000005A;
        box-shadow: 0px 0px;
    }

`;

export const Icon = styled.svg`
    width: 80px;
    height: 90px;
    @media (max-width: 900px) {
        width: 70px;
        height: 70px;    
    }
    @media (max-width: 600px) {
        width: 58px;
        height: 58px;    
    }
`;

export const Title = styled.div`
    font-size: 18px;
    @media (max-width: 600px) {
        font-size: 16px;
    }
`;

export const SubTitle = styled.div`
   font-size: 14px;
    @media (max-width: 900px) {
        display: none;
    }
`;