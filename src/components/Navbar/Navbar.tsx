import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import './Navbar.scss'
import { getAuth } from "firebase/auth";

type buildListItemProps = {
    linkPath: string,
    linkText: string,
    setOpenDrawer: Function,
    navigate: NavigateFunction
}
const buildListItem = (props: buildListItemProps) => {
    return (
        <ListItem key={props.linkPath} onClick={() => {
            props.setOpenDrawer(false);
            props.navigate('/dashboard')
        }}>
            <ListItemButton>
                {props.linkText}
            </ListItemButton>
        </ListItem>
    )
}

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const navigate = useNavigate();
    const auth = getAuth();

    const handleSignOutClick = () => {
        auth.signOut().then(() => {
            navigate('/');
        });
        // handle catch later.
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Box className={'mobile-view-drawer-button'}>
                        <IconButton
                            color="inherit"
                            aria-label="Open Drawer"
                            onClick={() => setOpenDrawer(true)}
                        >
                            <MenuIcon fontSize={"large"} />
                        </IconButton>
                    </Box>

                    {/* flex the link to get all other items to the right of the nav */}
                    <Link to={"/"} style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: 'flex',
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Typography variant="h6" textAlign={'center'} fontSize={25}>
                            LOANER
                        </Typography>
                    </Link>

                    {/* rhs */}
                    <Box>
                        {auth.currentUser ? <Button color="inherit" onClick={handleSignOutClick}>Sign Out</Button> : <><Button color="inherit" href="/login">Log In</Button>
                            <Button color="inherit" href="/signup">Sign Up</Button></>}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* drawer */}
            <Drawer
                sx={{
                    width: "100vw",
                    maxWidth: 500,
                    "& .MuiDrawer-paper": {
                        width: "100vw",
                        maxWidth: 500,
                    },
                }}
                variant="temporary"
                anchor="left"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Box display={"flex"} justifyContent={"end"}>
                    <IconButton onClick={() => setOpenDrawer(false)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Box>

                <Divider />

                <List>
                    {buildListItem({ linkPath: '/dashboard', linkText: 'Dashboard', setOpenDrawer, navigate })}
                </List>

            </Drawer>
        </>
    )
}

export default Navbar;