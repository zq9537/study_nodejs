// let buf = Buffer.alloc(5);
//
// console.log(buf);
//自动将存储的内容转换为16进制输出

// let buf = Buffer.alloc(5, 17);
// console.log(buf);


// let buf = Buffer.from("abc");
// console.log(buf);       // <Buffer 61 62 63>
// console.dir(buf);

let buf = Buffer.from([1, 3, 5]);
// console.dir(buf);
buf[0] = 6;
console.dir(buf);