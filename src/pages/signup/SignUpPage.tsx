import { Alert, Box, Button, Snackbar, TextField, Typography } from "@mui/material"
import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import { StorageUserData } from "../../globalTypes"
import { colors } from "../../theme"
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom"
import { auth, firestore } from "../../firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth"

const SignUpPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);

    const navigate = useNavigate();

    const handleErrorSnackBarClose = () => {
        setOpenErrorSnackbar(false);
    }

    const handleFormSubmit = (firstName: string, lastName: string, email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const uid = userCredential.user.uid;
                const storagePushObject: StorageUserData = {
                    uid,
                    firstName,
                    lastName,
                    email,
                }

                addDoc(collection(firestore, '/users'), storagePushObject).then(() => {
                    navigate('/dashboard');
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
                    <form onSubmit={() => handleFormSubmit(firstName, lastName, email, password)}>
                        <TextField variant="outlined" required label={'First Name'} value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                        <TextField variant="outlined" required label={'Last Name'} value={lastName} onChange={(event) => setLastName(event.target.value)} />
                        <TextField variant="outlined" required label={'Email'} value={email} onChange={(event) => setEmail(event.target.value)} />
                        <TextField variant="outlined" required label={'Password'} value={password} onChange={(event) => setPassword(event.target.value)} />
                        <Button onClick={() => handleFormSubmit(firstName, lastName, email, password)}>Submit</Button>
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

export default SignUpPage