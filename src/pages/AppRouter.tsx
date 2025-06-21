import AppsPage from '@fastadm/pages/apps/AppsPage.tsx';
import { ModelView } from '@fastadm/pages/model/ModelView.tsx';
import { Routes, Route } from 'react-router';

import LoginPage from './login/LoginPage.tsx';

export default function AppRouter() {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AppsPage />} />
          <Route path="/admin/:app/:model" element={<ModelView />} />
        </Routes>
      </div>
    </div>
  );
}
