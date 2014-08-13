js-object-pretty-print
======================

Serializes a javascript object to a printable string. String is formatted to be used in a pure text environments, like a console log, as an HTML output,  or to create a JSON string.

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

It is also possible to use a minified version of the code

```
...
var prettyMin = require('js0object-pretty-print/index-min.js').pretty;
...
```

Either the full or the minified versions render the same. Both are unit tested with Mocha and Chai

## Options

Function pretty accepts three arguments:

    pretty(object, indentSize, outputTo);

### object
Is the javascript object to serialize

### indentSize
Number of spaces in a one level indent. Default 4

### outputTo
String to determine the formatting of the output. One of "PRINT", "HTML" or "JSON". This argument is case insensitive
Expected behavior
* **PRINT** Indentation is done with the space character, line breaks are done with the newLine character "\n" and the attribute names are not surrounded with quotes. Pretty similar to what you see in the -webkit debugger
* **HTML** Indentation is done with non breakable spaces "&nbsp;", line breaks are done with "<br/>". Otherwise identical to print. Handy to dump into a div inside a page and get a decent formatting
* **JSON** Only difference with PRINT is that attribute names are surrounded with quotes

## Release History
* 0.1.0 Initial Release
* 0.1.1 Bug fixes
* 0.1.2 Add JSON output, create robust testing with Mocha, add minified version of the code

