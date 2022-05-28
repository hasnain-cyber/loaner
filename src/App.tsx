import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard/DashboardPage';
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/ProfilePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}

export default App;
