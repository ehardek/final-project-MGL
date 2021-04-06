const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: { type: String, required: true },
  developer: { type: String, required: true },
  genre: String,
  date: { type: Date}
});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;
