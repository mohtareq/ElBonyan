import styled from "styled-components";

export const Right = styled.div`
    float: right;
    padding-right: 120px;
    width: 50%;
    @media (max-width: 1024px) {
        width: 100%;
        margin: 20px auto;
        padding-right: 0px;
        justify-content: center;
        text-align: center;
    }
`;

export const LogoDiv = styled.div`
    padding: 15px 0;
`;

export const FooterLogo = styled.img`
    width: 130px;
    @media (max-width: 1024px) {
        width: 116.22px;
    }
`;

export const Topic = styled.p`
    justify-content: center;
    font-size: 14px;
    line-height: 30px;
    margin-bottom: 10px;
    @media (max-width: 1024px) {
        display: none;
    }
`;

export const EmailForm = styled.form`
    display: flex;
    @media (max-width: 1024px) {
        width: 100%;
        justify-content: center;
    }
`;

export const Email = styled.input`
    display: inline-block;
    width: auto;
    color: #fff;
    background: #3f4366;
    border-radius: 0 20px 20px 0;
    text-indent: 10px; 
`;

export const EmailLabel = styled.label`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 20px 0 0 20px;
    background-color: #fff;
    color: #103AA0;
    cursor: pointer;
    @media (max-width: 1024px) {
    font-size: 13px;
    }
`;
