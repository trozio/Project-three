var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Users = new Schema({
  name: String,
  photo: String
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", Users);

// Export the Book model
module.exports = User;
