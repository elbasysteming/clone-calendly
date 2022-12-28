import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle` html {
    background: #ffffff;
    box-sizing: border-box;
    font-family:'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

*, *::before, *::after {
    box-sizing: inherit;
}

ul, li, h1, h2, h3, p, button {
    margin: 0;
}

h1, h2, h3 {
    color: #333333;
}

span, p {
    font-size: 14px;
}

h1, h2, h3 {
    font-weight: 600;
}

body {
    margin: 0px;
}

ul {
    list-style: none;
    display: block;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
}

button {
    background: transparent;
    border-radius: 8px;
    height: 30px;
    margin-right: 7px;
    font-family:'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

textarea {
    width: 100%;
    font-family:'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.container {
    background: #ffffff;
    height: 100vh;
    margin: 20px auto;
    max-width: 1200px;
    overscroll-behavior: none;
    @media (max-width: 768px) {
        padding: 15px;
   }
}


form {
    margin: 0px auto;
}

.flex{
    display: flex;
}

.rigth {
    text-align: rigth;
}

th {
    padding: 10px;
    border-color: none;
    background: #fafafa;
    text-align: left;
    font-weight: 500;
}

td {
    border-bottom: 1px solid #e6e9f0;
    padding: 20px 10px 20px 10px;
    text-align: left;
}

table {
    text-indent: initial;
    border-spacing: 0;
}
`;
