"use server"

import { revalidatePath } from "next/cache";
import connectMongo from "@/utils/database/ConnectToDB";
import User from "@/utils/models/auth.model";
import bcrypt from "bcryptjs";
import sendEmail from "@/utils/sendEmail";
import { getErrorMessage } from "@/utils/errorHandler";

export const addUser = async (formData) => {
    const { name, email, role, password } = formData;
    try {
        await connectMongo();
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, role, active: true, password: hashedPassword });
        if (newUser) {
            sendEmail(email, "Your Account Credentials for SheCanCODE Website", `Dear ${name}, \n\nThis serves as a confirmation that we have successfully created your account. \n\nYour account credentials are as follows: \n\nEmail: ${email} \nPassword: ${password} \nAccess Point: http://shecancodeschool.org/auth/signin \n\nPlease keep these credentials safe and secure. \n\nBest regards,\nSheCanCODE Bootcamp`);
            revalidatePath("/dashboard/users");
            return { message: "User created successfully!" }
        }
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}