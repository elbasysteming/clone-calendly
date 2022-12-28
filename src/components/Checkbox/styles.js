import styled, { keyframes } from "styled-components";

export const Item = styled.div`
    padding-left: 10px;
    display: flex;

    position: relative;
`;

export const Input = styled.input`
    height: 0;
    width: 0;
    opacity: 0;
    z-index: -1;
`;

export const Label = styled.label`
    color: #333333;
    font-weight: 600;
    position: relative;
    display: inline-block;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    margin: 0.6em 1em;
`;

export const rotate = keyframes`
    from {
    opacity: 0;
    transform: rotate(0deg);
    }
    to {
    opacity: 1;
    transform: rotate(45deg);
    }
    `;

export const Indicator = styled.div`
    width: 1.2em;
    height: 1.2em;
    position: absolute;
    top: 0em;
    left: -1.6em;
    border: 1px solid #757575;
    border-radius: 0.2em;

    ${Input}:not(:disabled):checked & {
        background: #d1d1d1;
    }

    ${Label}:hover & {
        background: #ccc;
    }

    &::after {
        content: "";
        position: absolute;
        display: none;
    }

    ${Input}:checked + &::after {
        display: block;
        top: 0.1em;
        left: 0.35em;
        width: 35%;
        height: 70%;
        border: solid #263238;
        border-width: 0 0.2em 0.2em 0;
        animation-name: ${rotate};
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
    }

    &::disabled {
        cursor: not-allowed;
    }
`;
