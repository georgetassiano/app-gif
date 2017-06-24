#!/bin/bash
npm install
npm install -g http-server
npm run build
cd dist/
http-server &
