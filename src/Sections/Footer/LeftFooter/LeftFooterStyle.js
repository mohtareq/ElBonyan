import styled from "styled-components";

export const Left = styled.div`
    display: flex;
    padding-left: 120px;

    @media (max-width: 1024px) {
        display: block;
        width: 90%;
        margin: 20px auto;
    }
    @media (max-width: 600px) {
        display: flow-root;
        width: 90%;
        padding-left: 0;
        margin: 20px auto;

    }
`;

export const TopicsDiv = styled.div`
    display: grid;
    margin: 20px;
    @media (max-width: 900px) {
        margin: 0 auto;
    }
`;

export const Topics = styled.p`
    font-size: 16px;
    border-bottom: 2px solid #b4b6c5;
    padding: 5px 0;
    margin-bottom: 10px;
    @media (max-width: 1024px) {
        font-size: 18px;
    }
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

export const Topic = styled.a`
    padding: 5px 0;
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    :hover {
        color: #F07F1A;
        cursor: pointer;
    }
    @media (max-width: 1024px) {
        display: none;
    }
`;


export const Icon = styled.svg`
    display: none;
    @media (max-width: 900px) {
        display: flex;
        margin: -30px 95%;

    }
`;