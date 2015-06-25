/**
 * Created by sinceow on 15/6/22.
 */

var React = require("react");
var MainPanel = require("./components/main-panel");
var injectTapEventPlugin = require("react-tap-event-plugin");

injectTapEventPlugin();

React.render(<MainPanel></MainPanel>, document.body);