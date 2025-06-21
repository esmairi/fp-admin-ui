// src/App.tsx

import AppRouter from '@fastadm/pages/AppRouter.tsx';
import LoginPage from '@fastadm/pages/login/LoginPage.tsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router';
import type { JSX } from 'react';
import 'primeflex/themes/primeone-light.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './App.css';
import { getToken } from './services/auth.ts';

function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();
  if (!getToken()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <RequireAuth>
              <AppRouter />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
