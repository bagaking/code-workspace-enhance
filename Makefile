# ===============
# don't edit this
# ===============

LIBPATH=./.code-workspace-ex
FIRST_COMMIT=e3ac324

.PHONY: code-workspace-ex-update workspace-folders

# if repo version returns to the stable commit, the next update operation are based on the first commit
code-workspace-ex-update: 
	cd $(LIBPATH) && git reset --hard $(FIRST_COMMIT) && git pull origin
	/bin/bash -c $(LIBPATH)/install.sh
 
workspace-folders:
	node $(LIBPATH)/make-workspace.js $(shell ls -p | grep .code-workspace | grep -v / -m 1)
