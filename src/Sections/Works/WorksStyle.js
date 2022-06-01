import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    height: 100vh;
    margin: auto;
    display: flex;
    justify-content: center;
    background: #bcbfc22a;
    @media (max-width: 800px) {
        display: grid;
    }
`;

export const Intro = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    display: grid;
`;


export const Anchor = styled.a`
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
    @media (max-width: 768px) {
        margin: auto;
        width: 120px;
        height: 30px;
        font-size: 12px;   
    }
`;


