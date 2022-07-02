import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: auto;
`;

export const Info = styled.div`
    width: 100%;
    margin: 30px auto;
    justify-content: center;
    text-align: center;
    :last-child {
        margin-bottom: 100px;
    }
    @media (max-width: 600px) {
        padding: 0px 20px;
        margin: 24px auto 40px auto;
    }
`;

export const Topic = styled.p`
    font-size: 16px;
    margin: auto;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 80px;
    border-radius: 10px;
    color: #434343;
    padding: 5px;
    background: #E4E7EC;
    cursor: pointer;
`;
