#! /bin/bash

FILEDIR=$(dirname $0)
TARGETDIR=$(pwd)

echo "==== start install the code-workspace-ex at ${TARGETDIR} ==="

echo "- detected source dir is $FILEDIR"
echo "- version= $(cat $FILEDIR/VERSION)"


echo ""
echo "installing ..."

cp $FILEDIR/Makefile $TARGETDIR

echo "Done."
echo ""

