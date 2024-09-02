import { Schema, models, model } from "mongoose";

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    image: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["Draft", "Published", "Archived"],
        default: "Draft"
    },
    isFeatured: {
        type: Boolean,
        required: true,
        default: false
    },
    views: {
        type: Number,
        default: 0,
        required: true
    },
    allowedForBlog: {
        type: Boolean,
        default: false,
        required: true
    }
}, {
    timestamps: true
});

const Article = models?.Article || model("Article", articleSchema);

export default Article;