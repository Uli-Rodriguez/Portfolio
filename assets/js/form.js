import { formValidations } from "./formValidations/formValidations.js";
import {sendMail} from "./formValidations/sendMail.js";

/* Validate the contact form */
formValidations();
/* Send the email message */
sendMail();