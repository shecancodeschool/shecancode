import { models, model, Schema } from "mongoose";

const CourseApplicationSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course"
    },
    courseName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "Other"]
    },
    age: {
        type: String,
        required: true
    },
    residence: {
        type: String,
        required: true
    },
    linkedInAccount: {
        type: String,
        required: false
    },
    githubAccount: {
        type: String,
        required: false
    },
    disabled: {
        type: String,
        required: true,
        default: "No"
    },
    disability: {
        type: String,
        required: false
    },
    doYouHaveALaptop: {
        type: String,
        required: true,
        enum: ["Yes", "No", "Not in good condition"]
    },
    doYouHaveAccessToInternet: {
        type: String,
        required: false,
        enum: ["Yes", "No", "Not Mentioned"]
    },
    howDidYouHearAboutThisJob: {
        type: String,
        required: true
    },
    academicBackground: {
        type: String,
        required: true
    },
    universityBeingAttended: {
        type: String,
        required: false
    },
    currentOccupation: {
        type: String,
        required: false
    },
    refugeeStatus:  {
        type: String,
        required: true,
        enum: ["Refugee", "Not a Refugee"]
    },
    availability: {
        type: String,
        required: false,
        enum: ["Day", "Evening", "Flexible"],
        default: "Day",
    },
    motivation: {
        type: String,
        required: true
    },
    selectionLevel: {
        type: String,
        required: true,
        enum: ["Pending Review", "Preparatory Period", "Scheduled For Technical Interview", "Completed Technical Interview", "Scheduled For One-on-One Interview", "Completed One-on-One Interview", "Offer Letter Sent - Admitted", "Rejection Letter Sent - Rejected"],
        default: "Pending Review"
    },
    confirmationOfWillingnessToPay: {
        type: String,
        required: true,
        enum: ["Yes", "No"],
        default: "No"
    },
    degree: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true,
        enum: ["Pending", "Invited for Coding Interview", "Completed Coding Interview", "Invited for One-on-One Interview", "Completed One-on-One Interview", "Rejected", "Admitted"],
        default: "Pending"
    }
}, {
    timestamps: true,
});

const CourseApplication = models.CourseApplication || model("CourseApplication", CourseApplicationSchema);
export default CourseApplication;