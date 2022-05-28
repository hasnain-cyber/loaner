import { Box, Typography } from "@mui/material"
import Navbar from "../../components/Navbar/Navbar";
import './HomePage.scss'

const HomePage = () => {
    return (
        <Box>
            <Navbar/>
            <Typography>Home Page</Typography>
        </Box>
    )
}

export default HomePage;