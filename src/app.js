import express from "express";
import cors from "cors";
import LIMIT from "./constants.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({      // for cors setting
    origin: process.env.CORS_ORIGIN,    // to allow origin from front end
    credentials: true
}))

app.use(express.json({ limit: LIMIT }));
app.use(express.urlencoded({ extended: true, limit: LIMIT }));
app.use(express.static("public"));
app.use(cookieParser());

export default app // export { app }