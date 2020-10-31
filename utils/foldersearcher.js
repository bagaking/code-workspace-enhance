const fs = require("fs");
const path = require("path")

module.exports = class FolderSearcher {
  constructor(path) {
    this.rootPath = path;
    this.files = [];
    this.dirs = [];
    this.Read();
  }

  Read() {
    let files = [],
      dirs = [];
    let recFile = function (path, dir, name, stat) {
      files.push({
        path,
        dir,
        name,
        stat,
      });
    };
    let recDir = function (path) {
      dirs.push(path);
    };
    let traveler = function (dirCur) {
      let fsInDir = fs.readdirSync(dirCur);
      if (fsInDir.length <= 0) {
        return false;
      }

      fsInDir.forEach((file) => {
        let pathname = path.join(dirCur, file);
        let stat = fs.statSync(pathname);
        if (stat.isDirectory()) {
          if (traveler(pathname)) { // empty folder will be ignored
            recDir(pathname);
          }
          return;
        }
        recFile(pathname, dirCur, file, stat);
      });
      return true;
    };
    traveler(this.rootPath);
    this.files = files;
    this.dirs = dirs;
  }
};
