#!/bin/bash

# print outputs and exit on first failure
set -xe

rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/docs-dist/ $REMOTE_USER@$LIVE_REMOTE_HOST:$LIVE_REMOTE_DIST_DIR