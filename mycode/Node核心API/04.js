let path = require("path");

//basename用于获取路径的最后一个组成部分
// let res = path.basename('/a/b/index.html');
// let res = path.basename('/a/b/index.html', ".html");
// console.log(res);


// dirname用于获取路径中的目录，除最后一个部分以外的内容
// let res = path.dirname('/a/b/index.html');
// console.log(res);

// extname 用于获取路径中最后一个组成部分的扩展名
// let res = path.extname('/a/b/index.html');
// console.log(res);

/*
isAbsolute 判断路径是否是绝对路径
注意点：
区分操作系统
linux       /开头是绝对路径    路径分隔符是左斜杠 /
windows     盘符开头是绝对路径   路径分隔符是右斜杠 \


 */
// let res = path.isAbsolute('/a/b/index.html');
// let res = path.isAbsolute('c:\\a\\b\\index.html');
// let res = path.isAbsolute('a\\b\\index.html');
// console.log(res);

// path.sep 用于获取当前操作系统中路径的分隔符
// Linux  /
// Windows  \
// console.log(path.sep);

// path.delimiter获取当前操作系统环境变量的分隔符
// Linux   :
// Window   ;
// console.log(path.delimiter);

/*
path.parse(path): 将路径转换为对象



{
  root: '/',
  dir: '/a/b',
  base: 'index.html',
  ext: '.html',
  name: 'index'
}

path.format(pathObject)：将对象转换为路径
 */
// console.log(path.parse("/a/b/c/index.js"));
// console.log(path.format({
//     root: '/',
//     dir: '/a/b',
//     base: 'index.html',
//     ext: '.html',
//     name: 'index'
// }));


// let obj = path.parse("/a/b/index.html");
// console.log(obj);

// let obj = {
//     root: '/',
//     dir: '/a/b',
//     base: 'index.html',
//     ext: '.html',
//     name: 'index'
// };
//
// let str = path.format(obj);
// console.log(str);

/*
path.join([...paths])  用于拼接路径

如果参数有..  上一级目录
 */

// let str = path.join("/a/b", "c");
// let str = path.join("/a/b", "/c");
// let str = path.join("/a/b", "/c", "../");  //  \a\b
// let str = path.join("/a/b", "/c", "../../");  //  \a\
// console.log(str);


/*
path.normalize(path)    规范化路径
 */

// let res = path.normalize("/a//b///index.html")
// console.log(res);

/*
path.relative(from, to)  计算相对路径
/data/orandea/test/aaa
/data/orandea/impl/bbb'

..\..\impl\bbb
 */
// let res = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// console.log(res);

/*
path.resolve([...paths])
用于解析路径

如果后面的参数是绝对路径，那么前面的参数忽略
 */
let res = path.resolve("foo/bar", "/baz");
console.log(res);