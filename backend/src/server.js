require("dotenv").config();

const express = require("express");
const cors = require("cors");
const portfolioRoutes = require("./routes/portfolio");

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:3000",
  "https://localhost:3000",
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
  })
);

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "Portfolio API is running",
    version: "1.0.0",
    endpoints: {
      portfolio: "/api/portfolio",
      profile: "/api/portfolio/profile",
      skills: "/api/portfolio/skills",
      qualifications: "/api/portfolio/qualifications",
      projects: "/api/portfolio/projects",
      contact: "/api/portfolio/contact",
      health: "/api/health",
    },
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/portfolio", portfolioRoutes);

app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Portfolio API running on port ${PORT}`);
});
