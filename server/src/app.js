import express from "express";
import userRouter from "./routes/user.js";
import jobsRouter from "./routes/job.js";
import travelRoutes from "./routes/travel.js";
import cookieParser from "cookie-parser";

const app = express();

// CORS settings
app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:5173",
    "https://job-compass-app.netlify.app",
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());
app.use(cookieParser());

/**
 * We use /api/ at the start of every route!
 * This helps separate API endpoints from static frontend assets when both are served together.
 */

// Root route to check if server is running
app.get("/", (req, res) => {
  res.json({
    message: "Job Compass API Server is running!",
    version: "1.0.0",
    endpoints: {
      users: "/api/users",
      jobs: "/api/jobs",
      travel: "/api/travel",
    },
  });
});

app.use("/api/users", userRouter);
app.use("/api/jobs", jobsRouter);
app.use("/api/travel", travelRoutes);

export default app;
