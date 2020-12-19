const fs = require("fs");
const path = require("path");

let str = path.join(__dirname, "abc");

/*
fs.mkdir(str, (err) => {
    if (err) {
        throw new Error("创建目录失败");
    } else {
        console.log("创建目录成功");
    }
});
*/

// fs.rmdir(str, err => {
//
// });

fs.readdir(__dirname, (err, files) => {
    if (!err) {
        // console.log(files);
        files.forEach((file) => {
            console.log(file);
            fs.stat(path.join(__dirname, file), (err, stat) => {
                if (!err) {
                    console.log(stat.isFile() ? `${file}是文件` : `${file}是文件夹`);
                }
            })
        })
    }

})