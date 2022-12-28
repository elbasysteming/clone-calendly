import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Link = styled(LinkRouter)`
    text-decoration: none;
    color: #0d6efd;
    border-radius: 5px;
    width: 100px;
    padding: 10px;
    align-self: center;
    justify-self: center;
    &:hover {
        color: #333333;
    }
`;

export const Card = styled.div`
    display: grid;
    grid-template-rows: 50px auto 50px;
    background-color: #ffffff;
    border: solid 1px #e6e9f0;
    border-radius: 8px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 3px;
    text-align: center;
    color: #333333;
    font-size: 14px;
    width: 100%;
    text-align: left;
    min-height: 300px;
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr auto);
    padding: 10px 20px 10px 20px;
    height: auto;
    border-bottom: solid 1px #e6e9f0;
    align-self: center;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 20px;
`;

export const Footer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-self: center;
    text-align: center;
    padding: 5px;
    border-top: solid 1px #e6e9f0;
`;
