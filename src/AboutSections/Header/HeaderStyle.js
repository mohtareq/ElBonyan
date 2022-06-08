import styled from "styled-components";
import Banner from '../../Assets/banner.png';

export const Container = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    background-image: url(${Banner});
    background-position: center;
    background-size: cover;
`;

export const Title = styled.p`
    font-size: 40px;
    color: #FFF;
    margin: 250px 120px auto auto;
`;