import styled from "styled-components";

export const BagdeItem = styled.span`
    background-color: ${props => {
        if (props.type === "success") return "#28a745";
        if (props.type === "danger") return "#dc3545";
        if (props.type === "warning") return "#ffc107";
        if (props.type === "info") return "#ffc107";
        return "ffc107";
    }};
    color: white;
    padding: 4px 8px;
    text-align: center;
    border-radius: 5px;
    &:hover {
        opacity: 0.6;
    }
`;
