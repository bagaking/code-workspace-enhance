const { dirname, isAbsolute } = require("path");
const { exit } = require("process");

const WSHolder = require("./utils/wsholder");
const FolderSearcher = require("./utils/foldersearcher");

let ags = process.argv.slice(2);
if (ags.length < 0) {
  console.log("must give the workspace name.");
}
let workspaceName = ags[0];
console.log(`load workspace file ${workspaceName}`);

const wsh = new WSHolder(workspaceName);
if (!wsh.enabled) {
  exit();
}

console.log(`scan folder of ${workspaceName}`);
const fsearcher = new FolderSearcher(
  dirname(isAbsolute(workspaceName) ? workspaceName : "./" + workspaceName)
);

function CreateNamePlugger(tag, filderName) {
  return {
    match: (dirname) =>
      !dirname.startsWith(".") && dirname.endsWith(filderName),
    fnFolderObject: (dirname) => ({
      name: tag + " " + dirname.replace(filderName, ""),
      path: dirname,
    }),
  };
}

PluggerDraft = CreateNamePlugger("[Draft]", "/draft");
PluggerProposal = CreateNamePlugger("[Propsal]", "/proposal");
Pluggers = { PluggerDraft, PluggerProposal };

console.log(
  "start generate main procedure, dirs= " +
    fsearcher.dirs.filter((s) => !s.startsWith("."))
);

wsh.RemoveUnstableFolder();
for (const pName in Pluggers) {
  console.log("start generate plugger " + pName);
  const p = Pluggers[pName];
  wsh.PlugThingsForDir(fsearcher.dirs, p.match, p.fnFolderObject); // dirs, match, fnFolderObject
}
wsh.Save();
