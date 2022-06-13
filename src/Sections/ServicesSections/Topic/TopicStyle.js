import styled from "styled-components";

export const Info = styled.div`
    width: 100%;
    padding: 30px 120px;
    @media (max-width: 600px) {
        padding: 0px 20px;
        margin: 24px auto 40px auto;
    }
`;

export const Topic = styled.p`
    font-size: 18px;
    line-height: 35px;
    margin: 100px 0;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 25px;
        margin: 50px 0;
        text-align: justify;
        padding-bottom: 24px;
    }
`;