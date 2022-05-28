import styled from "styled-components";

export const NavTopics = styled.div`
    float: left;
    margin: auto 100px;
    padding: 20px;
    @media (max-width: 800px) {
        display: none;
    }
    @media (max-width: 1300px) {
        margin: auto 50px;
        padding: 20px 10px;
    }
`;

export const NavAnchor = styled.a`
    color: #434343;    
    font-size: 18px; 
    text-decoration: none;
    margin: auto 20px;
    padding-top: 10px;
    :hover,
    :focus {
    color: #F07F1A;
    border-top: 2px solid #F07F1A;
    }

    @media (max-width: 1300px) {
        font-size: 14px; 
        margin: auto 10px;
    }
`;

