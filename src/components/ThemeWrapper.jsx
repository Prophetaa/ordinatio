import { ThemeProvider } from 'solid-styled-components';
import theme from '../styles/theme';
import { GlobalStyles } from '../styles/global';

const ThemeWrapper = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
