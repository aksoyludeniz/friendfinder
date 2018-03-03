var surveyData = require("../app/data/friends.js");
console.log(surveyData);


module.exports = function(app) {


  app.get("/api/friends",
  function(req, res) {
    res.json(surveyData);
  });


  app.post("/api/friends", function(req, res) {
    console.log(req.body);

    var bestMatch = {
    			name: "",
    			photo: "",
    			friendDifference: 1000
    		};


    		var userData 	= req.body;
    		var userName 	= userData.name;
    		var userPhoto 	= userData.photo;
    		var userScores 	= userData.scores;


    		var totalDifference = 0;


    		for  (var i=0; i< surveyData.length; i++) {

    			console.log(surveyData[i].name);
    			totalDifference = 0;
          console.log(totalDifference);


    			for (var j=0; j< surveyData[i].scores[j]; j++){

            // received error message from the line below 0 is not a property
    				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(surveyData[i].scores[j]));


    				if (totalDifference <= bestMatch.friendDifference){


    				 bestMatch.name = friends[i].name;
    				 bestMatch.photo = friends[i].photo;
    				 bestMatch.friendDifference = totalDifference;


  }

}

}

         friends.push(userData);

         res.json (bestMatch);

});

}
  //    for (i = 0; i < surveyData.length; i++) {
  //
  //      console.log(friends[i].name);
  //      totalDifference = 0;
  //    var compatibili surveyData[i].scores.length; j++) {
  //      var friendScore = surveyData[i].scores[j];
  //      var userScore = userData["scores[]"][j];
  //      var difference = friendScore - userScore;
  //      var result = Math.abs(difference);
  //       compatibility += result
  //
  //
  //
  //      // console.log(surveyData[i].scores[j]);
  //      // console.log(userData["scores[]"][j]);
  //    }
  //      var friendCompatibility = {};
  //      friendCompatibility.name = surveyData[i].name;
  //      friendCompatibility.photo = surveyData[i].photo;
  //      friendCompatibility.compatibility = compatibility;
  //
  //      userChoices.push(friendCompatibility);
  //
  //   }
  //    console.log(userChoices);
  //     for (i = 0; i < userChoices.length; i++) {
  //       if
  //     }
  // });
  //
  //
  //
  // // app.post("/api/new", function(req, res) {
  // //   var newFriend = req.body;
  // //   newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  // //
  // //   console.log(newFriend);
  // //
  // //   surveyData.push(newFriend);
  // //   res.json(newFriend);
  // // });
  //
  //   // if (surveyData.length < 5) {
  //   //   friends.push(req.body);
  //   //   res.json(true);
  //   // }
  //
  // };
