import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Alegreya Sans', sans-serif;
    }

    body {
        font-size: 16px;
    }

    button, select {
        text-transform: none;
    }

    textarea:focus, input:focus, input[type]:focus {
        border-color: rgb(51, 212, 87);
        box-shadow: 0 1px 1px rgba(38, 161, 66, 0.075)inset, 0 0 8px rgba(51, 212, 87, 0.6);
        outline: 0 none;
    }
`;