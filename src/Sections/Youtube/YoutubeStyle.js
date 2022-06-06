import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    height: auto;
    margin: auto;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    background: #bcbfc22a;
`;


export const Tube = styled.iframe`
    width: 60%;
    height: 80vh;
    @media (max-width: 900px) {
        width: 80%;
        height: 400px;
    }
    @media (max-width: 600px) {
        width: 80%;
        height: 200px;
    }
`;