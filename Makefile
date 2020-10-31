# ===============
# don't edit this
# ===============

LIBPATH=./.code-workspace-ex
FIRST_COMMIT=f61f370

.PHONY: code-workspace-ex-update workspace-folders

code-workspace-ex-update: 
	cd $(LIBPATH) && git reset --hard $(FIRST_COMMIT) && git pull origin
	/bin/bash -c $(LIBPATH)/install.sh
 
workspace-folders:
	node $(LIBPATH)/make-workspace.js
