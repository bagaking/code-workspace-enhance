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

## Contribution

pull request is welcome

## Contact

e-mail: kinghand@foxmail.com

## Lisence

Released under the MIT License
