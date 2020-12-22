const http = require("http");
const qs = require("querystring");


http.createServer((req, res) => {
    //定义变量保存传递过来的参数
    let arr = [];
    //POST请求需要分批获取
    req.on("data", chunk => {
        arr.push(chunk);
    });
    req.on("end", () => {
        // console.log(str)
        res.end(Buffer.from(arr));
    });
    // res.end()
}).listen(8080);