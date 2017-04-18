var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
{"id":1,"name":"Chewing Gum","color":"Red"},
{"id":2,"name":"Pez","color":"Green"},
{"id":3,"name":"Marshmallow","color":"Pink"},
{"id":4,"name":"Candy Stick","color":"Blue"}

];

//What would need to go into candies
//in order to pass our first test?




router.get('/candies', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.json(candies);
});

router.get('/candies/:id', function(req, res) {
	res.json(candies[req.params.id-1]);
});


router.post('/candies', function(req, res){
	candies.push(req.body);
	res.json(req.body);
});

router.put('/candies/:id', function(req, res){
	//find the correct candy (given the id they give us)
	candies[req.params.id-1] = req.body;

	res.json(req.body);

});

router.delete('/candies/:id', function(req, res){
	delete candies[req.params.id-1];

	res.json({message: "deleted"});
});

// Fill out the rest of the routes here

module.exports = router;