import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    background-color: #fff;
`;

export const FormWrapper = styled.form`
    background:  #f4f4f4;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
`;

export const Input = styled.input`
    width: 93%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
`;

export const Button = styled.button`
    background: #5ccb5f;
    color: #fff;
    padding: 12px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    margin-left: 0;

    &:hover {
        background: #4aaf4a;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none; 
`

export const ButtonVoltar = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;  
    margin-top: 50px;
    background-color: #ccc;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
    
    
    i {
        margin-right: 8px; 
    }

    &:hover {
        background-color: #bbb;
    }
`;
