const http = require("http");
const path = require("path");
const fs = require("fs");
/*
//1、创建一个服务器实列对象

let server = http.createServer();

//2. 注册请求监听

server.on("request", (req, res) => {

    //告诉浏览器返回的数据是什么类型，返回的数据需要用什么字符集解析
    res.writeHead(200, {
       "Content-Type": "text/plain; charset=utf-8"
    });
    // 结束本次请求并且返回数据
    res.end("发射点发");
});

server.listen(8080);

 */

/*
request 对象是http.IncomingMessage类的实列
response 对象其实是http.ServerResponse类的实列
 */
http.createServer((req, res) => {
    // res.writeHead(200, {
    //     "Content-Type": "text/plain; charset=utf-8"
    // });
    // console.log(req.url);
    fs.readFile(path.join(__dirname, "www", req.url), (err, data) => {
        if (err) {
            res.writeHead(404, {
                "Content-Type": "text/html; charset=utf-8"
            });

            res.write();
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });
            res.write(data);
        }
        // end只会返回一次
        // 手动调用end结束本次请求
        res.end();
    });
}).listen(8080)