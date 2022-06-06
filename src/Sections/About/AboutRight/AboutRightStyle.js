import styled from "styled-components";

export const RightDiv = styled.div`
    float: right;
    margin: auto 100px;
    @media (max-width: 600px) {
        clear: both;
        width: 75%;
        padding-top: 50px;
        margin: auto 50px;
    }
`;

export const Title = styled.p`
    text-align: right;
    font-size: 24px;
    color: #22274E;
    @media (max-width: 600px) {
        font-size: 22px;   
    }
`;

export const Subtitle = styled.p`
    margin: 20px auto;
    font-size: 18px;
    line-height: 35px;
    text-align: justify;
    @media (max-width: 600px) {
        font-size: 16px;   
        line-height: 25px;
        margin: 20px 0;
    }
`;

export const Anchor = styled.a`
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

