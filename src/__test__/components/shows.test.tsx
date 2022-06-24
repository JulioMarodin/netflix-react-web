// import { render, screen } from '@testing-library/react';
// import { createMemoryHistory } from 'history';
// import React from 'react';
// import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';
// import Shows from 'screens/shows/shows';
// import { SHOWS_URL } from 'screens/shows/shows.types';
// import store from 'store/store/store';
// import { ThemeProvider } from 'styled-components';
// import theme from 'themes/main/theme';

// test('Should render login inputs', async () => {
//   const history = createMemoryHistory();
//   history.push(SHOWS_URL);

//   render(
//     <Provider store={store}>
//       <ThemeProvider theme={theme}>
//         <Router location={history.location} navigator={history}>
//           <Shows />
//         </Router>
//       </ThemeProvider>
//     </Provider>,
//   );
//   const text = await screen.findAllByText('Hello World!');

//   expect(text).toBeInTheDocument();
// });
export {};
