import { Schema, model, models } from 'mongoose';
import slugify from 'react-slugify';

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    location: {
        type: String,
        required: true,
        enum: {
            values: ['Online', 'In-Person', 'Hybrid'],
            message: '{VALUE} is not supported'
        }
    },
    schedule: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        unique: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Published', 'Draft'],
        default: 'Draft'
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
    isFeatured: {
        type: String,
        required: true,
        enum: {
            values: ['Yes', 'No'],
            message: '{VALUE} is not supported'
        },
        default: "No",
    },
    isOpen: {
        type: String,
        required: true,
        enum: {
            values: ['Yes', 'No'],
            message: '{VALUE} is not supported'
        },
        default: "No",
    },
    prerequisites: {
        type: String,
        required: true
    }
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
