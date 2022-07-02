import styled from "styled-components";
import { Link } from 'react-router-dom';

export const All = styled.div`
    display: grid;
    grid-template-columns: auto auto auto; 
    padding: 0 120px;
    margin-bottom: 160px;
    @media (max-width: 600px) {
        display: block;
        padding: 0 20px;
    }
`;

export const Box = styled(Link)`
    margin: 30px;
    border: 2px dashed #0000005A;
    // border: 2px dashed #22274E;
    border-radius: 15%;  
    padding: 30px;
    box-shadow: 1px 6px 36px #0000001A;
    text-decoration: none;
    color: #434343;    
    @media (max-width: 600px) {
        width: 100%;
        margin: 30px auto;
    }
`;

export const IconDiv = styled.div`
    margin: auto;
    justify-content: center;
    text-align: center;
`;

export const Icon = styled.svg`
    width: 80px;
    height: 80px;
    margin-bottom: 40px;
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
    margin-bottom: 24px;
    @media (max-width: 600px) {
        font-size: 16px;
    }
`;

export const SubTitle = styled.div`
    font-size: 14px;
    @media (max-width: 900px) {
        font-size: 10px;
    }
`;