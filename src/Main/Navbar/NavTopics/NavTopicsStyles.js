import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavTopics = styled.div`
    float: left;
    padding-top: 20px;
    @media (min-width: 2000px) {
        margin-left: 100px;
        padding-top: 30px;
    }
    @media (max-width: 900px) {
        display: none;
    }
`;

export const NavAnchor = styled(Link)`
    color: #434343;    
    padding-top: 15px;
    font-size: 15px; 
    text-decoration: none;
    margin-right: 30px;
    cursor: pointer;
    :hover,
    :focus {
    color: #F07F1A;
    border-top: 3px solid #F07F1A;
    }
    @media (min-width: 2000px) {
        font-size: 21px; 
        margin-right: 50px;
    }
    @media (max-width: 1024px) {
        font-size: 12px; 
    }
`;

