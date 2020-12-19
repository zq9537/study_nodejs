const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");
const template = require("art-template");

let persons = {
    "lisi": {
        name: "lisi",
        gender: "male",
        age: "33"
    },
    "zs": {
        name: "zs",
        gender: "female",
        age: "18"
    }
}

http.createServer((req, res) => {
    if (req.url.startsWith("/index") && req.method.toLowerCase() === "get") {
        // let filePath = path.join(__dirname, req.url)
        let obj = url.parse(req.url);
        let filePath = path.join(__dirname, obj.pathname);
        fs.readFile(filePath, "utf8", (err, content) => {
            if (err) {
                res.writeHead(404, {
                    "Content-Type": "text/plain; charset=utf-8"
                });
                res.end("Page Not Found");
            }
            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });
            res.end(content);
        });
    }
    else if (req.url.startsWith("/info") && req.method.toLowerCase() === "post") {
        let params = "";
        req.on("data", chunk => params += chunk);
        req.on("end", () => {
            // console.log(params);
            // qs.parse(params);
            let per = persons[qs.parse(params).userName];
            let filePath = path.join(__dirname, req.url);
            /*
            fs.readFile(filePath, "utf8", (err, content) => {
                if (err) {
                    res.writeHead(404, {
                        "Content-Type": "text/plain; charset=utf-8"
                    });
                    res.end("Page Not Found");
                }
                content = content.replace("!!!name!!!", per.name);
                content = content.replace("!!!gender!!!", per.gender);
                content = content.replace("!!!age!!!", per.age);
                res.writeHead(200, {
                    "Content-Type": "text/html; charset=utf-8"
                });
                res.end(content);
            });

             */
            res.writeHead(200, {
                "Content-Type": "text/html; charset=utf-8"
            });
            let html = template(filePath, per);
            res.end(html);
        });
    }
}).listen(3000);