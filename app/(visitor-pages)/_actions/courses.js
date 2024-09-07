"use server"

import connectMongo from "@/utils/database/ConnectToDB";
import Course from "@/utils/models/course.model";
import { z } from "zod";
import CourseApplication from "@/utils/models/courseApplication.model";
import slugify from "react-slugify";
import { getErrorMessage } from "@/utils/errorHandler";
import { revalidatePath } from "next/cache";
import CourseModule from "@/utils/models/courseModule.model";

const CourseApplicationSchema = z.object({
    course: z.string(),
    firstName: z.string().min(4, "First name is required"),
    lastName: z.string().min(4, "Last name is required"),
    email: z.string().email("Invalid email address").min(8, "Email is required"),
    phone: z.string().min(10, "Phone number is required"),
    gender: z.string().min(4, "Gender is required"),
    age: z.string().min(2, "Age is required"),
    residence: z.string().min(3, "Residence is required"),
    linkedInAccount: z.string().optional(),
    githubAccount: z.string().optional(),
    doYouHaveALaptop: z.string().min(4, "This field is required"),
    doYouHaveAccessToInternet: z.string().min(4, "This field is required"),
    availability: z.string().min(4, "This field is required"),
    howDidYouHearAboutThisJob: z.string().min(4, "This field is required"),
    academicBackground: z.string().min(4, "Academic background is required"),
    universityBeingAttended: z.string().optional(),
    currentOccupation: z.string().min(4, "Occupation is required"),
    motivation: z.string().min(1, "Motivation is required"),
});

export const addNewCourse = async (formData) => {
    try {
        await connectMongo();
        const doesCourseExist = await Course.findOne({ title: formData.title });
        if (doesCourseExist) {
            return {
                message: "Course already exists",
                status: 400,
            };
        }
        formData.title = formData.title.trim();
        formData.slug = slugify(formData.title);
        formData.duration = Number(formData.duration);

        const course = await Course.create(formData);
        return {
            course,
            message: "Course created successfully",
            status: 200
        };
    } catch (e) {
        console.log("Error while creating course application", e);
        return {
            error: getErrorMessage(e)
        };
    }
}

export const updateCourse = async (formData) => {
    const { id, title, level, location, schedule, coverImage, status, category, subTitle, description, duration, durationType, startDate, endDate, applicationDeadLine, feeDescription, fee, isOpen, isFeatured, prerequisites } = formData;
    try {
        await connectMongo();
        const course = await Course.findById(id);
        if (!course) {
            return {
                error: "Course not found",
                status: 404
            };
        }
        course.title = title;
        course.level = level;
        course.location = location && location;
        course.schedule = schedule && schedule;
        course.status = status && status;
        course.category = category && category;
        course.subTitle = subTitle && subTitle,
            course.description = description && description;
        course.duration = duration && duration;
        course.durationType = durationType && durationType;
        course.startDate = startDate && startDate;
        course.fee = fee && fee;
        course.feeDescription = feeDescription && feeDescription;
        course.applicationDeadLine = applicationDeadLine && applicationDeadLine;
        course.endDate = endDate && endDate;
        course.isOpen = isOpen && isOpen;
        course.isFeatured = isFeatured && isFeatured;
        course.prerequisites = prerequisites && prerequisites;
        course.slug = slugify(title);
        course.coverImage = coverImage && coverImage;

        await course.save();
        revalidatePath("/dashboard/courses");

        return {
            course,
            message: "Course updated successfully",
            status: 200
        };
    } catch (e) {
        console.log("Error while updating course", e);
        return {
            error: getErrorMessage(e)
        };
    }
}

export const getAllCourses = async (includeDrafts) => {
    try {
        await connectMongo();
        var courses = [];
        if (includeDrafts) {
            courses = await Course.find({});
        } else {
            courses = await Course.find({ status: "Published" });
        }
        return JSON.stringify(courses);
    } catch (e) {
        console.log("Error while fetching courses", e);
        return [];
    }
}

export async function getHomePageCourses() {
    try {
        await connectMongo();
        const response = await Course.find({ status: "Published" }).limit(4);
        return response;
    } catch (e) {
        console.log("Error while fetching courses", e);
        return {
            error: getErrorMessage(e)
        };
    }
}

export const findCourseById = async (id) => {
    try {
        await connectMongo();
        const course = await Course.findById(id);
        return JSON.stringify(course);
    } catch (e) {
        console.log("Error while fetching course", e);
        return null;
    }
}

export const findCourseBySlug = async (slug) => {
    try {
        await connectMongo();
        const course = await Course.findOne({ slug: slug });
        const courseModules = await CourseModule.find({ course: course._id });
        return JSON.stringify({ course, courseModules });
    } catch (e) {
        console.log("Error while fetching course", e);
        return null;
    }
}

export const findCoursesByCategory = async (category) => {
    try {
        await connectMongo();
        const courses = await Course.find({ category: category, status: "Published" });
        return JSON.stringify(courses);
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
        const alreadyApplied = await CourseApplication.findOne({ course: data.course, email: data.email });
        if (alreadyApplied) {
            return { error: "You have already applied to this course." };
        }
        const application = await CourseApplication.create(data);
        if (application) {
            return {
                message: "Successfully applied for course.",
            }
        }
    } catch (e) {
        console.log("Error while applying for course", e);
        return {
            error: getErrorMessage(e)
        }
    }
}

export const deleteCourse = async (slug) => {
    try {
        await connectMongo();
        const course = await Course.findOne({ slug });
        if (!course) {
            return {
                error: "Course not found",
                status: 404
            };
        }
        const deleted = await Course.findByIdAndDelete(course._id);
        revalidatePath("/dashboard/courses");
        return {
            message: "Course deleted successfully",
            status: 200
        };
    } catch (e) {
        console.log("Error while deleting course", e);
        return {
            error: getErrorMessage(e)
        };
    }
}