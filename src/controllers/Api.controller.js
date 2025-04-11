import { asyncHandler } from "../utils/asyncHandeler.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js"
import { Api } from "../models/data.models.js"
import { uploadonCloudinary, deleteOnCloudinary } from "../utils/cloudinary.js"

const uploadApi = asyncHandler(async (req, res) => {
    const {
        project,
        feature,
        name,
        url,
        method,
        input,
        output,
        description
    } = req.body;

    if (
        [
            project,
            feature,
            name,
            url,
            method,
            input,
            output,
            description
        ].some(
            (fields) => fields?.trim() === ""
        )
    ) {
        throw new ApiError(400, "All fields are required");
    }

    const PostmanImageLocalPath = req.file?.path;

    if (!PostmanImageLocalPath) {
        throw new ApiError(400, "No file uploaded");
    }
    const PostmanImage = await uploadonCloudinary(PostmanImageLocalPath);

    if (!PostmanImage.url) {
        throw new ApiError(500, "Failed to upload image to cloudinary")
    }
    const api = new Api({
        project,
        feature,
        name,
        url,
        method,
        input,
        output,
        description,
        PostmanImage: PostmanImage.url
    });
    await api.save();
    res.status(201).json(api);
});

export  {
    uploadApi
}
