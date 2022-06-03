import './App.css';
import theme from './themes/main/theme';
import Login from './screens/login/login.screen';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './themes/main/global-styles';
import { Route, Routes } from 'react-router-dom';
import MoviesList from './screens/movies-list/movies-list';
import { LOGIN_URL } from './screens/login/login.types';
import { MOVIES_LIST_URL } from './screens/movies-list/movies-list.types';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<Login />} path={LOGIN_URL} />
          <Route element={<MoviesList />} path={MOVIES_LIST_URL} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
