import styled from "styled-components";
import Banner from '../../Assets/AboutPage/banner.png';

export const Container = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    background-image: url(${Banner});
    background-position: center;
    background-size: cover;
    @media (max-width: 600px) {
        height: 180px;
    }
`;

export const Title = styled.p`
    font-size: 40px;
    color: #FFF;
    margin: auto;
    @media (max-width: 600px) {
        font-size: 20px;
        padding-top: 80px;
        margin: auto 20px;
    }
`;