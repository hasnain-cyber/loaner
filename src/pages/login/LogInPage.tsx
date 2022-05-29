import { Box, Typography, Snackbar, Alert, Button, TextField, } from "@mui/material"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"
import { auth } from "../../firebaseConfig";
import { colors } from "../../theme";
import "./LogInPage.scss"

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
            <br /><br /><br />
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={"center"} height={600}>
                {/* form box */}
                <Box display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} width={500} height={400} maxWidth={'100%'} margin={2} padding={5} borderRadius={4} bgcolor={colors.lightBlue} gap={3}>
                    <Typography variant="h4" textAlign={'center'} fontWeight={'600'} color={'white'}>Welcome!</Typography>
                    <form onSubmit={() => handleFormSubmit(email, password)}>
                        <TextField variant="outlined" required label={'Email'} value={email} onChange={(event) => setEmail(event.target.value)} />
                        <TextField variant="outlined" required label={'Password'} value={password} onChange={(event) => setPassword(event.target.value)} />
                        <Button onClick={() => handleFormSubmit(email, password)}>
                            <Typography
                                variant='h6'
                                color='#6C63FF'

                            >
                                Submit
                            </Typography>
                        </Button>
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