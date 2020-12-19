const path = require("path");
const fs = require("fs");
const mime = require("./mime.json");


function readFile (req, res, rootPath) {
    let filePath = path.join(rootPath, req.url);
    /*
        加载二进制文件不能写utf8
        如果不指定响应头，可能无法显示
     */
    let extName = path.extname(filePath) || ".json"
    let type = mime[extName];
    if (type.startsWith("text")) {
        type += "; charset=utf-8";
    }

    res.writeHead(200, {
        "Content-Type": type
    });

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.write("Server Error");
            // res.end("{}");
        } else {
            res.end(content);
        }
    });
}

exports.StaticServer = readFile;