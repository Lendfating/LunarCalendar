var menubar = require("menubar");
var ipc = require("ipc");
var path = require("path");
var process = require("process");

var isDebug = process.argv.some(function (arg){
    return arg === '--with-dev-tools'
});
if(isDebug){
    require('electron-debug')();
}

var mb = menubar({
    dir: __dirname,
    width: 800,
    height: 440,
    icon: __dirname + "/icon.png"

});

mb.on("ready", function ready() {
    console.log('app is ready');
    ipc.on("QUIT_APP", function (event, args) {
        mb.app.quit();
    });

    mb.on("show", function () {
        var window = mb.window;
        window.webContents.send("REFRESH_APP");
    });
});
