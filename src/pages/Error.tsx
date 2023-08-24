import { Box, Container, Typography, Link } from "@mui/material";
import { useState } from "react";
import { linkStyling } from "../styles/styles";

import Navbar from "../components/Navbar";
import BackgroundImage from "../components/BackgroundImage";
import MobileNavigationMenu from "../components/MobileNavigationMenu";

// ERROR
const Error = () => {
    const [showMobileNavMenu, setMobileNavMenuVisibility] = useState(false);

    // RETURN ELEMENT
    return (
        <BackgroundImage>
            {showMobileNavMenu && <MobileNavigationMenu setMobileNavMenuVisibility={setMobileNavMenuVisibility} />}

            <Box>
                <Navbar setMobileNavMenuVisibility={setMobileNavMenuVisibility} />

                <Box sx={{ py: 10 }}>
                    <Container maxWidth="xl">
                        <Typography variant="h3" fontFamily="Open Sans" color="white" gutterBottom>
                            Error 404
                        </Typography>

                        <Typography variant="h6" fontFamily="Open Sans" color="gray">
                            You lost pal? Click <Link href="/" sx={{ ...linkStyling, textDecoration: 'underline' }}>me</Link> to make your way home.
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </BackgroundImage>
    )
}

export default Error;
