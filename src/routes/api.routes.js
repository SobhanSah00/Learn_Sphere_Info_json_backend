import { Router } from "express";
import {
    uploadApi
} from "../controllers/Api.controller.js"

import { upload } from "../middlewares/multer.middleware.js"
const router = Router()

router.route("/upload").post(
    upload.single("PostmanImage"),
    uploadApi
)

export default router
