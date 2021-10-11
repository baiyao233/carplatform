#!/bin/sh
basepath=$(cd `dirname $0`; pwd)
npm set registry http://npm.wingconn.cn/repository/npm-public/
cd $basepath && npm install && npm run build
