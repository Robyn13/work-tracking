const express = require("express");
const app = express();
const employeeRoutes = express.Router();

// Require Business model in our routes module
let Employee = require("../entities/Employee");

// Defined store route
employeeRoutes.route("/add").post(function(req, res) {
  let employee = new Employee(req.body);
  employee
    .save()
    .then(employee => {
      res.status(200).json(employee);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
employeeRoutes.route("/").get(function(req, res) {
  Employee.find(function(err, employee) {
    if (err) {
      console.log(err);
    } else {
      res.json(employee);
    }
  });
});

// Defined edit route
employeeRoutes.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  Employee.findById(id, function(err, employee) {
    res.json(employee);
  });
});

//  Defined update route
employeeRoutes.route("/update/:id").post(function(req, res) {
  Employee.findById(req.params.id, function(err, employee) {
    if (!employee) {
      res.status(400).send("unable to find employee");
      return;
    } else {
      employee.name = req.body.name;
      employee.title = req.body.title;
      employee.startDate = req.body.startDate;
      employee.reportsTo = req.body.reportsTo;
      employee.desiredCoachingCadence = req.body.desiredCoachingCadence;
      employee.commuteTime = req.body.commuteTime;
      employee.currentClient = req.body.currentClient;
      employee.currentAddress = req.body.currentAddress;
      employee.extraInfo = req.body.extraInfo;
      employee.notes = req.body.notes;
      employee.actionItems = req.body.actionItems;

      employee
        .save()
        .then(employee => {
          res.json(employee);
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
employeeRoutes.route("/delete/:id").get(function(req, res) {
  Employee.findByIdAndRemove({ _id: req.params.id }, function(err, employee) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = employeeRoutes;
