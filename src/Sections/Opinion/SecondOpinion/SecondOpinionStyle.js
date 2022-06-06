import styled from "styled-components";

export const Box = styled.div`
    box-shadow: 1px 6px 36px #0000001A;    
    border-radius: 60px;
    background: #fff;
    margin: 70px auto;
    width: 90%;
    padding: 30px;
    height: 250px;
    @media (max-width: 900px) {
        width: 75%;
    }
    @media (max-width: 600px) {
        border-radius: 20px;
        margin: 20px auto;
        padding: 10px;
        width: 90%;
        height: 150px;
    }
`;

export const StarDiv = styled.div`
    margin: auto;
    display: flex;
    padding-bottom: 10px;
`;

export const Star = styled.svg`
    width: 120px;
    height: 25px;
    @media (max-width: 600px) {
        width: 74.32px;
        height: 13.56px;
    }
`;

export const Topic = styled.p`
    font-size: 14px;
    text-align: justify;
    @media (max-width: 900px) {
        font-size: 20px;
        line-height: 30px;
    }
    @media (max-width: 600px) {
        font-size: 10px;
        line-height: 20px;
    }
`;

export const PersonDiv = styled.div`
    margin: auto;
    display: inline-flex;
    float: right;
    padding-top: 20px;
    @media (max-width: 600px) {
        padding-top: 10px;
        float: right;
    }
`;

export const PersonImg = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 15px;
    @media (max-width: 900px) {
        width: 50px;
        height: 50px;
    }
    @media (max-width: 600px) {
        width: 31.46px;
        height: 32.01px;
    }
`;

export const PersonInfo = styled.div`
    margin: auto;
`;

export const PersonName = styled.p`
    font-size: 14px;
    @media (max-width: 600px) {
        font-size: 8px;
    }
`;

export const PersonPosition = styled.p`
    font-size: 14px;
    color: #B9C4D1;
    @media (max-width: 600px) {
        font-size: 7px;
    }
`;