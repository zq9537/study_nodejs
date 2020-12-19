const fs = require("fs");
const path = require("path");

fs.writeFile(path.join(__dirname, "1.txt"), Buffer.from("fafgasg"), (err) => {
    if (err) {
        console.log("出错了");
    } else {
        console.log("成功写入文件");
    }
});