import mongoose, { Schema, models } from "mongoose";

const CourseCategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: [2, "Category name must be at least 2 characters long"],
        maxlength: [32, "Category name must not be more than 32 characters long"],
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true
    }
}, {
    timestamps: true
});

const CourseCategory = models?.CourseCategory || mongoose.model("CourseCategory", CourseCategorySchema);
export default CourseCategory;