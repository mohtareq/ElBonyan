import styled from "styled-components";

export const NavBar = styled.nav`
    position: absolute;
    width: 100%;
    margin: auto;
    padding: 0 20px;
    z-index: 10;
    @media (min-width: 2000px) {
        padding: 0 200px;
    }
    @media (max-width: 600px) {
        background-color: #fff;
    }
`;

