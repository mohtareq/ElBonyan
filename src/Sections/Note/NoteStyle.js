import styled from "styled-components";
import myImage from '../../Assets/background.png';

export const All = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 100%;
    height: 50vh;
    margin: auto;
    background: #bcbfc22a;
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
    @media (max-width: 900px) {
        width: 90%;
        height: 70%;
    }
    @media (max-width: 600px) {
        width: 90%;
        height: 159.19px;
    }
`;

export const Right = styled.div`
    float: right;
    width: 55%;
    margin: auto;
`;

export const Left = styled.div`
    float: left;
    margin: auto;
`;

export const Title = styled.p`
    font-size: 22px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
    @media (max-width: 600px) {
        font-size: 12px;
    }
`;

export const SubTitle = styled.p`
    text-align: justify;
    font-size: 16px;
    line-height: 40px;
    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 30px;        
    }
    @media (max-width: 600px) {
        font-size: 9px;
        line-height: 15px;    
    }
`;

export const NoteImg = styled.img`
    width: 180px; 
    height: 200px;
    @media (max-width: 768px) {
        width: 150px; 
        height: 150px;      
    }
    @media (max-width: 600px) {
        width: 94.31px; 
        height: 123.61px;
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
    @media (max-width: 600px) {
        width: 80px;
        height: 28px;
        font-size: 10px;   
    }
`;

