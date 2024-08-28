"use server"

import connectMongo from "@/utils/database/ConnectToDB";
import Course from "@/utils/models/course.model";

export const getAllCourses = async () => {
    try {
        await connectMongo();
        const courses = await Course.find({});
        return courses;
    } catch (e) {
        console.log("Error while fetching courses", e);
        return [];
    }
}

export async function getHomePageCourses() {
    try {
        await connectMongo();
        const response = await Course.find({}).limit(4);
        return response;
    } catch (e) {
        console.log("Error while fetching courses", e);
        return [];
    }
}

export const findCourseById = async (id) => {
    try {
        await connectMongo();
        const response = await Course.findById(id);
        return response;
    } catch (e) {
        console.log("Error while fetching course", e);
        return null;
    }
}

export const findCourseBySlug = async (slug) => {
    try {
        await connectMongo();
        const course = await Course.findOne({ slug: slug });
        return course;
    } catch (e) {
        console.log("Error while fetching course", e);
        return null;
    }
}

export const findCoursesByCategory = async (category) => {
    try {
        await connectMongo();
        const courses = await Course.find({ category: category });
        return courses;
    } catch (e) {
        console.log("Error while fetching courses", e);
        return [];
    }
}