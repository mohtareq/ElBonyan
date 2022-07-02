import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Left = styled.div`
    display: flex;
    padding-left: 120px;
    @media (max-width: 1025px) {
        display: none;
    }
`;

export const TopicsDiv = styled.div`
    display: grid;
    margin: 20px;

`;

export const Topics = styled.p`
    font-size: 16px;
    border-bottom: 2px solid #b4b6c5;
    padding: 5px 0;
    margin-bottom: 10px;
`;

export const Topic = styled(Link)`
    padding: 5px 0;
    font-size: 14px;
    text-decoration: none;
    color: #fff;
    :hover {
        color: #F07F1A;
        cursor: pointer;
    }

`;

export const Icon = styled.svg`
    display: none;
`;