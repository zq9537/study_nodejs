const http = require("http");
const path = require("path");
// const fs = require("fs");
// const mime = require("./mime.json");
const ss = require("./15-StaticServer");


/*
http.createServer((req, res) => {
    let filePath = path.join(__dirname, "www", req.url);
    // 加载二进制文件不能写utf8
    // 如果不指定响应头，可能无法显示
    let extName = path.extname(filePath);
    let type = mime[extName];
    if (type.startsWith("text")) {
        type += "; charset=utf-8";
    }

    res.writeHead(200, {
        "Content-Type": type
    });

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.end("Server Error");
        } else {
            res.end(content);
        }
    });
}).listen(8080);
 */

http.createServer((req, res) => {
    let rootPath = path.join(__dirname, "www");
    ss.StaticServer(req, res, rootPath);
}).listen("8080");