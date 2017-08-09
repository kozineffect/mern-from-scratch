// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var User = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  },
  { 
    collection: 'users'
  }
);

// Create the Model
module.exports = mongoose.model("User", User);

