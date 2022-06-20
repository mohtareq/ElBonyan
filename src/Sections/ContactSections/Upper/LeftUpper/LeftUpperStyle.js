import styled from "styled-components";

export const All = styled.div`
    width: 50%;
`;

export const Left = styled.div`
    width: 90%;
`;

export const Form = styled.form`
    width: 100%;
`;

export const Field = styled.div`
    margin-bottom: 15px;
`;

export const Label = styled.label`
    display: block;
    line-height: 1.5;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 5px;
    opacity: 0.9;

`;

export const Input = styled.input`
    font-size: 20px;
    width: 100%;
    padding: 10px 10px;
    border-radius: 5px;
    box-shadow: inset 0 1px 2px #cccccc05;
    border: 1px solid #E3E7F0;
    background-color: #E3E7F0;

`;

export const Textarea = styled.textarea`
    font-size: 20px;
    width: 100%;
    padding: 10px 10px;
    border-radius: 5px;
    box-shadow: inset 0 1px 2px #cccccc05;
    border: 1px solid #E3E7F0;
    background-color: #E3E7F0;
`;

export const Anchor = styled.a`
    width: 150px;
    height: 40px;
    background: transparent linear-gradient(248deg, #22274E 0%, #414776 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #1F7DA129;
    border-radius: 20px;
    display: flex;  
    justify-content: center;  
    align-items: center; 
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    :hover {
        color: #F07F1A;
    }
    @media (max-width: 600px) {
        font-size: 16px;   
        width: 140px;
        height: 50px;
    }
`;
