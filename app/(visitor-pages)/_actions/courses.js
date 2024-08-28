"use server"

import connectMongo from "@/utils/database/ConnectToDB";
import Course from "@/utils/models/course.model";
import { z } from "zod";
import CourseApplication from "@/utils/models/courseApplication.model";

const CourseApplicationSchema = z.object({
    course: z.string(),
    firstName: z.string().min(4, "First name is required"),
    lastName: z.string().min(4, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    gender: z.enum(["Male", "Female", "Other"]),
    age: z.string().min(2, "Age is required"),
    residence: z.string().min(3, "Residence is required"),
    linkedInAccount: z.string().url("Invalid LinkedIn URL"),
    githubAccount: z.string().url("Invalid GitHub URL"),
    howDidYouHearAboutThisJob: z.string().min(4, "This field is required"),
    academicBackground: z.string().min(4, "Academic background is required"),
    universityBeingAttended: z.string().optional(),
    currentOccupation: z.string().min(4, "Occupation is required"),
    motivation: z.string().min(1, "Motivation is required"),
  });

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

export const applyForCourse = async (prevState, formData) => {
    const result = CourseApplicationSchema.safeParse(Object.fromEntries(formData.entries()));
    
    if (result.success === false) {
        return result.error.formErrors.fieldErrors;
    }
    const data = result.data;

    try {
        await connectMongo();
        const alreadyApplied = await CourseApplication.findOne({ email: data.email });
        if (alreadyApplied) {
            return { error: "You have already applied to this course." };
        }
        const application = await CourseApplication.create(data);
        if (application) {
            return { 
                message: "Successfully applied for course." 
            }
        }
    } catch (e) {
        console.log("Error while applying for course", e);
        return {
            error: getErrorMessage(e)
        }
    }
}