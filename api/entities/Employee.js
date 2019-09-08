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
    startDate: {
      type: Date
    },
    reportsTo: {
      type: String
    },
    desiredCoachingCadence: {
      type: String
    },
    commuteTime: {
      type: Number
    },
    currentClient: {
      type: String
    },
    currentAddress: {
      type: String
    },
    notes: {
      type: Array
    },
    extraInfo: {
      type: Array
    },
    actionItems: {
      type: Array
    }
  },
  {
    collection: "employee"
  }
);

module.exports = mongoose.model("Employee", Employee);
