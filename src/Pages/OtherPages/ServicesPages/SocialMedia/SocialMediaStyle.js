import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
`;

export const Info = styled.div`
    width: 100%;
    padding: 0px 120px;
    margin: 50px 0;
    @media (max-width: 600px) {
        padding: 0px 20px;
        margin: 24px auto 40px auto;
    }
`;

export const Topic = styled.p`
    font-size: 18px;
    line-height: 35px;
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
        padding-bottom: 24px;
    }
`;

export const SubTopic = styled.p`
    font-size: 18px;
    line-height: 35px;
    margin: 20px 0;
    color: #22274E;
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
        padding-bottom: 24px;
    }
`;

export const Anchor = styled(Link)`
    margin: 70px auto;
    width: 150px;
    height: 40px;
    background: transparent linear-gradient(248deg, #22274E 0%, #414776 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #1F7DA129;
    border-radius: 20px;
    display: flex;  
    justify-content: center;  
    align-items: center; 
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    :hover {
        color: #F07F1A;
    }
    @media (max-width: 600px) {
        font-size: 16px;   
        width: 140px;
        height: 50px;
    }
`;
