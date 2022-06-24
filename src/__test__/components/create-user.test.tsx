import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { CREATE_USER_URL } from 'screens/create-user/create-user.types';
import CreateUser from 'screens/create-user/create-user.screen';
import store from '../../store/store/store';
import theme from '../../themes/main/theme';

test('Should render create user inputs', async () => {
  const history = createMemoryHistory();
  history.push(CREATE_USER_URL);

  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router location={history.location} navigator={history}>
          <CreateUser />
        </Router>
      </ThemeProvider>
    </Provider>,
  );

  const emailInput = await screen.findByPlaceholderText('E-mail');
  const passwordInput = await screen.findByPlaceholderText('Senha');
  const createUserButton = await screen.findByRole('button', {
    name: /criar usuário/i,
  });
  const loginText = await screen.findByText('Já possui uma conta?');
  const loginButton = await screen.findByRole('button', {
    name: /login/i,
  });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(createUserButton).toBeInTheDocument();
  expect(loginText).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});
