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

export const Item = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    box-shadow: 0 1px 8px 0 rgb(0 0 0 / 8%) @media (max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: auto 200px;
`;
