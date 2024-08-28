import { Schema, model, models } from 'mongoose';
import slugify from 'react-slugify';

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    durationType: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    secondImage: {
        type: String,
        required: true
    },
    isOpen: {
        type: Boolean,
        default: false
    },
    // Additional fields based on the provided data structure
    detailedDescription: {
        paragraphOne: String,
        paragraphTwo: String,
        paragraphThree: String,
        paragraphFour: String
    },
    keyInfo: [
        {
            title: String,
            desc: String
        }
    ],
    prerequisites: [String],
    modules: [
        {
            id: Number,
            question: String,
            answer: String
        }
    ]
}, {
    timestamps: true
});

// Pre-save middleware to generate slug from title
CourseSchema.pre('save', function (next) {
    if (this.isModified('title') || this.isNew) {
        this.slug = slugify(this.title, { lower: true, strict: true });
    }
    next();
});

const Course = models?.Course || model('Course', CourseSchema);

export default Course;
