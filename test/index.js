/*global describe, it*/
"use strict";

var assert = require('chai').assert,
    pretty = require('../index').pretty,
    value,
    serialized;

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

serialized = pretty(value, 4, 'text');

describe('Object serialized', function () {
    it('Serialized object:\n' + serialized, function () {
        assert.isNotNull(serialized, 'This should never be null');
        assert.equal(typeof serialized, 'string');
        assert.notEqual(serialized, 'Error: no Javascript object provided');
    });

    it('Testing indentation', function () {
        assert.notEqual(serialized.indexOf('    name: \'Damaso Infanzon Manzo\''), 0);
        assert.notEqual(serialized.indexOf('    address:'), 0);
        assert.notEqual(serialized.indexOf('        street:'), 0);
        assert.notEqual(serialized.indexOf('        city:'), 0);
        assert.notEqual(serialized.indexOf('        state:'), 0);
        assert.notEqual(serialized.indexOf('        zip:'), 0);
        assert.notEqual(serialized.indexOf('        true,'), 0);
        assert.notEqual(serialized.indexOf('        false'), 0);
    });

    it('Dates created', function () {
        assert.notEqual(serialized.indexOf('Tue May 25 1954 00:00:00'), 0);
    });
});
