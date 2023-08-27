import { Alert } from "@mui/material";
import { ContactConfirmationAlertProps } from "../interfaces";

// CONTACT CONFIRMATION ALERT
const ContactConfirmationAlert = (props: ContactConfirmationAlertProps) => {
    return (
        <Alert severity={props.severity as any} sx={{ mb: 3 }}>
            {props.message}
        </Alert>
    )
}

export default ContactConfirmationAlert;
