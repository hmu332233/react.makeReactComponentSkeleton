## makeReactComponentSkeleton

makeReactComponentSkeleton is simple function that make react component skeleton

### install
```bash
$ npm install -g make-react-component-skeleton
```

### usage
```
 Usage: mkcpnt [options]

  Options:

    -n, --name [name]        component name to be created. (default: ExampleComponent)
    -t, --type [type]        component type to be created. "class" or "function" (default: class)
    -p, --path [path]        path where component will be created. (default: ./)
    -j, --jstype [jstype]    component file extension to be created. (default: jsx)
    -c, --csstype [csstype]  style file extension to be created. (default: scss)
    -v, --version            output the version number
    -S, --single             if include this, only component is made
    -h, --help               output usage information
```

### example

#### basic example

```bash
$ mkcpnt -n Input
```

- Structure of the created directory

```
Input
|-- Input.jsx
|-- Input.scss
|-- index.js
```

- jsx -- class type

```js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.scss';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
    );
  }
}

Input.propTypes = {
};
Input.defaultProps = {
};

export default Input;
```

- index

```js
import Input from './Input';

export default Input;
```


#### function example

```bash
$ mkcpnt -n Input -t function
```
Structure of the created directory is same

- jsx -- function type

```js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.scss';

const Input = props => {
  return (
  );
}

Input.propTypes = {
};
Input.defaultProps = {
};

export default Input;
```

#### file extension example

```bash
$ mkcpnt -n Input -j js -c css
```

- result

```
Input
|-- Input.js
|-- Input.css
|-- index.js
```