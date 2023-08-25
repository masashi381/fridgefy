import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html{
        font-size: 62.5%;
        body{
            padding: 0;
            margin: 0;
            font-family: 'DM Mono', monospace;
        }
    }
`;

export default GlobalStyle;
