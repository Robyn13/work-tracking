const mongoose = require("mongoose");
const Goals = require("./Goals");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Employee = new Schema(
  {
    name: {
      type: String
    },
    title: {
      type: String
    },
    goals: {
      type: []
    }
  },
  {
    collection: "employee"
  }
);

module.exports = mongoose.model("Employee", Employee);
