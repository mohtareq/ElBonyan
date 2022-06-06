import styled from "styled-components";

export const LeftDiv = styled.div`
    float: left;
    margin: auto 100px;
    @media (max-width: 900px) {
        margin: auto;
    }
    @media (max-width: 600px) {
        margin: auto 50px;
    }
`;

export const HomeImg = styled.img`
    width: 285px;
    height: 285px;
    @media (max-width: 900px) {
        width: 400px; 
        height: 400px;    
    }
    @media (max-width: 600px) {
        width: 307px;
        height: 353.3px;
    }
`;
