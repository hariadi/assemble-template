/*
 * Generated on 2013-07-06
 * generator-assemble 0.3.1
 * https://github.com/hariadi/generator-assemble
 *
 * Copyright (c) 2013 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'src/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// 'src/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      // Global configuration
      options: {
        assets: 'dist/assets',
        data: 'src/data/*.{json,yml}',
        partials: [
          'src/templates/partials/{,*/}*.hbs',
          'src/content/*.hbs'
        ],
        helpers: 'helper/helpers.js'
      },

      site: {
        options: {
          flatten: true,
          layout: 'src/templates/layouts/default.hbs'
        },
        files: [
          {
            expand: true,
            cwd: 'src/templates/pages',
            src: ['*.hbs', '!index.hbs'],
            dest: 'dist/'
          },
          {
            expand: true,
            cwd: 'src/templates/pages',
            src: ['index.hbs'],
            dest: './' }
        ]
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['dist/**/*.{html,xml}']

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'assemble']);

};
