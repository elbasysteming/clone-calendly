import styled from "styled-components";

export const Input = styled.input`
    padding: 10px 10px 10px 10px;
    border-radius: 8px;
    border: 1px solid #dedede;
    height: 40px;
    width: 80px;
    background: #f8f9fc;
    color: #666666;
    &:focus {
        border: none;
        outline: 1px solid rgb(0, 0, 0, 0.5);
    }
`;

export const Item = styled.div`
    display: grid;
    grid-template-columns: 30px 150px 1fr;
    border-bottom: solid 1px #e6e9f0;
    width: 100%;
    padding: 5px;

    &:last-child {
        border-bottom: none;
    }

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 20px 80px 1fr;
        width: 100%;
    }
`;

export const Row = styled.div`
    padding: 0px;
`;

export const Details = styled.div`
    display: grid;
    grid-template-columns: 100px 20px 100px 1fr;
    width: 100%;
    padding: 3px;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 100px 20px 100px 1fr;
        width: 100%;
    }
`;

export const Separator = styled.p`
    line-height: 35px;
`;

export const ErrorMessage = styled.p`
    color: #dc3545;
    line-height: 35px;
`;
