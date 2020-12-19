const fs = require("fs");

fs.stat(__dirname, (err, stats) => {
   if (err) {
       console.log("出错了");
   } else {
       //birthtime 文件的创建时间
       // mtime: 文件的修改时间
       console.log(stats);

       if (stats.isFile()) {
           console.log("是文件");
       }else {
           console.log("是文件夹")
       }
   }
});

// console.log(fs.statSync(__filename));