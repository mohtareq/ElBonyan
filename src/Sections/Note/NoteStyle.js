import styled from "styled-components";
import myImage from '../../Assets/background.png';

export const All = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 100%;
    height: 550px;

`;

export const NoteSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 70%;
    height: 70%;
    background-image: url(${myImage});
    background-position: center;
    background-size: cover;
    border-radius: 25px;
    color: #fff;
`;

export const Right = styled.div`
    float: right;
    width: 50%;
    margin: auto;
`;

export const Left = styled.div`
    float: left;
    margin: auto;
`;

export const Title = styled.p`
    font-size: 22px;

`;

export const SubTitle = styled.p`
    text-align: justify;
    font-size: 16px;
    line-height: 40px;
`;

export const NoteImg = styled.img`
    width: 180px; 
    height: 200px;
    @media (max-width: 800px) {
        width: 120px; 
        height: 150px;
    }
`;

export const Anchor = styled.a`
    background: #F07F1A;
    margin: 15px 0;
    width: 120px;
    height: 40px;
    border-radius: 15px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;  
    cursor: pointer;
    :hover {
        color: #22274E;
    }
    @media (max-width: 900px) {
        width: 100px;
        height: 30px;
        font-size: 12px;   
    }
`;

