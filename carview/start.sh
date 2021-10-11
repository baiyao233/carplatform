#!/bin/sh
basepath=$(cd `dirname $0`; pwd)
cd $basepath  &&  pm2 start npm --name demo -- run start

