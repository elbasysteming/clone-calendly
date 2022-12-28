import styled, { keyframes } from "styled-components";

export const Item = styled.div`
    display: flex;
    padding-left: 20px;
`;

export const Input = styled.input`
    height: 0;
    width: 0;
    opacity: 0;
    z-index: -1;
`;

export const popIn = keyframes`
    from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.5) ;
    }
    to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) ;
    }
`;

export const Label = styled.label`
    position: relative;
    display: inline-block;
    cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
    margin-left: 10px;
`;

export const Indicator = styled.div`
    border: 1px solid #666666;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: -1.9em;
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
        border: solid #666666;
        border-radius: 1em;
        background-color: #666666;
        width: 8px;
        height: 8px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation-name: ${popIn};
        animation-duration: 0.1s;
        animation-fill-mode: forwards;
    }

    ${Input}:disabled + & {
        pointer-events: none;
        opacity: 0.6;
        background: #e6e6e6;
    }
`;
