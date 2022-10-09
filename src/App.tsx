import store from '@/redux/store';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login';
import { SnackbarUtilsConfigurator } from './utilities';

const App = () => {
  return (
    <React.StrictMode>
      <SnackbarProvider>
        <SnackbarUtilsConfigurator />
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home navbarValueProp={0} />} />
              <Route path="/home/incomes" element={<Home navbarValueProp={1} />} />
              <Route path="/home/expenses" element={<Home navbarValueProp={2} />} />
              <Route path="/home/accounts" element={<Home navbarValueProp={3} />} />
              <Route path="/home/categories" element={<Home navbarValueProp={4} />} />
            </Routes>
          </BrowserRouter>
        </Provider>
      </SnackbarProvider>
    </React.StrictMode>
  );
};

export default App;
