#!/usr/bin/env node
 
/**
 * Module dependencies.
 */
 
var program = require('commander');
 
program
  .version('0.1.0')
  .option('-t, --type [type]', '컴포넌트 타입 default: class', 'class')
  .option('-p, --path [path]', '컴포넌트가 만들어질 path', './')
  .parse(process.argv);
 
console.log('path', program.path);
console.log('type', program.type);