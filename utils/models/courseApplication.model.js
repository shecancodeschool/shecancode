import { models, model, Schema } from "mongoose";

const CourseApplicationSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: "Course"
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
    doYouHaveALaptop: {
        type: String,
        required: true,
        enum: ["Yes", "No"]
    },
    doYouHaveAccessToInternet: {
        type: String,
        required: true,
        enum: ["Yes", "No"]
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
    availability: {
        type: String,
        required: true,
        enum: ["Day", "Evening", "Flexible"]
    },
    motivation: {
        type: String,
        required: true
    },
    selectionLevel: {
        type: String,
        required: true,
        enum: [ "Pending Review", "Preparatory Period", "Scheduled For Technical Interview", "Completed Technical Interview", "Scheduled For One-on-One Interview", "Completed One-on-One Interview", "Offer Letter Sent - Admitted", "Rejection Letter Sent - Rejected"],
        default: "Pending Review"
    }
}, {
    timestamps: true,
});

const CourseApplication = models.CourseApplication || model("CourseApplication", CourseApplicationSchema);
export default CourseApplication;
