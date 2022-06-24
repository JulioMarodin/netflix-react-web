import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { Router } from 'react-router-dom';
import { LOGIN_URL } from 'screens/login/login.types';
import { createMemoryHistory } from 'history';
import Login from '../../screens/login/login.screen';
import store from '../../store/store/store';
import theme from '../../themes/main/theme';

test('Should render login inputs', async () => {
  const history = createMemoryHistory();
  history.push(LOGIN_URL);

  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router location={history.location} navigator={history}>
          <Login />
        </Router>
      </ThemeProvider>
    </Provider>,
  );

  const emailInput = await screen.findByPlaceholderText('E-mail');
  const passwordInput = await screen.findByPlaceholderText('Senha');
  const loginButton = await screen.findByRole('button', {
    name: /entrar/i,
  });
  const createUserText = await screen.findByText('Não possui uma conta?');
  const createUserButton = await screen.findByRole('button', {
    name: /cadastrar/i,
  });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(createUserText).toBeInTheDocument();
  expect(createUserButton).toBeInTheDocument();
});
