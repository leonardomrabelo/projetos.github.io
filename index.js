const express = require('express');
const app = express();

app.get("/", function(req, res){
	res.sendFile(__dirname + "/");
});

app.listen(8081, function(){
	console.log("Servidor rodando");
});