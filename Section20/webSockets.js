// // Tạo kết nối:
// var socket = new WebSocket("ws://example.com:1234/resource");

// // Gửi dữ liệu:
// socket.send("Hello, server!");

// // Đóng kết nối:
// socket.close();

var http = require("http");
var ws = require("websocket-server");
var clientui = require("fs").readFileSync("wschatclient.html");

var httpserver = new http.Server();
httpserver.on("request", function (req, res) {
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(clientui);
    } else {
        res.writeHead(404); res.end();
    }
});

var wsserver = ws.createServer({server: httpserver});
wsserver.on("connection", function(socket) {
    socket.send("Welcome to the chat room.");
    socket.on("message", function(msg) {
        wsserver.broadcast(msg);
    });
});

httpserver.listen(8000);
