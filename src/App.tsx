import { getAuth } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext, { emptyUserData } from './UserDataContext'
import DashboardPage from './pages/dashboard/DashboardPage';
import HomePage from './pages/home/HomePage';
import LogIn from './pages/login/LogInPage';
import ProfilePage from './pages/profile/ProfilePage';
import SignUpPage from './pages/signup/SignUpPage';
import userDataContext from './UserDataContext';
import { StorageUserData } from './globalTypes';
import { collection, query } from '@firebase/firestore';
import { getDocs, getFirestore, where } from 'firebase/firestore';
import { Alert, Snackbar } from '@mui/material';

const App = () => {

  const { userData, setUserData } = useContext(userDataContext);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

  const auth = getAuth();
  const firestore = getFirestore();

  auth.onAuthStateChanged(() => {
    if (auth.currentUser) {
      const userId = auth.currentUser.uid;

      const usersRef = collection(firestore, 'users');
      const q = query(usersRef, where('uid', '==', userId));
      getDocs(q).then((snapshot) => {
        const requiredDocData: StorageUserData = snapshot.docs.at(0)!.data() as unknown as StorageUserData;
        setUserData(requiredDocData);
      })
        .catch((error) => {
          setOpenErrorSnackbar(true);
          console.log(error);
        });
    } else {
      setUserData(emptyUserData);
    }
  })

  const handleErrorSnackBarClose = () => {
    setOpenErrorSnackbar(false);
  }

  return (
    <>
      <AuthContext.Provider value={{ userData, setUserData: () => { } }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </AuthContext.Provider>

      <Snackbar open={openErrorSnackbar} autoHideDuration={3000} onClose={handleErrorSnackBarClose}>
        <Alert severity="error" sx={{ width: '100%' }} onClose={handleErrorSnackBarClose}>
          Something went wrong, please try again later!
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
