import mongoose, { Schema, models } from "mongoose";

const subscriberSchema = new Schema({
    email: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Subscriber = models?.Subscriber || mongoose.model("Subscriber", subscriberSchema);
export default Subscriber;