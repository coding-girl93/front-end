/**
 * Created by lyl on 16/8/25.
 */
var http = require('http');
http.createServer(function (req,res) {
    res.end('success',200);
}).listen(8000);
console.log("ddd");
console.log(module.paths);