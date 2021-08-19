import { ButtonsProps } from "@typesProject/components";
import styled from "styled-components";

export const Button = styled.button`
    display: block;
    font-weight: 400;
    color: ${(props: ButtonsProps) => props.warning ? "#000": "#FFF"};
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: ${(props: ButtonsProps) => props.success ? "#28a745": props.warning ? "#ffc107" : props.danger ? "#dc3545" : "#0d6efd"};
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    border-color: ${(props: ButtonsProps) => props.success ? "#28a745" : props.warning ? "#ffc107" : props.danger ? "#dc3545" : "#0d6efd"};
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    ${(props: ButtonsProps) => props.auto ? "margin: 0 auto;" : ""}

    &:focus, &:hover {
        color: ${(props: ButtonsProps) => props.success ? "#FFF": props.warning ? "#000" : ""};
        background-color: ${(props: ButtonsProps) => props.success ? "#218838": props.warning ? "#ffca2c" : props.danger ? "#bb2d3b" : "#0b5ed7"};
        border-color: ${(props: ButtonsProps) => props.success ? "#1e7e34" : props.warning ? "#ffc720" : props.danger ? "#b02a37" : "#0a58ca"};
        text-decoration: none;
    }

    &:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
`;