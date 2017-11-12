#!/bin/sh

systemctl stop saelora.com

rm -r node_modules

npm install


systemctl start saelora.com
