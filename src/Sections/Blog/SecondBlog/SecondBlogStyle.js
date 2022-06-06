import styled from "styled-components";

export const SecDiv = styled.div`
    display: flex;
    margin: 50px;
    @media (max-width: 600px) {
        display: flow-root;
        margin: 0px auto;
        padding: 0px;
    }
`;

export const Column = styled.div`
    box-shadow: 0px 3px 6px #fff;
    margin: 0 50px;
    width: 100%;
    background: #fff;
    border-radius: 25px;
    @media (max-width: 900px) {
        margin: 0 10px;
    }
    @media (max-width: 600px) {
        width: 90%;
        height: auto;
        margin: 50px auto;
    }
`;

export const BlogImg = styled.img`
    width: 100%;
`;

export const Title = styled.p`
    font-size: 16px;
    padding: 10px;
    text-align: right;
    margin: auto;
    @media (max-width: 900px) {
        font-size: 18px;
    }
    @media (max-width: 600px) {
        font-size: 10px;
    }
`;

export const SubTitle = styled.p`
    font-size: 14px;
    padding: 10px;
    height: 90px;
    text-align: justify;
    @media (max-width: 600px) {
        font-size: 8px;
        height: 40px;
    }
`;

export const AnchorDiv = styled.div`
    text-align: right;
    margin-right: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    :hover {
        color: #F07F1A;
    }
    @media (max-width: 600px) {
        margin-right: 10px;
        margin-bottom: 0px;
    }
`;

export const Anchor = styled.a`
    font-size: 14px;
    color: #22274E;
    cursor: pointer;
    :hover {
        color: #F07F1A;
    }
    @media (max-width: 600px) {
        font-size: 8px;
    }
`;

