const ComponentMaker = require('./makeReactComponentSkeleton');

const program = require('commander');

program
  .version('0.1.0')
  .option('-n, --name [name]', 'component name to be created.', 'ExampleComponent')
  .option('-t, --type [type]', 'component type to be created. "class" or "function"', 'class')
  .option('-p, --path [path]', 'path where component will be created.', './')
  .option('-j, --jstype [jstype]', 'component file extension to be created.', 'jsx')
  .option('-c, --csstype [csstype]', 'style file extension to be created.', 'scss')
  .option('-S, --single', 'if include this, only component is made')
  .on('--help', () => {
    console.log('');
    console.log('  Examples:');
    console.log('');
    console.log('    $ mkcpnt -n Input');
    console.log('    $ mkcpnt -n Input -t function -p ./src/components');
    console.log('');
  })
  .parse(process.argv);

console.log('make react component skeleton');
console.log(' - name', `${program.name}.${program.jstype}`);
console.log(' - path', program.path);
console.log(' - type', program.type === 'class' ? 'class' : 'function');


const makeFunc = program.single ? ComponentMaker.makeComponent : ComponentMaker.makeComponentPackage;
  
makeFunc({
  componentName: program.name,
  componentPath: program.path,
  componentType: program.type,
  componentJsExtension: program.jstype,
  componentCssExtension: program.csstype
})