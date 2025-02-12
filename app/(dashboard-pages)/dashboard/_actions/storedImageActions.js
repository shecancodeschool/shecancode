"use server"

import { revalidatePath } from "next/cache";
import connectMongo from "@/utils/database/ConnectToDB";
import { getErrorMessage } from "@/utils/errorHandler";
import StoredImage from "@/utils/models/storedImage";

export const createStoredImage = async (formData) => {
    const { image } = formData;
    if (!image) {
        return { error: "Please provide the image link" };
    }
    try {
        await connectMongo();
        const imageExists = await StoredImage.findOne({ image });

        if (imageExists) {
            return { error: "StoredImage already exists" };
        }

        await StoredImage.create({ image });
        // revalidatePath("/dashboard/blog");
        return { message: "Image stored successfully!" }
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getStoredImages = async () => {
    try {
        await connectMongo();
        const images = await StoredImage.find({}).sort({ createdAt: -1 });
        return JSON.stringify(images);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getStoredImageById = async (id) => {
    try {
        await connectMongo();
        const image = await StoredImage.findById(id);
        return JSON.stringify(image);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const deleteStoredImage = async (id) => {
    try {
        await connectMongo();
        await StoredImage.findByIdAndDelete(id);
        // revalidatePath("/dashboard/blog");
        return { message: "StoredImage deleted successfully!" }
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}