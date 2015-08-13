/**
 * Dependencies and path declarations
 */
var gulp = require('gulp'),
    Server = require('karma').Server;


gulp.task('test', function (done) {
    return new Server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
});