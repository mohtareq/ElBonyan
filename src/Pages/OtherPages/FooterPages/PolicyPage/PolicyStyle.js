import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Info = styled.div`
    width: 100%;
    padding: 30px 120px;
    @media (max-width: 600px) {
        padding: 0px 20px;
        margin: 24px auto 40px auto;
    }
`;

export const Title = styled.p`
    text-align: right;
    font-size: 28px;
    color: #22274E;
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
export const SubTopic = styled.p`
    font-size: 16px;
    line-height: 35px;
    margin: 10px 0;
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 25px;
        text-align: justify;
        padding-bottom: 24px;
    }
`;