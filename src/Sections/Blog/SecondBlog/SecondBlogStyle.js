import styled from "styled-components";

export const SecDiv = styled.div`
    display: flex;
    margin: auto;
    text-align: center;
    padding: 50px;
    @media (max-width: 1000px) {
        display: grid;
    }
`;

export const Column = styled.div`
    box-shadow: 0px 3px 6px #fff;
    margin: auto;
    width: 30%;
    background: #fff;
    border-radius: 25px;
    @media (max-width: 1000px) {
        display: grid;
    }
`;

export const BlogImg = styled.img`
    width: 100%;
`;

export const PackageP = styled.p`
    font-size: 14px;
    padding: 10px;
    text-align: right;
    margin: auto;
`;

export const AnchorDiv = styled.div`
    text-align: right;
    margin-right: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    :hover {
        color: #F07F1A;
    }
`;

export const Anchor = styled.a`
    font-size: 14px;
    color: #22274E;
    cursor: pointer;
    :hover {
        color: #F07F1A;
    }
`;

