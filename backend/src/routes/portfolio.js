const express = require("express");
const portfolio = require("../data/portfolio");

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    success: true,
    data: portfolio,
    message: "Portfolio data retrieved successfully",
  });
});

router.get("/profile", (_req, res) => {
  res.json({ success: true, data: portfolio.profile });
});

router.get("/skills", (_req, res) => {
  res.json({ success: true, data: portfolio.skills });
});

router.get("/qualifications", (_req, res) => {
  res.json({ success: true, data: portfolio.qualifications });
});

router.get("/projects", (_req, res) => {
  res.json({ success: true, data: portfolio.projects });
});

router.get("/contact", (_req, res) => {
  res.json({ success: true, data: portfolio.contact });
});

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address.",
    });
  }

  res.status(201).json({
    success: true,
    message: "Thank you for reaching out! Your message has been received.",
    data: {
      name,
      email,
      receivedAt: new Date().toISOString(),
    },
  });
});

module.exports = router;
