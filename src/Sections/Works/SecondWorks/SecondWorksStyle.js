import styled from "styled-components";

export const SecDiv = styled.div`
    margin: auto;
    text-align: center;
    margin-bottom: 50px;
    @media (max-width: 768px) {
        margin-bottom: 30px;
    }
    @media (max-width: 600px) {
        margin-bottom: 50px;
    }
`;

export const WorksImg = styled.img`
    width: 300px; 
    height: 250px;
    @media (max-width: 768px) {
        width: 250px; 
        height: 200px;    
    }
    @media (max-width: 600px) {
        width: 160px; 
        height: 172px;    
    }
`;
