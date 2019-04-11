let express = require("express");
let app = express();
let path = require("path");
let mongoose = require("mongoose");

let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("spotlight/build"));


app.get("*", function(req, res){
	res.sendFile(path.join(__dirname, "./spotlight/public/index.html"));
})

app.listen(PORT, function(){
	console.log("App listening on port: " + PORT);
})
