let express = require("express");
let app = express();
let path = require("path");
let bcrypt = require("bcrypt");
// let mongoose = require("mongoose");
let mongojs = require("mongojs");
// let Users = require("./models/Users.js");
let PORT = process.env.PORT || 3000;
var databaseUrl = "project3";
var collections = ["Users"];

let db = mongojs(databaseUrl, collections)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("spotlight/build"));

db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/api/users", function(req, res){
	db.Users.find(function(error, results){
		console.log("hello");
		res.json(results);
	});
});

app.post("/api/password", function(req, res){
	let query = {name: req.body.name};
	db.Users.find(query, function(error, results){

bcrypt.compare(req.body.password, results[0].password, function(err, response) {
  if(response) {
   // Passwords match
  res.json(results);
  } else {
   // Passwords don't match
   res.send("Incorrect password");
  }
});

	});
});

app.post("/api/users", function(req, res){
	let hash = bcrypt.hashSync(req.body.password, 10);
	let newUser = {
		name: req.body.name,
		password: hash,
		email: req.body.email,
		photo: req.body.photo
}
	db.Users.insert(newUser, function(error, results){
		if(!error){
			res.json(newUser);
			return
		}
		console.log(error);
	});
});

app.get("/api/posts", function(req, res){
	db.Posts.find(function(error, results){
		if(!error){
			res.json(results);
		};
	});
});

app.post("/api/posts", function(req, res){
	let newPost = {
		author: req.body.author,
		rating: req.body.rating,
		review: req.body.review
}
	db.Posts.insert(newPost,function(error, results){
		if(!error){
			res.json(newPost);
			return
		}
		console.log(error);
	});
});

app.get("*", function(req, res){
	res.sendFile(path.join(__dirname, "./spotlight/public/index.html"));
});

app.listen(PORT, function(){
	console.log("App listening on port: " + PORT);
})
