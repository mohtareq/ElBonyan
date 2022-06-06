import styled from "styled-components";

export const All = styled.div`
    margin: 50px 0;
    @media (max-width: 600px) {
        margin: 20px auto;
    }
`;

export const Info = styled.div`
    float: right;
    justify-content: right;
    text-align: right;
    margin: auto;
    @media (max-width: 600px) {
        padding: 0 10px;

    }
`;

export const Title = styled.p`
    text-align: right;
    font-size: 30px;
    color: #22274E;
    border-bottom: 3px solid #22274E;
    @media (max-width: 900px) {
        font-size: 26px;
    }
    @media (max-width: 600px) {
        font-size: 22px;
    }
`;

export const Arraws = styled.div`
    float: left;
    color: #22274E;
    @media (max-width: 600px) {
        display: none;
    }
`;


export const Arraw = styled.svg`
    width: 25px;
    height: 25px;
    margin-top: 10px;
    margin-right: 30px;
    cursor: pointer;
    @media (max-width: 600px) {
        width: 20px;
        height: 20px;
        margin-right: 0px;
    }
`;