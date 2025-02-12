"use server"

import slugify from "react-slugify";
import { revalidatePath } from "next/cache";
import connectMongo from "@/utils/database/ConnectToDB";
import ArticleCategory from "@/utils/models/articleCategory";
import { getErrorMessage } from "@/utils/errorHandler";

export const createCat = async (formData) => {
    try {
        const { name } = formData;
        if (!name) {
            return { error: "Please add a category name" };
        }
        await connectMongo();
        const categoryExists = await ArticleCategory.findOne({ name });
        const slugExists = await ArticleCategory.findOne({ slug: slugify(name) });
        if (categoryExists || slugExists) {
            return { error: "Category name or slug already exists" };
        }
        await ArticleCategory.create({ name, slug: slugify(name) });
        revalidatePath("/dashboard/blog/categories");
        
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
        const categories = await ArticleCategory.find({}).sort({ createdAt: -1 });
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
        await ArticleCategory.findByIdAndDelete(id);
        revalidatePath("/dashboard/blog/categories");
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
        await ArticleCategory.findByIdAndUpdate(id, { name, slug: slugify(name) });
        revalidatePath("/dashboard/blog/categories");
        return { message: "Category updated successfully!" }
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}