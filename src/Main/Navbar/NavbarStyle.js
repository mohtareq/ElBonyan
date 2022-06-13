import styled from "styled-components";

export const NavBar = styled.nav`
    width: 100%;
    height: auto;
    z-index: 1000;
    padding: 0 120px;
    background: #bcbfc22a;

    @media (min-width: 2000px) {
        padding: 0 200px;
    }
    @media (max-width: 600px) {
        padding: 0px;
        background-color: #fff;
    }
`;

