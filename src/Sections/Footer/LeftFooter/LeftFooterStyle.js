import styled from "styled-components";

export const Left = styled.div`
    display: flex;
    @media (max-width: 768px) {
        display: block;
        width: 80%;
        margin-right: 30px;
        margin-bottom: 20px;
    }
`;

export const TopicsDiv = styled.div`
    display: grid;
    margin: 30px 50px;
    @media (max-width: 1150px) {
        margin: 10px 20px;
    }
    @media (max-width: 768px) {
        margin: auto;
    }
`;

export const Topics = styled.p`
    font-size: 20px;
    border-bottom: 2px solid #b4b6c5;
    padding: 5px 0;
    margin-bottom: 15px;
    @media (max-width: 1150px) {
        font-size: 16px;
    }
`;

export const Topic = styled.a`
    padding: 5px 0;
    font-size: 16px;
    text-decoration: none;
    color: #fff;
    :hover {
        color: #F07F1A;
        cursor: pointer;
    }
    @media (max-width: 1150px) {
        font-size: 12px;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;