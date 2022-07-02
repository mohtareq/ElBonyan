import styled from "styled-components";

export const NavBar = styled.nav`
    width: 100%;
    z-index: 1000;
    padding: 0 120px;
    @media (min-width: 1750px) {
        padding: 0 240px;
    }
    @media (max-width: 600px) {
        padding: 0px;
        background-color: #fff;
    }
`;

