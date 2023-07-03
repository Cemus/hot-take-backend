const express = require("express");
const Take = require("../models/takeModel");
const router = express.Router();
const {
  getTakes,
  getSingleTake,
  updateTake,
  createTake,
} = require("../controllers/takeController");

// GET every takes
router.get("/", getTakes);

// GET one take
router.get("/:id", getSingleTake);

// PATCH one take
router.patch("/:id", updateTake);

// POST one take
router.post("/", createTake);

module.exports = router;
