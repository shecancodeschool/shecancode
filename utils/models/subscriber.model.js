import mongoose, { Schema, models } from "mongoose";

const subscriberSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Subscriber = models?.Subscriber || mongoose.model("Subscriber", subscriberSchema);
export default Subscriber;