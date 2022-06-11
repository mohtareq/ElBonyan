import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    padding: 50px 120px !important;
    @media (max-width: 600px) {
        padding: 0px 20px !important;
        display: block;
        margin-bottom: 24px;
    }
`;

export const RightImg = styled.img`
    width: 480px;
    height: 280px;
    z-index: 0;
    margin: auto 0;
    @media (max-width: 600px) {
        width: 100%;
        height: 157px;
        margin-bottom: 17px;
    }
`;

export const Topic = styled.div`
    width: 100%;
    height: 230px;
    border-radius: 20px;
    box-shadow: 0px 1px 5px #888888;
    padding: 30px;
    margin: auto -30px;
    background-color: white;
    z-index: 2;
    @media (max-width: 600px) {
        width: 100%;
        height: auto;
        margin: auto;
        padding: 17px 20px;
    }
`;

export const Title = styled.p`
    font-size: 22px;
    margin-bottom: 10px;
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const SubTitle = styled.p`
    font-size: 16px;
    @media (max-width: 600px) {
        font-size: 12px;
        line-height: 30px;
    }
`;