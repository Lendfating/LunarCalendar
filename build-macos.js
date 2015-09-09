var packager = require('electron-packager');
var fs = require('fs');
var path = require('path');
var del = require('del').sync;
var cpr = require('cpr');

var dir = path.join(__dirname, 'dist');
del([dir]);
fs.mkdirSync(dir);

var fileNames = ['package.json', 'main.js', 'index.html', 'icon.icns', 'icon.ico', 'icon.png', 'bower/jquery/dist/jquery.min.js', 'bower/hammerjs/hammer.min.js', 'build/bundle.min.js', 'build/bundle.min.css', 'font/'];
fileNames.forEach(function (fileName) {
    var source = path.join(__dirname, fileName);
    var target;
    if (endsWith(fileName, '/')) {
        target = path.join(dir, fileName);
    } else {
        target = path.join(dir, path.dirname(fileName), '/');
    }
    // console.log('copy file from ' + source + ' to ' + target);
    cpr(source, target, {
        overwrite: true
    }, function (err, files) {
        if (err) {
            console.error(files);
            throw new Error(err);
        }
    });
});
console.log('done');

function endsWith(string, suffix) {
    return string.indexOf(suffix, string.length - suffix.length) !== -1;
};

packager({
    dir: dir,
    out: path.join(__dirname, 'dist'),
    name: 'LunarCalendar',
    arch: 'x64',
    version: '0.32.0',
    icon: 'icon.icns',
    platform: 'darwin',
    prune: true,
    ignore: '\.DS_Store'
}, function (err, appPath) {
    if (err) {
        throw new Error(err);
    }
    console.log('app is in ' + appPath);
})
