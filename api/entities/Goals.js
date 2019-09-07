const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Goals = new Schema(
  {
    commitment: {
      type: String
    }
  },
  {
    collection: "goals"
  }
);

module.exports = mongoose.model("Goals", Goals);
