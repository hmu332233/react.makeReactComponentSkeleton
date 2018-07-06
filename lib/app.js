const makeReactComponentSkeleton = require('./makeReactComponentSkeleton');

const program = require('commander');

program
  .version('0.1.0')
  .option('-n, --name [name]', 'component name to be created.', 'ExampleComponent')
  .option('-t, --type [type]', 'component type to be created. "class" or "function"', 'class')
  .option('-p, --path [path]', 'path where component will be created.', './')
  .on('--help', () => {
    console.log('');
    console.log('  Examples:');
    console.log('');
    console.log('    $ mkcmpnt -n Input');
    console.log('    $ mkcmpnt -n Input -t function -p ./src');
    console.log('');
  })
  .parse(process.argv);

console.log('make react component skeleton..');
console.log(' - name', program.name);
console.log(' - path', program.path);
console.log(' - type', program.type === 'class' ? 'class' : 'function');

makeReactComponentSkeleton({
  componentName: program.name,
  componentPath: program.path,
  componentType: program.type
})