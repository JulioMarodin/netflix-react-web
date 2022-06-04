import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Login from '../../screens/login/login.screen';
import store from '../../store/store/store'
import theme from '../../themes/main/theme'

test('Should render login inputs', async () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </ Provider>
  );
  const emailInput = await screen.findByPlaceholderText('E-mail')
  const passwordInput = await screen.findByPlaceholderText('Senha')
  const button = await screen.findByRole('button')

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
})
