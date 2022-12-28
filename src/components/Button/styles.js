import styled from "styled-components";

export const ButtonItem = styled.button`
    margin-top: ${props => props.top};
    background: ${props => props.background};
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid ${props => props.border};
    color: ${props => props.colorText};
    border: solid 1px ${props => props.border};
    height: 40px;
    width: ${props => props.width};
    padding: 0px 20px 0px 20px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    &:hover {
        opacity: 0.6;
    }
`;
