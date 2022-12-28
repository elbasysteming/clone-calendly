import styled from "styled-components";

export const Card = styled.div`
    background-color: #ffffff;
    border: solid 1px #e6e9f0;
    border-radius: 8px;
    //box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 3px;
    border-bottom: solid 1px #e6e9f0;
    text-align: center;
    color: #333333;
    font-size: 14px;
    margin: 0 auto;
    width: 700px;
    text-align: left;
    min-height: 500px;
    @media (max-width: 768px) {
        width: 100%;
        border: none;
        box-shadow: none;
    }
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr auto);
    padding: 10px 20px 10px 20px;
    height: auto;
    border-bottom: solid 1px #e6e9f0;
    @media (max-width: 768px) {
        border: none;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    padding: 20px;
`;

export const Footer = styled.div`
    display; grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0px;
    padding: 10px;
    text-align: left;
    border-top: solid 1px #e6e9f0;
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(2, 1fr);
        row-gap: 10px;
        gap: 5px;
        padding: 10px;
        border: none;
    }
`;

export const Label = styled.label`
    color: #333333;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
    font-weight: 600;
`;

export const TextArea = styled.textarea`
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #dedede;
    resize: none;
    height: 100px;
    width: 100%;
    background: #f8f9fc;
    color: #666666;
    &:focus {
        border: none;
        outline: 2px solid rgb(0, 0, 0, 0.5);
    }
`;

export const Input = styled.input`
    padding: 10px 10px 10px 10px;
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

export const Duration = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 0px;
    }
`;

export const BookingTypeItems = styled.div`
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #dedede;
`;

export const Unavailable = styled.p`
    line-height: 35px;
    color: #dc3545;
`;

export const Day = styled.p`
    font-weight: 600;
    line-height: 35px;
`;

export const ErrorMessage = styled.p`
    color: #dc3545;
    line-height: 35px;
`;
