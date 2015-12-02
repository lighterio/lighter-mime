# lighter-mime
[![Chat](https://badges.gitter.im/chat.svg)](//gitter.im/lighterio/public)
[![Version](https://img.shields.io/npm/v/lighter-mime.svg)](//www.npmjs.com/package/lighter-mime)
[![Downloads](https://img.shields.io/npm/dm/lighter-mime.svg)](//www.npmjs.com/package/lighter-mime)
[![Build](https://img.shields.io/travis/lighterio/lighter-mime.svg)](//travis-ci.org/lighterio/lighter-mime)
[![Coverage](https://img.shields.io/coveralls/lighterio/lighter-mime/master.svg)](//coveralls.io/r/lighterio/lighter-mime)
[![Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](//www.npmjs.com/package/standard)

The `lighter-mime` module combines speed and support by immediately loading a
basic set of MIME types, and lazily loading a full set.

## Installation
From your project directory, install and save as a dependency:
```bash
npm install --save lighter-mime
```

## API
The `lighter-mime` package exports an object whose keys are lowercase file
extensions and values are MIME types.

### mime
The basic mapping is pretty simple:
```js
var mime = require('lighter-mime')
console.log(mime)

//> { css: 'text/css',
//    gif: 'image/gif',
//    html: 'text/html',
//    ico: 'image/x-icon',
//    jpg: 'image/jpg',
//    js: 'application/javascript',
//    json: 'application/json',
//    png: 'image/png',
//    svg: 'image/svg+xml',
//    txt: 'text/plain',
//    xml: 'application/xml' }
```

### mime.set(extension, type)
Set or overwrite a MIME type mapping for a given extension.
```js
var mime = require('lighter-mime')
console.log(mime.js)
//> 'application/javascript'

// Let's consider JavaScript to be text.
mime.set('js', 'text/javascript')
console.log(mime.js)
//> 'text/javascript'
```

### mime.load()
Load the comprehensive list immediately (and return the mapping).
```js
var mime = require('lighter-mime').load()
console.log(mime.docx)
//> 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
```

### mime.timeout(milliseconds)
Delay loading the comprehensive list for a specified number of milliseconds,
rather than the default 1 millisecond.


## More on lighter-mime...
* [Contributing](//github.com/lighterio/lighter-mime/blob/master/CONTRIBUTING.md)
* [License (ISC)](//github.com/lighterio/lighter-mime/blob/master/LICENSE.md)
* [Change Log](//github.com/lighterio/lighter-mime/blob/master/CHANGELOG.md)
* [Roadmap](//github.com/lighterio/lighter-mime/blob/master/ROADMAP.md)
