/*global describe, it*/
"use strict";

var assert = require('chai').assert,
    pretty = require('../index').pretty,
    prettyMin = require('../index-min').pretty,
    value;

value = {
    'name': 'Damaso Infanzon Manzo',
    'address': { 'street': 'Callejon de las ranas 128', 'city': 'Falfurrias', 'state': 'Texas', 'zip': '88888-9999' },
    'favorites': { 'music': ['Mozart', 'Beethoven', 'The Beatles'],  'authors': ['John Grisham', 'Isaac Asimov', 'P.L. Travers'], 'books': [ 'Pelican Brief', 'I, Robot', 'Mary Poppins' ] },
    'dates': [ new Date(), new Date("05/25/1954") ],
    'numbers': [ 10, 883, 521 ],
    'boolean': [ true, false, false, false ],
    'isObject': true,
    'isDuck': false
};

describe('Object serialized for print', function () {
    var serialized = pretty(value, 4, 'print');
    it('Serialized object', function () {
        assert.isNotNull(serialized, 'This should never be null');
        assert.equal(typeof serialized, 'string');
        assert.notEqual(serialized, 'Error: no Javascript object provided');
    });

    it('Testing indentation', function () {
        assert.notEqual(serialized.indexOf('    name: "Damaso Infanzon Manzo"', 0), -1);
        assert.notEqual(serialized.indexOf('    address:'), -1);
        assert.notEqual(serialized.indexOf('        street:'), -1);
        assert.notEqual(serialized.indexOf('        city:'), -1);
        assert.notEqual(serialized.indexOf('        state:'), -1);
        assert.notEqual(serialized.indexOf('        zip:'), -1);
        assert.notEqual(serialized.indexOf('        true,'), -1);
        assert.notEqual(serialized.indexOf('        false'), -1);
    });

    it('Dates created', function () {
        assert.notEqual(serialized.indexOf('Tue May 25 1954 00:00:00'), -1);
    });
});

describe('Object serialized for JSON', function () {
    var serialized = pretty(value, 4, 'JSON');
    it('Serialized object', function () {
        assert.isNotNull(serialized, 'This should never be null');
        assert.equal(typeof serialized, 'string');
        assert.notEqual(serialized, 'Error: no Javascript object provided');
    });

    it('JSON Serialized object', function () {
        assert.notEqual(serialized.indexOf('    "name": "Damaso Infanzon Manzo"'), -1);
        assert.notEqual(serialized.indexOf('    "address":'), -1);
        assert.notEqual(serialized.indexOf('        "street":'), -1);
        assert.notEqual(serialized.indexOf('        "city":'), -1);
        assert.notEqual(serialized.indexOf('        "state":'), -1);
        assert.notEqual(serialized.indexOf('        "zip":'), -1);
    });
});

describe('Object serialized for HTML', function () {
    var serialized = pretty(value, 4, 'HTML');
    it('Serialized object', function () {
        assert.isNotNull(serialized, 'This should never be null');
        assert.equal(typeof serialized, 'string');
        assert.notEqual(serialized, 'Error: no Javascript object provided');
    });

    it('Indentation for HTML', function () {
        assert.notEqual(serialized.indexOf('&nbsp;&nbsp;&nbsp;&nbsp;name: "Damaso Infanzon Manzo"'), -1);
        assert.notEqual(serialized.indexOf('&nbsp;&nbsp;&nbsp;&nbsp;address:'), -1);
        assert.notEqual(serialized.indexOf('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;street:'), -1);
        assert.notEqual(serialized.indexOf('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;city:'), -1);
        assert.notEqual(serialized.indexOf('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state:'), -1);
        assert.notEqual(serialized.indexOf('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;zip:'), -1);
        assert.notEqual(serialized.indexOf('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;true,'), -1);
        assert.notEqual(serialized.indexOf('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;false'), -1);
    });

    it('Line breaks for HTML', function () {
        assert.notEqual(serialized.indexOf('<br/>'), -1);
    });
});

describe('Using minified version', function () {
    var serialized = prettyMin(value, 4, 'print');
    it('Serialized object', function () {
        assert.isNotNull(serialized, 'This should never be null');
        assert.equal(typeof serialized, 'string');
        assert.notEqual(serialized, 'Error: no Javascript object provided');
    });

    it('Testing indentation', function () {
        assert.notEqual(serialized.indexOf('    name: "Damaso Infanzon Manzo"', 0), -1);
        assert.notEqual(serialized.indexOf('    address:'), -1);
        assert.notEqual(serialized.indexOf('        street:'), -1);
        assert.notEqual(serialized.indexOf('        city:'), -1);
        assert.notEqual(serialized.indexOf('        state:'), -1);
        assert.notEqual(serialized.indexOf('        zip:'), -1);
        assert.notEqual(serialized.indexOf('        true,'), -1);
        assert.notEqual(serialized.indexOf('        false'), -1);
    });

    it('Dates created', function () {
        assert.notEqual(serialized.indexOf('Tue May 25 1954 00:00:00'), -1);
    });
});

