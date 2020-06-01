var friends = require("../data/friends");

module.exports = function (app) {
  app.get("/api/firnds", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var match = {
      name: "",
      photo: "",
      scoreDifference: 1000,
    };

    var user = req.body;
    var userScore = user.scores;

    var difference = 0;

    for (let i = 0; i < friends.length; i++) {
      difference = 0;

      for (let j = 0; j < friends[i].scores[j]; j++) {
        difference += Math.abs(userScore[j] - friends[i].scores[j]);

        if (difference <= match.scoreDifference) {
          match.name = friends[i].name;
          match.photo = friends[i].photo;
          match.scoreDifference = difference;
        }
      }
    }

    friends.push(userData);

    res.json(match);
  });
};
