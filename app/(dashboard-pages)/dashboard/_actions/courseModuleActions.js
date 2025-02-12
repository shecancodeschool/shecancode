"use server"

import { revalidatePath } from "next/cache";
import CourseModule from "@/utils/models/courseModule.model";
import connectMongo from "@/utils/database/ConnectToDB";
import { getErrorMessage } from "@/utils/errorHandler";
import Course from "@/utils/models/course.model";

export const createCourseModule = async (formData) => {
    const { title, description, course } = formData;
    // console.log(formData);
    if (!title || !description) {
        return { error: "Please fill in all fields" };
    }
    try {
        await connectMongo();
        const courseModuleExists = await CourseModule.findOne({ title });

        if (courseModuleExists) {
            return { error: "Course Module already exists" };
        }

        await CourseModule.create({
            title,
            description,
            course
        });
        return { message: "Course Module created successful!" }
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getCourseModules = async () => {
    try {
        await connectMongo();
        const courseModules = await CourseModule.find({}).sort({ createdAt: -1 });
        return JSON.stringify(courseModules);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getCourseModuleById = async (id) => {
    try {
        await connectMongo();
        const courseModule = await CourseModule.findById(id).populate("course");
        return JSON.stringify(courseModule);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const getCourseModuleByCourseId = async (course) => {
    try {
        await connectMongo();
        const courseModules = await CourseModule.find({ course: course });
        return JSON.stringify(courseModules);
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const deleteCourseModule = async (id) => {
    try {
        await connectMongo();
        await CourseModule.findByIdAndDelete(id);
        revalidatePath(`/dashboard/courses/${id}/modules`);
        return { message: "CourseModule deleted successfully!" }
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}

export const updateCourseModule = async (formData) => {
    const { id, title, description, courseSlug } = formData;

    try {
        await connectMongo();
        const courseModule = await CourseModule.findById(id);
        // const selectedCourse = await Course.findById(course);
        if (!courseModule) {
            return { error: "CourseModule not found" };
        }
        courseModule.title = title;
        courseModule.description = description;
        
        await courseModule.save();
        revalidatePath(`/dashboard/course/${courseSlug}/modules`);
        return { message: "Course Module updated successfully!" }
    } catch (e) {
        return {
            error: getErrorMessage(e)
        }
    }
}