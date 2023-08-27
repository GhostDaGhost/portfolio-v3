import { Alert } from "@mui/material";

// CONTACT CONFIRMATION ALERT
const ContactConfirmationAlert = (props: ContactConfirmationAlertProps) => {
    return (
        <Alert severity={props.severity as any} sx={{ mb: 3 }}>
            {props.message}
        </Alert>
    )
}

export default ContactConfirmationAlert;
