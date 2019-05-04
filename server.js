let express = require("express");
let app = express();
let path = require("path");
let bcrypt = require("bcrypt");
let cookieParser = require("cookie-parser");
let mongojs = require("mongojs");
let ObjectId = mongojs.ObjectId;
// let Users = require("./models/Users.js");
let PORT = process.env.PORT || 3001;
var databaseUrl = "project3";
var collections = ["Users"];

let db = mongojs(databaseUrl, collections)

app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());
app.use(express.static("spotlight/build"));

db.on("error", function(error) {
	console.log("Database Error:", error);
});

app.get("/api/users", function(req, res) {
	db.Users.find(function(error, results) {
		console.log("hello");
		res.json(results);
	});
});


app.get("/api/logout", function(req, res){
	res.clearCookie("id").send();
});

app.post("/api/filter", function(req, res){
	db.Posts.find({category: req.body.category}, function(error, results){
		res.json(results);
	})
});

app.post("/api/profile", function(req, res){
console.log(req.body.id);
	db.Users.find({id: req.body.id}, function(error, response){
		if (error) {
			console.log("API ERROR". error);
		}
		else {
			console.log("success response", response);
			res.json(response);
		}
	});
});

app.post("/api/password", function(req, res) {
	let query = {
		email: req.body.email
	};

	db.Users.find(query, function(error, results) {
		bcrypt.compare(req.body.password, results[0].password, function(err, response) {
			if (response) {
				// Passwords match
				console.log(results[0]._id);
				res.cookie("id", results[0]._id).json(results);
			} else {
				// Passwords don't match
			res.send({message: "Incorrect password"});
			}
		});
	});
});

app.post("/api/users", function(req, res) {
	let hash = bcrypt.hashSync(req.body.password, 10);
	let newUser = {
		name: req.body.name,
		password: hash,
		email: req.body.email
	}
	db.Users.insert(newUser, function(error, results) {
		if (!error) {
			db.Users.find({name: req.body.name}, function(error, user) {
			res.cookie("id", user[0]._id).json(user);
			return
		});
		console.log(error);
	};
});
});

app.get("/api/posts", function(req, res) {
	db.Posts.find(function(error, results) {
		if (!error) {
			res.json(results);
		};
	});
});

app.post("/api/posts", function(req, res) {
	let newPost = {
		author: req.body.author,
		name: req.body.name,
		rating: req.body.rating,
		category: req.body.category,
		review: req.body.review
	}
	db.Posts.insert(newPost, function(error, results) {
		if (!error) {
			res.json(newPost);
			return
		}
		console.log(error);
	});
});

app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./spotlight/public/index.html"));
});

app.listen(PORT, function() {
	console.log("App listening on port: " + PORT);
});
