import styled from "styled-components";

export const LogoContainer = styled.svg`
    width: 130px;
    padding-top: 10px;
    margin: auto 50px;
    cursor: pointer;
    @media (max-width: 1300px) {
        width: 100px;
        margin: auto 10px;
    }
    @media (max-width: 768px) {
        width: 100px;
    }
    @media (max-width: 425px) {
        width: 70px;
        margin: auto 10px;
    }
`;