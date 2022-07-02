import styled from "styled-components";

export const Info = styled.div`
    width: 100%;
    padding: 30px 120px;
    @media (max-width: 600px) {
        padding: 0px 20px;
        margin: 24px auto 40px auto;
    }
`;

export const FirstTopic = styled.p`
    font-size: 20px;
    line-height: 40px;
    color: #22274E;
    margin-bottom: 30px;
    @media (max-width: 600px) {
        font-size: 16px;
        margin-bottom: 24px;
        line-height: 30px;
        text-align: justify
    }
`;

export const Title = styled.p`
    text-align: right;
    font-size: 28px;
    color: #22274E;
    width: 100px;
    border-bottom: 3px solid #22274E;
    @media (max-width: 600px) {
        font-size: 22px;   
        border-bottom: 1px solid #22274E;
        margin-bottom: 24px;
    }
`;
export const Topic = styled.p`
    font-size: 18px;
    line-height: 35px;
    margin: 10px 0;
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
        padding-bottom: 24px;
    }
`;