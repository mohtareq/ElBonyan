import styled from "styled-components";

export const Intro = styled.div`
    background: #bcbfc22a;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
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
    @media (max-width: 900px) {
        width: 120px;
        height: 30px;
        font-size: 12px;   
    }
`;