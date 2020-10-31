# ===============
# don't edit this
# ===============

LIBPATH=./.code-workspace-ex

code-workspace-ex-update: 
	cd $(LIBPATH) && git pull origin
 
workspace-folders:
	node ./scripts/make-workspace.js
