const mongoose = require("mongoose");

// define the person schema
var personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  }
});

// create person model
var Person = mongoose.model("Person", personSchema);

// export person model
module.exports = Person;