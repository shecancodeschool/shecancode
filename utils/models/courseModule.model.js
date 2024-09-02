import { Schema, model, models } from 'mongoose';

const CourseModuleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }
}, {
    timestamps: true
});

const CourseModule = models?.CourseModule || model('CourseModule', CourseModuleSchema);

export default CourseModule;
