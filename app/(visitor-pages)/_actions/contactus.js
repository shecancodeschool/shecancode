"use server"

import { getErrorMessage } from "@/utils/errorHandler";
import sendEmail from "@/utils/sendEmail";
import { z } from "zod";

const ContactSchema = z.object({
    name: z.string().min(2, "Your name is required"),
    email: z.string().email().min(8),
    message: z.string().min(8, "Message must be at least 8 characters long"),
});

export const contactUs = async (prevState, formData) => {
    const result = ContactSchema.safeParse(Object.fromEntries(formData.entries()));
    if (result.success === false) {
        return result.error.formErrors.fieldErrors;
    }

    const data = result.data;

    try {
        const { name, email, message } = data;
        await sendEmail(email, "Thank you for your message", `Dear ${name}, \n\nThis serves as a confirmation that we have successfully recieved your message. \n\nThank you for reaching out to us! We will get back to you shortly.\n\nBest regards,\nSheCanCODE Bootcamp`);
        await sendEmail("education@igirerwanda.org", `Visitor Message from ${name}`, `Dear Admin, \n\nYou have just received a message from a visitor of SheCanCODE Website. \n\nName: ${name} \nEmail: ${email} \nMessage: ${message}`);
        await sendEmail("jeaneric@igirerwanda.org", `Visitor Message from ${name}`, `Dear Admin, \n\nYou have just received a message from a visitor of SheCanCODE Website. \n\nName: ${name} \nEmail: ${email} \nMessage: ${message}`);
        return { message: "Message sent, we will reach out to you shortly" }
    } catch (e) {
        console.log("Error while sending message", e);
        return {
            error: getErrorMessage(e)
        }
    }
}