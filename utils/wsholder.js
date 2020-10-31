const fs = require("fs");
const path = require("path");
const JSON5 = require("../lib/json5");
const { isDeepStrictEqual } = require("util");

module.exports = class WorkSpaceHandler {
  constructor(path) {
    this.data = {};
    this.enabled = false;
    this.workSpaceName = path;
    if (this.Read()) {
      this.enabled = true;
    }
  }

  Read() {
    try {
      let fileContent = fs.readFileSync(this.workSpaceName);
      this.data = JSON5.parse(fileContent.toString());
      console.log(`load workspace form ${this.workSpaceName} success`);
    } catch (e) {
      console.log(
        `load workspace from ${this.workSpaceName} failed, err= ${e}`
      );
      return false;
    }
    return true;
  }

  // overwrite code-worksapace file
  Save() {
    console.log(`start saving work-space`);
    fs.writeFileSync(this.workSpaceName, JSON.stringify(this.data, null, 2));
  }

  // PlugThingsForDir, find match in given dirs and insert folder blobs of matched dir in to the workspace's folder filed
  // @param dirs should be a arr of dirPath(string)
  // @param match is a funtion to validate a path. input is a dirname, and output is a bool value
  // @param fnFolderObject is a function thar receive a dirname and output a Folder Object,
  //   A Folder Object should contains`name` and`path`, which will be insert to the folders entry of the work space
  PlugThingsForDir(dirs, match, fnFolderObject) {
    dirs.forEach((dirname, i) => {
      if (match(dirname)) {
        let ind = this.data.folders.findIndex((v) => v.path == dirname);
        let blob = fnFolderObject(dirname);
        if (ind < 0) {
          this.data.folders.push(blob);
          console.log(` - Append bolb for dir ${dirname}`);
          return;
        }
        let orgBlob = this.data.folders[ind];
        if (!isDeepStrictEqual(orgBlob, blob)) {
          console.log(
            ` - Update bolb for dir ${dirname}, ${JSON.stringify(
              orgBlob
            )} => ${JSON.stringify(blob)}`
          );
          this.data.folders[ind] = blob;
        }
      }
    });
  }
};
