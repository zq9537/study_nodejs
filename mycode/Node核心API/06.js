const fs = require("fs");
const path = require("path");

// 1、拿到需要读取的文件路径
// 2、读取文件
// fs.readFile(path.join(__dirname, "data.txt"), (err, data) => {
//     if (err) {
//         console.log("有错");
//     } else {
//         console.log(data.toString());
//     }
// });

let data = fs.readFileSync(path.join(__dirname, "data.txt"), "utf8");
console.log(data);