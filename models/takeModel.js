const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const takeSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 50,
    min: 0,
    max: 100,
    required: true,
  },
});

module.exports = mongoose.model("takeModel", takeSchema);
