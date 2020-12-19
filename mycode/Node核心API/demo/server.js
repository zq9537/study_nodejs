const http = require("http");
const url = require("url");
const ss = require("../15-StaticServer");

http.createServer((req, res) => {
    ss.StaticServer(req, res, __dirname);
}).listen("8080");