// let res = Buffer.isEncoding("utf8");
// console.log(res);

// let obj = {};
// let obj = Buffer.alloc(5);
// let res = Buffer.isBuffer(obj);
// console.log(res);

// let buf = Buffer.from("FFF");
// let res = Buffer.byteLength(buf);
// console.log(res);
// console.log(buf.length);

let buf1 = Buffer.from("abc");
let buf2 = Buffer.from("123");
let buf3 = Buffer.concat([buf1, buf2]);
console.log(buf3);