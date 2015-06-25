var React = require("react");
var Store = require("../stores/stores");


var LunarPanel = React.createClass({

    render: function(){
        var chosenDay = this.props.chosenDay;

        var festivalElements = [];

        if(chosenDay["term"]){
            festivalElements.push(
                <span className="festival-detail term">{chosenDay["term"]}</span>
            );
        }

        if(chosenDay["lunarFestival"]){
            festivalElements.push(
              <span className="festival-detail lunar">{chosenDay["lunarFestival"]}</span>
            );
        }


        if(chosenDay["solarFestival"]){
            var festivals = chosenDay["solarFestival"].replace("国际", "").split(" ");
            for(var i = 0; i < festivals.length; i++){
                festivalElements.push(
                  <span className="festival-detail">{festivals[i]}</span>
                );
            }
        }

        var hl_y = Store.getHL(chosenDay) ? Store.getHL(chosenDay)["y"] : "";
        var hl_j = Store.getHL(chosenDay) ? Store.getHL(chosenDay)["j"] : "";

        return (
            <div className="lunar-panel">
                <div className="ganzhi">
                    <span className="ganzhi-detail">{chosenDay["GanZhiYear"]}年</span>
                    <span className="ganzhi-detail">{chosenDay["GanZhiMonth"]}月</span>
                    <span className="ganzhi-detail">{chosenDay["GanZhiDay"]}日</span>
                </div>
                <div className="daynumber">
                    <div className="solar-panel">
                        <span className="solar-detail">{chosenDay["year"]}</span>
                        <span className="solar-detail">{chosenDay["month"]}月</span>
                    </div>
                    <div className="festival-panel">
                        {festivalElements}
                    </div>
                    <h1 className="center-align">{chosenDay["day"]}</h1>
                    <p className="lunar-detail">
                        <span>{chosenDay["lunarMonthName"]}</span>
                        <span>{chosenDay["lunarDayName"]}</span>
                    </p>
                    <div className="hl-panel">
                        <p title={hl_y} className="hl-detail">宜: {hl_y}</p>
                        <p title={hl_j} className="hl-detail">忌: {hl_j}</p>
                    </div>
                </div>
            </div>
        )
    }
});


module.exports = LunarPanel;