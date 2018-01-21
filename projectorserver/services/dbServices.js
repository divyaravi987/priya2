var MongoClient = require('mongodb').MongoClient

exports.createConnection = function(){
MongoClient.connect("mongodb://divyapriya:priyadivya@ds111138.mlab.com:11138/projector23").then(function(client){
  console.log("connected to mongodb");

  exports.database = client.db("projector23");
});
}
