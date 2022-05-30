import styled from "styled-components";

export const Left = styled.div`
    display: flex;
`;

export const TopicsDiv = styled.div`
    display: grid;
    margin: 30px 50px;
`;

export const Topics = styled.p`
    font-size: 20px;
    border-bottom: 2px solid #b4b6c5;
    padding: 5px 0;
    margin-bottom: 15px;
`;

export const Topic = styled.a`
    padding: 5px 0;
    font-size: 16px;
    text-decoration: none;
    color: #fff;
    :hover {
        color: #F07F1A;
        cursor: pointer;
    }
`;