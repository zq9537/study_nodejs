const fs = require("fs");
const path = require("path");

/*
// 创建文件流
let rs = fs.createReadStream(path.join(__dirname, "1.txt"), {
    encoding: "utf8",
    highWaterMark: 1
});

// 添加事件监听
rs.on("open", () => {
    console.log("表示数据流和文件建立关系成功");
});

rs.on("error", () => {
    console.log("表示数据流和文件建立关系失败");
});

rs.on("data", (data) => {
    console.log("表示通过读取流从文件流读取到了数据", data);
});

rs.on("close", () => {
    console.log("表示数据流断开了和文件的关系，并且数据已经读取完毕");
});
*/

/*
// 创建一个写入流
let cw = fs.createWriteStream(path.join(__dirname, "1.txt"), {
    encoding: "utf8"
});

//监听写入流的事件
// 添加事件监听
cw.on("open", () => {
    console.log("表示数据流和文件建立关系成功");
});

cw.on("error", () => {
    console.log("表示数据流和文件建立关系失败");
});

cw.on("close", () => {
    console.log("表示数据流断开了和文件的关系");
});

let data = "www.baidu.com";
let index = 0;

let timerId = setInterval(() => {
    let ch = data[index++];
    cw.write(ch);
    console.log("本次写入", ch);
    if(index === data.length) {
        clearInterval(timerId);
        cw.end();
    }
}, 1000);
*/


