"use server"

import slugify from "react-slugify";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/[...nextauth]/options";
import User from "@/utils/models/auth.model";
import Article from "@/utils/models/article.model";
import connectMongo from "@/utils/database/ConnectToDB";
import { getErrorMessage } from "@/utils/errorHandler";
import ArticleCategory from "@/utils/models/articleCategory";

export const createArticle = async (formData) => {
    const { title, content, category, description, image, status, allowedForBlog, isFeatured } = formData;
    if (!title || !content || !category || !description || !image || !allowedForBlog || !isFeatured) {
        return { error: "Please fill in all fields" };
    }
    try {
        await connectMongo();
        const session = await getServerSession(authOptions);
        if (!session) {
            return { error: "Please login to continue" }
        }
        const user = await User.findOne({ email: session.user.email });

        const articleExists = await Article.findOne({ title });
        const slugExists = await Article.findOne({ slug: slugify(title) });

        if (articleExists || slugExists) {
            return { error: "Article already exists" };
        }

        await Article.create({
            title,
            slug: slugify(title),
            author: user._id,
            image,
            content,
            description,
            category,
            status,
            allowedForBlog,
            isFeatured
        });
        revalidatePath("/dashboard/blog");

        return { message: "Article created successful!" }
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getArticles = async () => {
    try {
        await connectMongo();
        const articles = await Article.find({}).sort({ createdAt: -1 });
        return JSON.stringify(articles);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getPrivacyPolicy = async () => {
    try {
        await connectMongo();
        const policy = await Article.findOne({ slug: "privacy-policy", category: "Policies" });
        if (!policy) {
            throw new Error("Privacy policy not found");
        }
        return JSON.stringify(policy);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getAdmissionPolicy = async () => {
    try {
        await connectMongo();
        const policy = await Article.findOne({ slug: "admission-policy", category: "Policies" });
        if (!policy) {
            throw new Error("Privacy policy not found");
        }
        return JSON.stringify(policy);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getOnlyPublishedArticlesForBlog = async (includeFeatured, limit = 50) => {
    try {
        await connectMongo();
        const articles = await Article.find({ status: "Published", allowedForBlog: true }).sort({ createdAt: -1 }).limit(limit);
        if (includeFeatured) {
            const featuredArticle = await Article.findOne({ status: "Published", isFeatured: true, allowedForBlog: true });
            let articlesExcludingFeaturedArticle = articles.filter(article => article._id.toString() !== featuredArticle._id.toString());   
            return JSON.stringify({ featuredArticle, articles: articlesExcludingFeaturedArticle });
        }
        return JSON.stringify({ articles });
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getArticlesByCategory = async (slug) => {
    try {
        await connectMongo();
        const category = await ArticleCategory.findOne({ slug });

        if (!category) {
            return [];
        }
        const articles = await Article.find({ category: category?.name, status: "Published", allowedForBlog: true }).sort({ createdAt: -1 });
        return articles;
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getFeaturedArticle = async () => {
    try {
        await connectMongo();
        const article = await Article.findOne({ isFeatured: true, status: "Published", allowedForBlog: true }).sort({ createdAt: -1 });
        return JSON.stringify(article);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getArticleById = async (id) => {
    try {
        await connectMongo();
        const article = await Article.findById(id);
        return JSON.stringify(article);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getArticleBySlug = async (slug) => {
    try {
        await connectMongo();
        const article = await Article.findOne({ slug }).populate("author");
        return JSON.stringify(article);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const deleteArticle = async (slug) => {
    try {
        await connectMongo();
        await Article.deleteOne({ slug })
        // revalidatePath("/dashboard/blog");
        return { message: "Article deleted successfully!" }
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const updateArticle = async (formData) => {
    const { id, title, content, category, description, image, status, allowedForBlog, isFeatured } = formData;

    try {
        await connectMongo();
        const article = await Article.findById(id);

        if (!article) {
            return { error: "Article not found" };
        }
        article.title = title;
        article.content = content;
        article.slug = slugify(title);
        article.category = category;
        article.description = description;
        article.status = status;
        article.allowedForBlog = allowedForBlog;
        article.isFeatured = isFeatured;
        if (image !== article.image) {
            article.image = image;
        }
        
        await article.save();
        revalidatePath("/dashboard/blog");
        return { message: "Article updated successfully!" }
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}