const fs = require("fs");
const path = require("path");

class CreateProject {
    constructor (rootPath, projectName) {
        this.rootPath = rootPath;
        this.projectName = projectName;
        this.subFiles = ["img", "css", "js", "index.html"];
    }

    initProject () {
        fs.mkdirSync(path.join(this.rootPath, this.projectName));
        this.subFiles.forEach(str => {
            path.extname(str) ?
                fs.writeFileSync(path.join(this.rootPath, this.projectName, str), "") :
                fs.mkdirSync(path.join(this.rootPath, this.projectName, str));
        })
    }
}

let cp = new CreateProject(__dirname, "demo");
cp.initProject();