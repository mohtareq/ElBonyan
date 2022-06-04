import styled from "styled-components";

export const LightContainer = styled.ul`
    display: inherit;
    width: 5%;
    justify-content: center;
    text-align: center;
    align-items: center;
    @media (max-width: 900px) {
        display: none;
    }
`;

export const RightUl = styled.div`
    list-style: none;
`;

export const Icon = styled.svg`
    width: 20px;
    padding-bottom: 10px;
`;

