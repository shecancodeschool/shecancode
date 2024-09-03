"use server"

import slugify from "react-slugify";
import { revalidatePath } from "next/cache";
import connectMongo from "@/utils/database/ConnectToDB";
import CourseCategory from "@/utils/models/courseCategory.model";
import { getErrorMessage } from "@/utils/errorHandler";

export const createCat = async (formData) => {
    try {
        const { name } = formData;
        if (!name) {
            return { error: "Please add a category name" };
        }
        await connectMongo();
        const categoryExists = await CourseCategory.findOne({ name });
        const slugExists = await CourseCategory.findOne({ slug: slugify(name) });
        if (categoryExists || slugExists) {
            return { error: "Category name or slug already exists" };
        }
        await CourseCategory.create({ name, slug: slugify(name) });
        revalidatePath("/dashboard/courses/categories");
        
        return { message: "Category created successful!" }
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}
export const getCategories = async () => {
    try {
        await connectMongo();
        const categories = await CourseCategory.find({}).sort({ createdAt: -1 });
        return JSON.stringify(categories);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const deleteCategory = async (id) => {
    try {
        await connectMongo();
        await CourseCategory.findByIdAndDelete(id);
        revalidatePath("/dashboard/courses/categories");
        return { message: "Category deleted successfully!" }
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const updateCategory = async (formData) => {
    const { name, id } = formData;
    try {
        await connectMongo();
        await CourseCategory.findByIdAndUpdate(id, { name, slug: slugify(name) });
        revalidatePath("/dashboard/courses/categories");
        return { message: "Category updated successfully!" }
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}