var path = require('path')
var friendsArray = require("../data/friends");


module.exports = function(app){

app.get('/api/friends', function(req, res){
    res.json(friendsArray)
});

app.post('/api/friends', function (req, res){

    var userInput = req.body;
	var userScore = req.body.scores;
	var bestMatch = 0;
	var scoresArray = []

	for (var i = 0; i < friendsArray.length; i++) {

	var scoresDiff = 0;

	for (var x = 0; x < userScore.length; x++) {
		scoresDiff += (Math.abs(parseInt(friendsArray[i].scores[x]) - parseInt(userScore[x])));

	function getSum(total, num) {
			return total + num};
	} 
	scoresArray.push(scoresDiff)

	for(var i=0; i<scoresArray.length; i++){
		if(scoresArray[i] <= scoresArray[bestMatch]){
		  bestMatch = i;
		}
	  }
	
	var bff = friendsArray[bestMatch];
    res.write(bff.toString());

		}

		friendsArray.push(userInput);	
});
};