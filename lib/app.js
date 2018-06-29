const makeReactComponentSkeleton = require('./makeReactComponentSkeleton');

const program = require('commander');

program
  .version('0.1.0')
  .option('-n, --name [name]', '컴포넌트 이름', 'ExampleComponent')
  .option('-t, --type [type]', '컴포넌트 타입 default: class', 'class')
  .option('-p, --path [path]', '컴포넌트가 만들어질 path', './')
  .parse(process.argv);
 
console.log('name', program.name);
console.log('path', program.path);
console.log('type', program.type);


makeReactComponentSkeleton({
  componentName: program.name,
  componentPath: program.path,
  componentType: program.type
})