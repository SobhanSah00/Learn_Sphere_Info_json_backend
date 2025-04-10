import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin : process.env.CORS_ORIGIN,
        credentials : true
    })
);

app.use(express.json({limit : "16mb"}))
app.use(express.urlencoded({extended : true, limit  : "16mb"}))
app.use(express.static("public"))
app.use(cookieParser());

import apiRouter from "./routes/api.routes.js"

app.use("/api/v1/apiuploads",apiRouter)

export {
    app
}