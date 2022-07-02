import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: -25px auto 100px;
`;

export const Form = styled.form`
    border-radius: 20px;
    cursor: pointer;
    width: 35%;
    height: 50px;
    text-align: center;
    align-items: center;
    display: flex;
    color: #434343;
    background: #E4E7EC;
    :focus {
        border: none;
    }
`;

export const SearchButton = styled.button`
    border: none;
    color: #B1B1B1;
    background: transparent;
    margin: auto 30px;
`;


export const Input = styled.input`
    border: none;
    font-size: 16px;
    background: transparent;
    :focus {
        border: none;
    }
`;

