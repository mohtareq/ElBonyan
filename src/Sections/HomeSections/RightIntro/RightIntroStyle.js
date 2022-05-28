import styled from "styled-components";

export const RightDiv = styled.div`
    margin: auto;
    width: 40%;
    @media (max-width: 800px) {
        width: 70%;
    }
`;

export const Title = styled.p`
    text-align: right;
    font-size: 30px;
    color: #22274E;
    @media (max-width: 800px) {
        padding-top: 100px;
        font-size: 20px;   
    }
`;

export const Subtitle = styled.p`
    padding: 20px 0;
    font-size: 20px;
    text-align: justify;
    @media (max-width: 900px) {
        font-size: 16px;   
    }
`;

export const Anchor = styled.a`
    width: 150px;
    height: 40px;
    background: transparent linear-gradient(248deg, #22274E 0%, #414776 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #1F7DA129;
    border-radius: 30px;
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
    @media (max-width: 900px) {
        width: 120px;
        height: 30px;
        font-size: 12px;   
    }
`;

