import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard/DashboardPage';
import HomePage from './pages/home/HomePage';
import LogIn from './pages/login/LogInPage';
import ProfilePage from './pages/profile/ProfilePage';
import SignUpPage from './pages/signup/SignUpPage';

const App = () => {
  const authContext = createContext({});

  return (
    <authContext.Provider value={{}}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </authContext.Provider>
  );
}

export default App;
