let express = require("express");
let app = express();
let path = require("path");
let mongoose = require("mongoose");

let PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.get("/", function(req, res){
	res.send("Hello");
})

app.listen(PORT, function(){
	console.log("App listening on port: " + PORT);
})
