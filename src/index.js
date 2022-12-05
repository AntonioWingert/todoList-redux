import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './styles/global';
import theme from './styles/themes';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
);

