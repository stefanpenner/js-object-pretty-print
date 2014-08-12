module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        'jslint': {
            'all': {
                'src': [
                    '*.js',
                    '*.json',
                    'test/*.js'
                ],
                'directives': {
                    'node': true,
                    'indent': 4,
                    'maxlen': 300,
                    'predef': [
                    ]
                }
            }
        },
        'mochaTest': {
            'test': {
                'options': {
                    'reporter': 'spec'
                },
                'src': ['test/**/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('default', [
        'jslint',
        'mochaTest'
    ]);
};
