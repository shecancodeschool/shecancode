"use server"

import connectMongo from "@/utils/database/ConnectToDB";
import { getErrorMessage } from "@/utils/errorHandler";
import User from "@/utils/models/auth.model";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export const registerUser = async (formData) => {
    try {
        const { name, email, password } = formData;
        await connectMongo();
        const userExist = await User.findOne({ email });
        if (userExist) {
            return { error: "User account already exists" };
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await User.create({ name, email, password: hashedPassword })
        return { message: "Registration successful, please login!" };
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
                name: userExist.name,
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

export const getAllUsers = async () => {
    try {
        const users = await User.find({});
        return JSON.stringify(users);
    } catch (e) {
        console.log("Error fetching users", e);
        return {
            error: getErrorMessage(e)
        }
    }
}

export const updateUser = async (formData) => {
    const { isActive, role, id } = formData;
    
    try {
        await connectMongo();
        const userExist = await User.findById(id);
        userExist.isActive = isActive;
        userExist.role = role;

        await userExist.save();
        revalidatePath("/dashboard/users");
        return { message: "User account updated successfully" };
    } catch (e) {
        console.log("Error registering user", e);
        return {
            error: getErrorMessage(e)
        }
    }
}

export const deleteUser = async (id) => {
    try {
        await connectMongo();
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return { error: "User not found" };
        }
        revalidatePath("/dashboard/users");
        return { message: "User deleted successfully" };
    } catch (e) {
        console.log("Error registering user", e);
        return {
            error: getErrorMessage(e)
        }
    }
}

export const findUserById = async (id) => {
    try {
        await connectMongo();
        const user = await User.findById(id);
        if (!user) {
            return { error: "User not found" };
        }
        return JSON.stringify(user);
    } catch (e) {
        console.log("Error registering user", e);
        return {
            error: getErrorMessage(e)
        }
    }
}