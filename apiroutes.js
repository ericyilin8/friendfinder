


module.exports = function (app, fs, path) {


    app.post("/survey", function (req, res) {
        var data = req.body;
        var friends = require("./friends.json");
        //console.log(friends);
        var lowestDiff = 100;
        var friend;


        friends.forEach(function (val, i) {
            var answers = val.answers;
            var difference = 0;
            data.answers.forEach(function (val, i) {
                var tempDiff = Math.abs(val - answers[i]);
                difference += tempDiff;
            })

            if(difference < lowestDiff){
                lowestDiff = difference;
                friend = val;
            }



        })

        friends.push(data);
        //console.log(data);
        fs.writeFile(path.join(__dirname, "friends.json"), JSON.stringify(friends), 'utf8', function(){});

        console.log(friend);

        return res.json(friend);

    });

}