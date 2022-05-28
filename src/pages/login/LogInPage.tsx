import {Box, Typography, Snackbar, Alert, Button, TextField,  } from "@mui/material"
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar"
import { auth, firestore } from "../../firebaseConfig";
import { StorageUserData } from "../../globalTypes";
import { colors } from "../../theme";

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

    const handleErrorSnackBarClose = () => {
        setOpenErrorSnackbar(false);
    }

    const handleFormSubmit = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const userId = userCredential.user.uid;

                const usersRef = collection(firestore, 'users');
                const q = query(usersRef, where('uid', '==', userId));
                getDocs(q).then((snapshot) => {
                    const requiredDocData: StorageUserData = snapshot.docs[0].data as unknown as StorageUserData;
                    
                })
                    .catch((error) => {
                        setOpenErrorSnackbar(true);
                        console.log(error);
                    });

            })
            .catch((error) => {
                setOpenErrorSnackbar(true);
                console.log(error);
            });
    }

    return (
        <>
            <Navbar />
            <Box display={'flex'} justifyContent={'center'}>
                {/* form box */}
                <Box display={'flex'} flexDirection={'column'} width={500} maxWidth={'100%'} margin={2} padding={2} borderRadius={4} bgcolor={colors.lightBlue} gap={3}>
                    <Typography variant="h4" textAlign={'center'} sx={{textDecoration: 'underline'}}>Welcome!</Typography>
                    <form onSubmit={() => handleFormSubmit(email, password)}>
                        <TextField variant="outlined" required label={'Email'} value={email} onChange={(event) => setEmail(event.target.value)} />
                        <TextField variant="outlined" required label={'Password'} value={password} onChange={(event) => setPassword(event.target.value)} />
                        <Button onClick={() => handleFormSubmit(email, password)}>Submit</Button>
                    </form>
                </Box>
            </Box>

            <Snackbar open={openErrorSnackbar} autoHideDuration={3000} onClose={handleErrorSnackBarClose}>
                <Alert severity="error" sx={{ width: '100%' }} onClose={handleErrorSnackBarClose}>
                    Something went wrong, please try again later!
                </Alert>
            </Snackbar>
        </>
    )
}

export default LogIn