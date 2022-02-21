import { lazy } from 'solid-js';
import { Router, Routes, Route } from 'solid-app-router';

const Auth = lazy(() => import('./pages/Auth'));

export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Auth isLogin={true} />} />
        <Route path="/register" element={<Auth isLogin={false} />} />
      </Routes>
    </Router>
  );
};
