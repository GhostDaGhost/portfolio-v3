import { Box, CircularProgress } from "@mui/material"

// CONTACT SENDING EMAIL LOADER
const ContactSendingEmailLoader = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: 'absolute',
                zIndex: 9999,
                bgcolor: 'rgba(0, 0, 0, .72)'
            }}
        >
            <CircularProgress size={60} sx={{ color: 'var(--main_color2_brighter)' }} />
        </Box>
    )
}

export default ContactSendingEmailLoader;
