import store from '@/redux/store';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/Home/Home';
import { Incomes } from '@/pages/Incomes/Incomes';
import { Login } from '@/pages/Login';
import { Expenses } from '@/pages/Expenses/Expenses';
import { Accounts } from '@/pages/Accounts/Accounts';
import { Categories } from '@/pages/Categories/Categories';
import { IncomesCreate } from '@/pages/Incomes/IncomesCreation';
import { IncomesDetail } from '@/pages/Incomes/IncomesDetail';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { ExpensesCreation } from './pages/Expenses/ExpensesCreation';
import { ExpensesDetail } from './pages/Expenses/ExpensesDetail';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/home" element={<Home />} />
              <Route path="/incomes" element={<Incomes />} />
              <Route path="/incomes/create" element={<IncomesCreate />} />
              <Route path="/incomes/:id" element={<IncomesDetail />} />
              <Route path="/expenses" element={<Expenses />} />
              <Route path="/expenses/create" element={<ExpensesCreation />} />
              <Route path="/expenses/:id" element={<ExpensesDetail />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/categories" element={<Categories />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
