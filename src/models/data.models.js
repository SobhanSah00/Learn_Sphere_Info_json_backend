import mongoose, { Schema } from "mongoose";

const apiSchema = new Schema(
    {
        project: {
            type: String,
            required: true // e.g., "youtube"
        },
        feature: {
            type: String,
            required: true // e.g., "user", "video"
        },
        name: {
            type: String,
            required: true // e.g., "login"
        },
        url: {
            type: String,
            required: true
        },
        method: {
            type: String,
            enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
            required: true
        },
        input: {
            type: Object,
            default: {}
        },
        output: {
            type: Object,
            default: {}
        },
        description: {
            type: String,
            default: ""
        },
        PostmanImage: {
            type: String,
            // default: "" // path to Postman screenshot
        },
    },
    {
        timestamps : true
    }
)

export const Api = mongoose.model("Api", apiSchema)