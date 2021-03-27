const http = require("http");
const routes = require("./module/routes");
const url = require("url");

http.createServer((req, res) => {
    // 创建静态web服务
    routes.static(req, res, "static").then(function (flag) {
        if (!flag) {
            // 路由
            let pathname = url.parse(req.url).pathname;

            if (pathname === "/login") {
                res.writeHead(200, {'Content-Type' : `text/html;charset="utf-8"`});
                res.end("login");
            } else if (pathname === "/register") {
                res.writeHead(200, {'Content-Type' : `text/html;charset="utf-8"`});
                res.end("register");
            } else if (pathname === "/admin") {
                res.writeHead(200, {'Content-Type' : `text/html;charset="utf-8"`});
                res.end("admin");
            } else {
                res.writeHead(404, {'Content-Type' : `text/html;charset="utf-8"`});
                res.end("页面不存在");
            }
        }
    });
}).listen(8081);
