import styled from "styled-components";

export const Box = styled.div`
    box-shadow: 1px 6px 36px #0000001A;    
    border-radius: 60px;
    background: #fff;
    margin: 70px auto;
    width: 90%;
    padding: 30px;
    height: auto;
    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const StarDiv = styled.div`
    margin: auto;
`;

export const Star = styled.svg`
    width: 120px;
    height: 25px;
    @media (max-width: 768px) {
        width: 80px;
        height: 25px;
    }
`;

export const Topic = styled.p`
    font-size: 14px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const PersonDiv = styled.div`
    margin: auto;
    display: inline-flex;
    padding-top: 20px;
    @media (max-width: 768px) {
        padding-top: 10px;
    }
`;

export const PersonImg = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 15px;
    @media (max-width: 768px) {
        width: 40px;
        height: 40px;
    }
`;

export const PersonInfo = styled.div`
    margin: auto;
`;

export const PersonName = styled.p`
    font-size: 14px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const PersonPosition = styled.p`
    font-size: 14px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;