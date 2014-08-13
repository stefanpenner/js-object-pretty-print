"use strict";

module.exports.pretty = function (jsObject, indentLength, outputTo) {
    var indentString,
        newLine,
        newLineJoin,
        TOSTRING,
        TYPES,
        valueType,
        repeatString,
        prettyObject,
        prettyObjectJSON,
        prettyObjectPrint,
        prettyArray,
        pretty;

    TOSTRING = Object.prototype.toString;

    TYPES = {
        'undefined'        : 'undefined',
        'number'           : 'number',
        'boolean'          : 'boolean',
        'string'           : 'string',
        '[object Function]': 'function',
        '[object RegExp]'  : 'regexp',
        '[object Array]'   : 'array',
        '[object Date]'    : 'date',
        '[object Error]'   : 'error'
    };

    valueType = function (o) {
        var type = TYPES[typeof o] || TYPES[TOSTRING.call(o)] || (o ? 'object' : 'null');
        return type;
    };

    repeatString = function (src, length) {
        var dst = '',
            index;
        for (index = 0; index < length; index += 1) {
            dst += src;
        }

        return dst;
    };

    prettyObjectJSON = function (object, indent) {
        var value = [],
            property;

        indent += indentString;
        for (property in object) {
            if (object.hasOwnProperty(property)) {
                value.push(indent + '"' + property + '": ' + pretty(object[property], indent));
            }
        }

        return value.join(newLineJoin) + newLine;
    };

    prettyObjectPrint = function (object, indent) {
        var value = [],
            property;

        indent += indentString;
        for (property in object) {
            if (object.hasOwnProperty(property)) {
                value.push(indent + property + ': ' + pretty(object[property], indent));
            }
        }

        return value.join(newLineJoin) + newLine;
    };

    prettyArray = function (array, indent) {
        var index,
            length = array.length,
            value = [];

        indent += indentString;
        for (index = 0; index < length; index += 1) {
            value.push(pretty(array[index], indent, indent));
        }

        return value.join(newLineJoin) + newLine;
    };

    pretty = function (element, indent, fromArray) {
        var type = valueType(element);

        fromArray = fromArray || '';

        switch (type) {
        case 'array':
            return fromArray + '[' + newLine + prettyArray(element, indent) + indent + ']';

        case 'boolean':
            return fromArray + (element ? 'true' : 'false');

        case 'date':
            return fromArray + '"' + element.toString() + '"';

        case 'number':
            return fromArray + element;

        case 'object':
            return fromArray + '{' + newLine + prettyObject(element, indent) + indent + '}';

        case 'string':
            return fromArray + '"' + element + '"';

        default:
            return fromArray + type;
        }
    };

    if (jsObject) {
        if (indentLength === undefined) {
            indentLength = 4;
        }

        outputTo = (outputTo || 'print').toLowerCase();
        indentString = repeatString(outputTo === 'html' ? '&nbsp;' : ' ', indentLength);
        prettyObject = outputTo === 'json' ? prettyObjectJSON : prettyObjectPrint;
        newLine = outputTo === 'html' ? '<br/>' : '\n';
        newLineJoin = ',' + newLine;
        return pretty(jsObject, '') + newLine;
    }

    return 'Error: no Javascript object provided';
};
