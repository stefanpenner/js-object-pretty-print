js-object-pretty-print
======================

Serializes a javascript object to a printable string. String is formatted to be used in either pure text environments, like a console log or in HTML. **js-object-pretty-print** is not a JSON serializer

## Installation

npm install js-object-pretty-print

## Usage

```
var pretty = require('js-object-pretty-print').pretty,
    foo = {
        "aString": "ipsum lorem",
        "aNumber": 3
        "anArray": ["shoes", "socks", "shirts"],
        "anObject": {
            "aValue": 44,
            "isValid": true
        }
    };

process.stdout.write(pretty(foo));
```

## Options

Function pretty accepts three arguments:

    pretty(*object*, *indentSize*, *outputTo*);

### object
Is the javascript object to serialize

### indentSize
Number of spaces in a one level indent. Default 4

### outputTo
Whether to serialize for text or for HTML. Default is 'text'

## Release History
* 0.1.0 Initial Release

