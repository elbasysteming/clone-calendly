import styled, { css } from "styled-components";

export const Card = styled.div`
    margin-top: 100px;
    background-color: #ffffff;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 3px;
    border-radius: 8px;
    border: solid 1px #e6e9f0;
    text-align: center;
    color: #333333;
    font-size: 14px;
    border-radius: 5px;
    width: 100%;
    text-align: left;

    @media (min-width: 769px) {
        min-height: 500px;
    }

    @media (max-width: 768px) {
        border: none;
        margin-top: 10px;
        padding: 10px;
        min-height: 100px;
    }
`;

export const Grid = styled.div`
    @media (min-width: 769px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        margin: 0 auto;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
    }
`;

export const List = styled.div`
    padding: 5px 0 5px 0;
`;

export const Hours = styled.div`
    height: 500px;
    overflow-y: scroll;
    @media (max-width: 768px) {
        height: 300px;
        margin-top: 50px;
        padding: 5px;
    }
`;

export const BookingDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Column = styled.div`
    padding: 30px;
    height: auto;
    ${props =>
        props.border &&
        css`
             {
                border-right: solid 1px #e6e9f0;
            }
        `}
    @media (min-width: 769px) {
        min-height: 500px;
    }
`;

export const Titulo = styled.h3`
    padding-bottom: 20px;
`;

export const DateBooking = styled.div`
    padding-bottom: 20px;
    margin-top: -10px;
    font-style: italic;
`;
