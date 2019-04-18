var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Posts = new Schema({
  name: String,
  photo: String
});

// This creates our model from the above schema, using mongoose's model method
var Post = mongoose.model("Post", Posts);

// Export the Book model
module.exports = Post;
