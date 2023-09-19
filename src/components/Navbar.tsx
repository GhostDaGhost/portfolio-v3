import { AppBar, Container, Toolbar, Box, IconButton, Button, Slide } from "@mui/material";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { pages } from "../data/config";

import MenuIcon from "@mui/icons-material/Menu";
import NavbarLogo from "./NavbarLogo";

// NAVBAR
export default ({ setMobileNavMenuVisibility }: NavbarProps) => {
    const navigate = useNavigate();

    // SLIDE EFFECT FOR NAVBAR CONTENTS
    const [showNavbarContents, setNavbarContentsVisibility] = useState(false);
    useEffect(() => {
        setTimeout(() => setNavbarContentsVisibility(true), 1000);
    }, []);

    // RETURN ELEMENT
    return (
        <AppBar sx={{ py: 2, boxShadow: 'none', bgcolor: 'none', background: 'none' }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* DESKTOP / LARGE MONITORS */}
                    <Box 
                        sx={{
                            '&:hover': {
                                animation: 'pulse 1s infinite'
                            },
                            display: { xs: "none", md: "flex" },
                            mr: 5,
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            navigate('/home');
                        }}
                    >
                        <NavbarLogo imageSize="65" showNavbarContents={showNavbarContents} />
                    </Box>

                    {/* DESKTOP / LARGE MONITORS */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'flex-end' }}>
                        <Slide direction="left" in={showNavbarContents} timeout={650}>
                            <div>
                                {pages.map(page => (
                                    <Button
                                        href={`#${page.toLowerCase()}`}
                                        key={page}
                                        aria-label={page}
                                        sx={{
                                            '&:hover': {
                                                color: 'var(--main_color2_brighter)'
                                            },
                                            ml: 2,
                                            fontFamily: 'Open Sans',
                                            fontSize: 19,
                                            textTransform: 'none',
                                            color: "white"
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </div>
                        </Slide>
                    </Box>

                    {/* MOBILE / SMALL MONITORS */}
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, cursor: 'pointer' }} onClick={() => {
                        navigate('/home');
                    }}>
                        <NavbarLogo imageSize="75" showNavbarContents={showNavbarContents} />
                    </Box>

                    {/* MOBILE / SMALL MONITORS */}
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <Slide direction="left" in={showNavbarContents} timeout={650}>
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="navigation menu"
                                    aria-haspopup="true"
                                    onClick={() => setMobileNavMenuVisibility(true)}
                                >
                                    <MenuIcon sx={{ fontSize: 45, color: 'var(--main_color2)' }} />
                                </IconButton>
                            </div>
                        </Slide>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
