const Take = require("../models/takeModel");
const mongoose = require("mongoose");
// GET every takes
const getTakes = async (req, res) => {
  const takes = await Take.find({});
  if (!takes) {
    return res.status(204);
  }
  res.status(200).json(takes);
};
// GET one take
const getSingleTake = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such take" });
  }
  const take = await Take.findById(id);
  if (!take) {
    return res.status(404).json({ error: "No such take" });
  }
  res.status(200).json(take);
};
// PATCH one take
const updateTake = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Not a valid id" });
  }
  const take = await Take.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!take) {
    return res.status(404).json({ error: "No such take" });
  }
  res.status(200).json(take);
};

// Create take
const createTake = async (req, res) => {
  const { content, votes } = req.body;
  try {
    const take = await Take.create({ content, votes });
    res.status(200).json(take);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete take
const deleteTake = async (req, res) => {
  const { id } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such take" });
  }
  const take = await Take.findOneAndDelete({ _id: id });
  if (!take) {
    return res.status(404).json({ error: "No such take" });
  }
  res.status(200).json(take);
};

module.exports = { getTakes, getSingleTake, updateTake, createTake };
