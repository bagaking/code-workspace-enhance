# README

Code Workspace Extern project

## Requirement

- Node.js > 8.0
- make
- bash
- git (for update)

## Installation

in the folder you want to install the tool

### by git (SSL)

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/bagaking/code-workspace-ex/master/install-remote.sh)"
```

### by git (SSH)

```sh
git clone git@github.com:bagaking/code-workspace-ex.git .code-workspace-ex && /bin/bash -c ./.code-workspace-ex/install.sh
```

## Update

To update the code-worksapce-ex, you can easilly remove(or backup if there are some custom changes) the old `.code-workspace-ex` folder, and install it by your prefer command again.

e.g.

```sh
rm -rf .code-workspace-ex && git clone git@github.com:bagaking/code-workspace-ex.git .code-workspace-ex && /bin/bash -c ./.code-workspace-ex/install.sh
```

If git are used in the installation stage, you can also using the command `code-workspace-ex-update` in the makefile

```sh
make code-workspace-ex-update
```

## Table of contents

### Make workspace folders

`make workspace-folders`

will remove all folders in your `.code-workspace` file, and append some new folders with rules listed below:

1. for all dir named `.../xxx/draft`, a folder `{ "name": "[Draft] xxx", "path": ".../xxx/draft", }` will be create
2. for all dir named `.../xxx/proposal`, a folder `{ "name": "[Proposal] xxx", "path": ".../xxx/proposal", }` will be create

some tips :

- hiding path which starts with '.' symbol will be ignored
- if you have custom folder in the code-workspace file, mark them with `"stable": true` to avoid being remove.  
  e.g.

  ```json
  {
    "name": "custom folder",
    "path": "path/of/custom/folder",
    "stable": true
  }
  ```

## Contribution

pull request is welcome

## Contact

e-mail: kinghand@foxmail.com

## Lisence

Released under the MIT License
