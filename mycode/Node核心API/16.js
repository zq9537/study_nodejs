const url = require("url");
const http = require("http");

http.createServer((req, res) => {
    let {pathname, query} = url.parse(req.url, true);
    console.log(pathname, query);
    res.end()
}).listen(8080);

// let str = "http://root:123456@www.baidu.com:8080/index.html?a=1&b=2";
//
// let obj = url.parse(str, true);
//
// let {pathname, query} = obj;
//
// console.log(pathname, query);