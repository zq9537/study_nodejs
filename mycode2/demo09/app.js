const http = require("http");
const fs = require("fs");
const common = require("./module/common");
const path = require("path");
const url = require("url");

// common.getFileMime(".html");


http.createServer((req, res) => {

    // 1.获取地址
    console.log(req.url);

    let pathname = url.parse(req.url).pathname;

    // 获取后缀名
    pathname = pathname === '/' ? '/index.html' : pathname;

    let extname = path.extname(pathname);
    // 2.通过fs模块读取文件
    if (pathname !== '/favicon.ico') {
        fs.readFile('./static' + pathname, async (err, data) => {
           if (err) {
               res.writeHead(404, {'Content-Type' : 'text/html;charset="utf-8"'});
               res.end("页面不存在");
               return;
           }
           // 根据后缀名获取content-type
           let mime = await common.getFileMime(extname);
            res.writeHead(200, {'Content-Type' : `${mime};charset="utf-8"`});
            res.end(data);
        });
    }
}).listen(8081);
