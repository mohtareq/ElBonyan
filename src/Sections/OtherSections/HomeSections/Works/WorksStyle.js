import styled from "styled-components";
import { Link } from 'react-router-dom';

export const All = styled.div`
    width: 100%;
    height: auto;
    margin: 20px auto;
    padding: 50px 0;
    display: flex;
    justify-content: center;
    @media (max-width: 600px) {
        height: auto;
        padding: 40px 0;
    }
`;

export const Intro = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    display: grid;
    @media (max-width: 600px) {
        display: grid;
    }
`;


export const Anchor = styled(Link)`
    width: 150px;
    background: transparent linear-gradient(248deg, #22274E 0%, #414776 100%) 0% 0% no-repeat padding-box;
    width: 200px;
    height: 50px;
    border-radius: 15px;
    margin: 10px auto;
    display: flex;
    justify-content: center; 
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
        color: #F07F1A;
    }
    @media (max-width: 900px) {
        display: none;
    }
`;


