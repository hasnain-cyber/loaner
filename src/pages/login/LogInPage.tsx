import {Box, Typography, Snackbar, Alert, Button, TextField,  } from "@mui/material"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"
import { auth } from "../../firebaseConfig";
import { colors } from "../../theme";

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

    const navigate = useNavigate();

    const handleErrorSnackBarClose = () => {
        setOpenErrorSnackbar(false);
    }

    const handleFormSubmit = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate('/dashboard');
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