var http=require('http');
port=3000;
host="127.0.0.1"

var server = http.createServer(function(req,res){
  res.writeHead(200, {"Content-Type":"text/plain"}
);
res.write("hello World");
res.end();
});

server.listen(port,host,function(){
  cosole.log("listen....");
});
