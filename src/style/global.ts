import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        user-select: none;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        color: #BDB5B5;
        line-height: 1.25;
        scroll-behavior: smooth;
        transition: background 0.2s linear;
        -webkit-tap-highlight-color: transparent; //remove the blue highlight color on mobile tap
    }
    
    html, body, #root {
        background: rgb(20, 20, 20);
        height: 100dvh;
        width: 100vw;
    }
    
    label, button, a, p, b,
    input, strong, ul {
        font-size: 0.9rem;
        font-weight: inherit;
    }

    button, a > * {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;