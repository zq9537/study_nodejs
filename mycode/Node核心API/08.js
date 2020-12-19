const fs = require("fs");
const path = require("path");

fs.appendFile(path.join(__dirname, "1.txt"), "\n追加的数据", err => {

});