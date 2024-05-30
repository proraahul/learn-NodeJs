const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

//POST route to add a person
router.post("/", async (req, res) => {
  try {
    const data = req.body; //assuming the req.body contains the person data

    // create a new Person document using the mongoose model
    const newPerson = new Person(data);

    // save the new person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

// get method to get the person
router.get("/", async (req, res) => {
  try {
    const response = await Person.find();
    console.log("data fetched successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

// dynamic/paramtrised routing api call
router.get("/:workType", async (req, res) => {
  try {
    // extract the work type from the URL parameter
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

// update operation
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //extract the id from the URL parameter
    const updatePersonData = req.body; //update data for the person

    const updatedPersonResponse = await Person.findByIdAndUpdate(
      personId,
      updatePersonData,
      {
        new: true, //return the updated document
        runValidators: true, //Run mongoose validation
      }
    );

    if (!updatedPersonResponse) {
      return res.status(404).json({ error: "Person Not Found" });
    }

    console.log("data updated");
    res.status(200).json(updatedPersonResponse);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

// delete operation
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //extract the id from the URL parameter
    const deletedPersonResponse = await Person.findByIdAndDelete(personId);
    if (!deletedPersonResponse) {
      return res.status(404).json({ error: "Person Not Found" });
    }
    console.log("data deleted");
    res.status(200).json(deletedPersonResponse);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Internal Server Error" });
  }
});

module.exports = router;
