import styled from "styled-components";

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

export const Unavailable = styled.p`
    line-height: 35px;
    color: #dc3545;
`;

export const Day = styled.p`
    font-weight: 600;
    line-height: 35px;
`;
