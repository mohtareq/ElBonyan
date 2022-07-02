import styled from "styled-components";

export const SecDiv = styled.div`
    display: flex;
    margin: 50px auto;
    @media (max-width: 600px) {
        display: flow-root;
        margin: 0px auto;
        padding: 0px;
    }
`;

export const Column = styled.div`
    width: 100%;
    height: auto;
    padding: 20px;
    margin: 0 40px auto;
    box-shadow: 0px 3px 6px #1F7DA129;
    border-radius: 55px;
    background: #bcbfc22a;
    border: 2px dashed #bcbfc22a;
    @media (max-width: 900px) {
        margin: 0 5px auto 5px;
    }
    @media (max-width: 600px) {
        width: 90%;
        margin: 50px auto;
        padding: 20px;
        border: 2px dashed #0000005A;
    }
`;

export const PackageTopic = styled.div`
    font-size: 16px;
    @media (max-width: 600px) {
        font-size: 19px;
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
    @media (max-width: 900px) {
        width: 130px;
        height: 35px;
        font-size: 12px;
    }
    @media (max-width: 600px) {
        width: 164px;
        height: 45px;
        font-size: 16px;
    }
`;

export const Para = styled.div`
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid;
    align-items: center;
`;

export const True = styled.svg`
    width: 12px;
    height: 12px;
    margin:5px;
`;

export const PackageP = styled.p`
    font-size: 12px;
    text-align: right;
    @media (max-width: 900px) {
        font-size: 12px;
    }
    @media (max-width: 600px) {
        width: 85%;
        margin: auto;
        padding-top: 20px;
        font-size: 13px;
    }
`;