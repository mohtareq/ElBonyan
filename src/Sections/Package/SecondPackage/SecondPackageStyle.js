import styled from "styled-components";

export const SecDiv = styled.div`
    display: flex;
    margin: auto;
    padding: 50px;
    @media (max-width: 1300px) {
        display: grid;
    }
`;

export const Column = styled.div`
    width: 280px;
    padding: 10px;
    box-shadow: 0px 3px 6px #1F7DA129;
    border-radius: 55px;
    background: #bcbfc22a;
    margin: 0 20px;
    border: 2px dashed #bcbfc22a;
    @media (max-width: 1300px) {
        width: 95%;
        margin: 20px auto;
        padding: 20px;
    }
`;

export const PackageTopic = styled.div`
    font-size: 16px;
    @media (max-width: 1300px) {
        font-size: 14px;
    }
`;


export const Anchor = styled.a`
    background: transparent linear-gradient(248deg, #22274E 0%, #414776 100%) 0% 0% no-repeat padding-box;
    width: 100px;
    height: 35px;
    border-radius: 15px;
    margin: 10px auto;
    display: flex;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    justify-content: center;  
    align-items: center;
    cursor: pointer;
    :hover {
        color: #F07F1A;
    }
    @media (max-width: 1300px) {
        font-size: 14px;
    }
`;

export const PackageP = styled.p`
    font-size: 14px;
    text-align: right;
    @media (max-width: 1300px) {
        font-size: 10px;
    }
`;