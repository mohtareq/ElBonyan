import styled from "styled-components";

export const Right = styled.div`
    float: right;
    margin-top: 10px;
    padding-right: 70px;
    width: 40%;
    @media (max-width: 768px) {
        width: 100%;
        padding-right: 25px;
    }
`;

export const LogoDiv = styled.div`
    padding: 10px 0;
`;

export const FooterLogo = styled.img`
    width: 150px;
    @media (max-width: 1150px) {
        width: 100px;
    }
    @media (max-width: 768px) {
        width: 150px;
    }
`;

export const Topic = styled.p`
    justify-content: center;
    font-size: 16px;
    line-height: 40px;
    margin-bottom: 20px;
    @media (max-width: 1150px) {
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 10px;
    }
    @media (max-width: 768px) {
        margin: auto;
    }
`;

export const EmailForm = styled.form`
    display: flex;
    @media (max-width: 1150px) {
        padding: 20px 0;
    }
`;

export const Email = styled.input`
    display: inline-block;
    width: auto;
    color: #fff;
    background: #3f4366;
    border-radius: 0 20px 20px 0;
    text-indent: 20px; 
    @media (max-width: 1150px) {
        text-indent: 10px; 
    }
`;

export const EmailLabel = styled.label`
    display: inline-block;
    padding: 10px 15px;
    border-radius: 20px 0 0 20px;
    background-color: #fff;
    color: #413AD6;
    cursor: pointer;
    @media (max-width: 1150px) {
        padding: 5px 5px;
    }
`;
