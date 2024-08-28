"use server"

import connectMongo from "@/utils/database/ConnectToDB";
import { getErrorMessage } from "@/utils/errorHandler";
import User from "@/utils/models/auth.model";
import bcrypt from "bcryptjs";

export const registerUser = async (formData) => {
    try {
        const { firstName, lastName, email, password } = formData;
        if (!firstName || !lastName || !email || !password) {
            return { error: "All fields are required" };
        }
        await connectMongo();
        const userExist = await User.findOne({ email });
        if (userExist) {
            return { error: "User account already exists" };
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await User.create({ firstName, lastName, email, password: hashedPassword })
        return { message: "Registration successful, please login!" }
    } catch (e) {
        console.log("Error registering user", e);
        return {
            error: getErrorMessage(e)
        }
    }
}

export const loginUser = async (formData) => {
    try {
        const { email, password } = formData;
        if (!email || !password) {
            return { error: "All fields are required" };
        }
        await connectMongo();
        const userExist = await User.findOne({ email: email });
        if (!userExist) {
            return { error: "Invalid email or password" };
        }
        const passwordsMatch = await bcrypt.compare(password, userExist.password);
        if (!passwordsMatch) {
            return { error: "Invalid email or password" };
        }
        return {
            message: "Login successful",
            user: {
                email: userExist.email,
                firstName: userExist.name,
                lastName: userExist.lastName,
                role: userExist.role,
            }
        };
    } catch (e) {
        console.log("Error registering user", e);
        return {
            error: getErrorMessage(e)
        }
    }
}