import styled from "styled-components";

export const Label = styled.label`
    color: #333333;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
    font-weight: 600;
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #dedede;
    height: 40px;
    width: 100%;
    background: #f8f9fc;
    color: #666666;
    &:focus {
        border: none;
        outline: 2px solid rgb(0, 0, 0, 0.5);
    }
`;
