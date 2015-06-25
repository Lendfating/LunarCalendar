var menubar = require("menubar");
var ipc = require("ipc");
var path = require("path");

var mb = menubar({
    dir: __dirname,
    width: 800,
    height: 418,
    icon: __dirname + "/icon.png"

});

mb.on("ready", function ready() {
    console.log('app is ready');
    ipc.on("QUIT_APP", function(event, args){
        mb.app.quit();
    });
});


