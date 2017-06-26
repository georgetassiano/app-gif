#!/bin/bash
npm install -g http-server
npm install
npm run build
cd dist/
http-server &
