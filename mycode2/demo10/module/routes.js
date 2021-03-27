const fs = require("fs");
const path = require("path");
const url = require("url");

getFileMime = function (extname) {
    let data = fs.readFileSync("./data/mime.json");
    let mime = JSON.parse(data.toString())
    return mime[extname];
}

exports.static = function (req, res, staticPath) {
    // 1.获取地址
    return new Promise((resolve, reject) => {
        let pathname = url.parse(req.url).pathname;

        // 获取后缀名
        pathname = pathname === '/' ? '/index.html' : pathname;

        let extname = path.extname(pathname);
        // 2.通过fs模块读取文件
        if (pathname !== '/favicon.ico') {
            fs.readFile('./' + staticPath + pathname, (err, data) => {
                if (!err) {
                    let mime = getFileMime(extname);
                    res.writeHead(200, {'Content-Type' : `${mime};charset="utf-8"`});
                    res.end(data);
                } else {
                    resolve(false);
                }
            });
        }
    });
}
