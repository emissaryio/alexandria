#!/usr/bin/env bash

yarn build &&
cd dist/ &&
npm publish  --access=public &&
rm -rf dist/