import { contactAPIRoute, contactAPIKey } from "../data/config";
import axios from "axios";

/**
    * A function that is triggered when the contact form is filled out and the submit button is pressed.
    * @param eventTarget `any` - The target of the document element's event.
    * @returns `object` - This returns an object with a key of `success` and a boolean value.
*/
export const SubmitContactForm = async (eventTarget: any) => {
    const formData = new FormData(eventTarget);
    formData.append('access_key', contactAPIKey);
    formData.append('from_name', 'Alexander Arizola\'s Portfolio');

    // VALIDATE PARAMETERS
    const dataToSend = Object.fromEntries(formData);
    if (!dataToSend.name || dataToSend.name === '' || !dataToSend.email || dataToSend.email === '') {
        return { 'success': false };
    }

    // SUBMIT API REQUEST
    const apiResult = await axios.post(contactAPIRoute, dataToSend, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    });

    // RETURN DEFAULT CALLBACK
    return { 'success': (apiResult && typeof apiResult === 'object' && apiResult.status === 200) ? true : false };
}
