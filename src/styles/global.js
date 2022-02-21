import { createGlobalStyles } from 'solid-styled-components';

export const GlobalStyles = createGlobalStyles`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
  }
  body {
    width: 100vw;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  div, ul, nav, input {
    box-sizing:border-box;
  }

  button {
    cursor: pointer;
  }
`;
