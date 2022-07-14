import styled from "styled-components";

export const NavBar = styled.nav`
    width: 100%;
    height: 10vh;
    padding: 0 120px;
    background: #bcbfc22a;
    @media (min-width: 1750px) {
        padding: 0 240px;
    }
    @media (max-width: 600px) {
        padding: 0px;
        background-color: #fff;
    }
`;

