import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const Form = styled.form`
    margin: 50px 120px;
    display: flex;
`;

export const Field = styled.div`
    width: 100%;
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
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    box-shadow: inset 0 1px 2px #cccccc05;
    border: 1px solid #E3E7F0;
    background-color: #E3E7F0;
`;

export const InputAlone = styled.input`
    font-size: 20px;
    width: 95%;
    padding: 10px;
    border-radius: 5px;
    box-shadow: inset 0 1px 2px #cccccc05;
    border: 1px solid #E3E7F0;
    background-color: #E3E7F0;
`;

export const Star = styled.span`
    color: red;
`;

export const Textarea = styled.textarea`
    font-size: 20px;
    width: 95%;
    height: 200px;
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
    margin: 50px auto;
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
