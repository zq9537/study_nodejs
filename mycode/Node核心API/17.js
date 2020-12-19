const http = require("http");
const qs = require("querystring");


http.createServer((req, res) => {
    //定义变量保存传递过来的参数
    let str = "";
    //POST请求需要分批获取
    req.on("data", chunk => {
        str += chunk
    });
    req.on("end", () => {
        // console.log(str)
        res.end(JSON.stringify(qs.parse(str)));
    });
    // res.end()
}).listen(8080);