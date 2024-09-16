"use server"

import connectMongo from "@/utils/database/ConnectToDB";
import { getErrorMessage } from "@/utils/errorHandler";
import Subscriber from "@/utils/models/subscriber.model";
import sendEmail from "@/utils/sendEmail";
import { z } from "zod";

const SubscribeSchema = z.object({
    fullName: z.string().min(2, "Your name is required"),
    email: z.string().email().min(8),
});

export const submitSubscription = async (prevState, formData) => {
    const result = SubscribeSchema.safeParse(Object.fromEntries(formData.entries()));
    if (result.success === false) {
        return result.error.formErrors.fieldErrors;
    }

    const data = result.data;

    try {
        const { fullName, email } = data;
        await connectMongo();

        const userExist = await Subscriber.findOne({ email: email });
        if (userExist) {
            return { error: "You are already subscribed to our newsletter" };
        }
        await Subscriber.create(data);
        await sendEmail(email, "Thank You For Subscribing to Our Newsletter", `Hello ${fullName}, \n\nyou have successfully subscribed to our newsletter. \n\nThank you for joining us! \nYou will receive updates on our latest news and events.\n\nBest regards,\nSheCanCODE Bootcamp Team`);
        await sendEmail("education@igirerwanda.org", `New Subscriber Alert`, `Dear Admin, \n\nYou have just received a new subscriber of SheCanCODE Website. \n\nName: ${fullName} \nEmail: ${email}`);
        await sendEmail("jeaneric@igirerwanda.org", `New Subscriber Alert`, `Dear Admin, \n\nYou have just received a new subscriber of SheCanCODE Website. \n\nName: ${fullName} \nEmail: ${email}`);
        return { message: "Successfully Subscribed to our news letter" }
    } catch (e) {
        console.log("Error while subscribing", e);
        return {
            error: getErrorMessage(e)
        }
    }
}