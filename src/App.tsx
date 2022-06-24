import './App.css';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Guard from 'components/guard/guard';
import theme from 'themes/main/theme';
import Login from 'screens/login/login.screen';
import { GlobalStyles } from 'themes/main/global-styles';
import { LOGIN_URL } from 'screens/login/login.types';
import { SHOWS_URL } from 'screens/shows/shows.types';
import store from 'store/store/store';
import Shows from 'screens/shows/shows';
import CreateUser from 'screens/create-user/create-user.screen';
import { CREATE_USER_URL } from 'screens/create-user/create-user.types';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<CreateUser />} path={CREATE_USER_URL} />
          <Route element={<Guard><Shows /></Guard>} path={SHOWS_URL} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
