#!/bin/bash

# print outputs and exit on first failure
set -xe

ssh $REMOTE_USER@$STAGING_REMOTE_HOST cp -a $STAGING_REMOTE_TEMP_DIR/build/* $STAGING_REMOTE_DIST_DIR