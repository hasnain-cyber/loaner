import { Box, Typography } from "@mui/material"
import Navbar from "../../components/Navbar/Navbar";
import './DashboardPage.scss'

const DashboardPage = () => {
    return (
        <Box>
            <Navbar />
            <Typography>Dashboard Page</Typography>
        </Box>
    )
}

export default DashboardPage;