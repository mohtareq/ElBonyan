import styled from "styled-components";

export const NavBar = styled.nav`
    position: absolute;
    width: 100%;
    margin: auto;
    z-index: 10;
    padding: 0 120px;
    @media (min-width: 2000px) {
        padding: 0 200px;
    }
    @media (max-width: 600px) {
        padding: 0px;
        background-color: #fff;
    }
`;

