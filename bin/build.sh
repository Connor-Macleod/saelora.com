#!/bin/sh

systemctl stop saelora.com

git reset
git checkout .
git clean -fdx

npm install

systemctl start saelora.com
