import { Box, Container, Typography, Divider, Link, Fade, TextField, Button } from "@mui/material";
import { useState } from "react";

import { SubmitContactForm } from "../controllers/contactform";
import { linkStyling } from "../styles/styles";

import ReactVisibilitySensor from "react-visibility-sensor";
import ContactConfirmationAlert from "./ContactConfirmationAlert";
import ContactSendingEmailLoader from "./ContactSendingEmailLoader";
import '../styles/Contact.scss';

// CONTACT COOLDOWN STATE
let onCooldown: boolean = false;

// CONTACT
const Contact = () => {
    let alertClearingTimeout: any;
    let cooldownAlertClearingTimeout: any;

    // STATES
    const [showContainer, setContainerVisibility] = useState(false);
    const [submissionStatus, setSubmissionStatus]: any = useState({});

    const [showCooldownAlert, setCooldownAlertState] = useState(false);
    const [isSendingEmail, setSendingEmailState] = useState(false);

    // ON SUBMIT CLICK
    const onSubmitButtonClick = async (event: any) => {
        clearTimeout(alertClearingTimeout);
        clearTimeout(cooldownAlertClearingTimeout);

        // RESET SUBMISSION STATE AND PREVENT DEFAULT 'SUBMIT' BEHAVIOR
        setSubmissionStatus({});
        event.preventDefault();

        // DO NOT PROCEED IF COOLDOWN IS ACTIVE, SHOW A WARNING
        if (onCooldown) {
            setCooldownAlertState(true);
            cooldownAlertClearingTimeout = setTimeout(() => {
                setCooldownAlertState(false);
            }, 5000);

            // DO NOT CONTINUE
            return;
        }

        // START LOADING
        setSendingEmailState(true);

        // SET COOLDOWN
        onCooldown = true;
        setTimeout(() => {
            onCooldown = false;

            // RESET COOLDOWN-RELATED STATES JUST IN CASE
            clearTimeout(cooldownAlertClearingTimeout);
            setCooldownAlertState(false);
        }, 15000);

        // WAIT FOR SUBMISSION
        const resultData = await SubmitContactForm(event.target);
        setSubmissionStatus(resultData);

        // END LOADING
        setSendingEmailState(false);

        // CLEAR ALERT AFTER A BIT
        alertClearingTimeout = setTimeout(() => {
            setSubmissionStatus({});
        }, 11000);
    }

    // RETURN ELEMENT
    return (
        <Box id="contact" component="section">
            <ReactVisibilitySensor partialVisibility onChange={(isVisible: boolean) => setContainerVisibility(isVisible)}>
                <Fade in={showContainer} timeout={1000}>
                    <Container maxWidth="xl" sx={{ minHeight: '90vh', py: 2 }}>
                        <Typography variant="h4" fontFamily="Open Sans" color="white" sx={{ mb: 3 }}>
                            <Link href="#contact" sx={linkStyling}>#</Link> Contact
                        </Typography>

                        {/* DIVIDER */}
                        <Divider sx={{ my: 3 }} />

                        {/* ALERTS */}
                        {submissionStatus['success'] === true &&
                            <ContactConfirmationAlert severity="success" message="Successfully sent an email! I will get to you as soon as possible!" />
                        }

                        {submissionStatus['success'] === false &&
                            <ContactConfirmationAlert severity="error" message="An error occurred while sending the email!" />
                        }

                        {showCooldownAlert && onCooldown &&
                            <ContactConfirmationAlert severity="warning" message="You are on a cooldown for sending emails!" />
                        }

                        {/* FORM */}
                        <Box component="form" onSubmit={onSubmitButtonClick} sx={{ p: 2, position: 'relative', borderRadius: 3, bgcolor: 'var(--main_color4)' }}>
                            {isSendingEmail && <ContactSendingEmailLoader />}

                            {/* INPUT BOXES */}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="email"
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="message"
                                id="message"
                                label="Message"
                                name="message"
                                autoComplete="message"
                                multiline
                                minRows={5}
                            />

                            {/* SUBMIT BUTTON */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                                sx={{
                                    '&:hover': {
                                        borderColor: 'var(--main_color2_brighter)',
                                        color: 'var(--main_color2_brighter)'
                                    },
                                    py: 1,
                                    mt: 3,
                                    fontSize: 18,
                                    borderColor: 'var(--main_color2)',
                                    color: 'var(--main_color2)'
                                }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Container>
                </Fade>
            </ReactVisibilitySensor>
        </Box>
    )
}

export default Contact;
