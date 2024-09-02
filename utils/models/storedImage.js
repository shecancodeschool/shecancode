import mongoose, { Schema, models } from "mongoose";

const StoredImageSchema = new Schema({
    image: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const StoredImage = models?.StoredImage || mongoose.model("StoredImage", StoredImageSchema);
export default StoredImage;