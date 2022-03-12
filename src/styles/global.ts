import { lighten } from 'polished';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => lighten(0.4, theme.colors.primary)};
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      background: ${theme.colors.background};
      font: 400 1rem 'Montserrat', sans-serif;
    }

    img {
      width: 100%;
      max-width: 100%;
    }

    ul {
      list-style: none;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
  `}

`;

export default GlobalStyles;
