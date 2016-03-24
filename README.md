## left-pad.io-client

Left padding has never been so easy

Makes using the magnificient [left-pad.io](http://left-pad.io) API super easy

## Install

```bash
$ npm install left-pad.io-client
```

## Usage

```js
leftpad = require('left-pad.io-client')

leftpad('foo', 5)
// => "  foo"

leftpad('foobar', 6)
// => "foobar"

leftpad(1, 2, 0)
// => "01"
```

## Note
Please don't use this in Production
This WILL use bandwidth, yours and theirs... :)