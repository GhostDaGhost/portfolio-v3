import { Box, Container, Typography, Link } from "@mui/material";
import { linkStyling } from "../styles/styles";

import Navbar from "../components/Navbar";
import BackgroundImage from "../components/BackgroundImage";

// ERROR
const Error = () => {
    return (
        <BackgroundImage>
            <Box>
                <Navbar />

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
