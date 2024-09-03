"use server"

import connectMongo from "@/utils/database/ConnectToDB";
import Subscriber from "@/utils/models/subscriber.model";
import { z } from "zod";

const SubscribeSchema = z.object({
    email: z.string().email().min(8),
});

export const getErrorMessage = (error) => {
    let message;
    if (error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message);
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Something went wrong";
    }
    return message;
}

export const submitSubscription = async (prevState, formData) => {
    const result = SubscribeSchema.safeParse(Object.fromEntries(formData.entries()));
    if (result.success === false) {
        return result.error.formErrors.fieldErrors;
    }

    const data = result.data;

    try {
        const { email } = data;
        if ( !email ) {
            return { error: "Email is required" };
        }
        await connectMongo();
        
        const userExist = await Subscriber.findOne({ email: email });
        if (userExist) {
            return { error: "You are already subscribed to our newsletter" };
        }
        await Subscriber.create(data);
        return { message: "Successfully Subscribed to our news letter" }
    } catch (e) {
        console.log("Error while subscribing", e);
        return {
            error: getErrorMessage(e)
        }
    }
}

// export const loginUser = async (formData) => {
//     try {
//         const { email, password } = formData;
//         if (!email || !password) {
//             return { error: "All fields are required" };
//         }
//         await ConnectToDB();
//         const userExist = await User.findOne({ email: email });
//         if (!userExist) {
//             return { error: "Invalid email or password" };
//         }
//         const passwordsMatch = await bcrypt.compare(password, userExist.password);
//         if (!passwordsMatch) {
//             return { error: "Invalid email or password" };
//         }
//         return {
//             message: "Login successful",
//             user: {
//                 email: userExist.email,
//                 name: userExist.name,
//                 role: userExist.role,
//             }
//         };
//     } catch (e) {
//         console.log("Error registering user", e);
//         return {
//             error: getErrorMessage(e)
//         }
//     }
// }