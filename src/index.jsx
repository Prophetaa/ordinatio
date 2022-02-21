import { render } from 'solid-js/web';
import { Provider } from './store';
import App from './App';
import ThemeWrapper from './components/ThemeWrapper';

render(
  () => (
    <Provider>
      <ThemeWrapper>
        <App />
      </ThemeWrapper>
    </Provider>
  ),
  document.getElementById('root')
);
