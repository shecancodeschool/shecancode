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
        required: true
    },
    githubAccount: {
        type: String,
        required: true
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
    motivation: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

const CourseApplication = models.CourseApplication || model("CourseApplication", CourseApplicationSchema);
export default CourseApplication;