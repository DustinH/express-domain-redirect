# express-domain-redirect

  Makes express.js multi-domain websites redirected to main domain

## Installation

```
$ npm install debug
```

## Usage

 With `debug` you simply invoke the exported function to generate your debug function, passing it a name which will determine if a noop function is returned, or a decorated `console.error`, so all of the `console` format string goodies you're used to work fine. A unique color is selected per-function for visibility.
 
Example _app.js_:

```js
app.use(require('express-domain-redirect')('www.yourdomain.com'));
```

## License 

(The MIT License)

Copyright (c) 2014 Berk Demirkır

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.