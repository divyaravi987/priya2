var movies=require('./moviedata');
var dbServices=require('../services/dbServices');

exports.getAllMovies = function(req,res){
  var db = dbServices.database;
  var moviesCollection = db.collection("movies");

  moviesCollection.find().toArray().then(function(result){
    var outputJSON = {
      "ISsuccess" :true,
      "data":result
    }
    return res.json(outputJSON);
  });

};
exports.addNewMovie = function (req,res,next) {
  var db = dbServices.database;
  movie = req.body;
  moviesCollection=db.collection("movies");
  moviesCollection.insert(movie).then(function(save_data){
    return res.json({
      "isSuccess":true
    });
  });


}
