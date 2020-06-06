var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
        
    }
    response.writeHead(200);
    // 파일 경로가 나타난다.
    // 또한 액션이 일어날 때마다 직접 불러오게된다.
//    console.log(__dirname + url);
    // Node.js의 기능
    // url에 따라서 사용자에게 전달할 수 있는 데이터가 바뀐다.
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);