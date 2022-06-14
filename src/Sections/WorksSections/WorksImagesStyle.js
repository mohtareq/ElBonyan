import styled from "styled-components";

export const All = styled.div`
    display: grid;
    grid-template-columns: auto auto auto; 
    padding: 100px;
    @media (max-width: 600px) {
        display: block;
        padding: 0 20px;
    }
`;

export const WorksImg = styled.img`
    width: auto; 
    height: 300px;
    margin: 20px 0;
`;
