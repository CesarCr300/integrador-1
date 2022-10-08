import store from '@/redux/store';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
              {/* <Route path="/home" element={} /> */}
            </Routes>
          </BrowserRouter>
        </Provider>
      </SnackbarProvider>
    </React.StrictMode>
  );
};

export default App;
