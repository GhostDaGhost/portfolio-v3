import { Box, Container, Typography } from "@mui/material";

// FOOTER
const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 3, userSelect: 'none' }}>
            <Container maxWidth="xl">
                <Typography component="p" variant="body1" color="white" fontFamily="Open Sans">
                    © Alexander Arizola {new Date().getFullYear()}
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer;
