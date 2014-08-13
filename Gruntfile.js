module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        'jslint': {
            'all': {
                'src': [
                    'index.js',
                    'Gruntfile.js',
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
        },
        'uglify': {
            'options': {
                // the banner is inserted at the top of the output
                'banner': '/*! js-object-pretty-print.js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            'dist': {
                'files': {
                    'index-min.js': ['index.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [
        'jslint',
        'uglify',
        'mochaTest'
    ]);
};
