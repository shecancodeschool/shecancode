import { Schema, model, models } from 'mongoose';
import slugify from 'react-slugify';

const CourseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced', 'All']
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
    doYouHaveALaptop: {
        type: String,
        required: true,
        enum: ['Yes', 'No'],
        default: 'Yes'
    },
    doYouHaveAccessToInternet: {
        type: String,
        required: true,
        enum: ['Yes', 'No'],
        default: 'Yes'
    },
    availability: {
        type: String,
        required: true,
        enum: {
            values: ['Day', 'Evening', 'Flexible'],
            message: '{VALUE} is not supported'
        },
        default: "Flexible",
    },
    duration: {
        type: String,
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
    endDate: {
        type: Date,
        required: true
    },
    feeDescription: {
        type: String,
        required: false
    },
    applicationDeadLine: {
        type: Date,
        required: true,
    },
    fee: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    doYouHaveAnyDisability: {
        type: String,
        required: true,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    whatIsYourDisability: {
        type: String,
        required: false,
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
