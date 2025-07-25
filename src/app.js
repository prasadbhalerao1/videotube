//Import express
import express from 'express';
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN, // Set this in your .env file
        credentials: true, // Allow credentials if needed
    })
)

// Common middlewares
app.use(express.json({limit: '50mb'})); // Increase the limit for JSON payloads
app.use(express.urlencoded({ limit: '50mb', extended: true })); // Increase the limit for URL-encoded payloads Url encoded mean that the data is sent in the form of key-value pairs
app.use(express.static('public')); // Serve static files from the 'public' directory

// import routes
import healthcheckRouter from "./routes/healthcheck.routes.js"


// routes

app.use("/api/v1/healthcheck", healthcheckRouter)
// Once anyone hits a request on /api/v1/healthcheck the request will be handled by healthcheckRouter


export { app };