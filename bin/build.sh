#!/bin/sh

echo $PATH

systemctl stop saelora.com

rm -r node_modules

npm install

systemctl start saelora.com
