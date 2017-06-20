/* globals $, AmCharts,  */
ac_app = function() {};

ac_app.prototype = {
    addChart: function() {
        var chart = AmCharts.makeChart("chartDiv", {
            "theme": "light",
            "type": "serial",
            dataProvider: [{
                    period: "January",
                    expected: 80000,
                    actual: 70000,
                    projected: null,
                },{
                    period: "February",
                    expected: 90000,
                    actual: 60000,
                    projected: null,
                },{
                    period: "March",
                    expected: 85000,
                    actual: 72000,
                    projected: null,
                },{
                    period: "April",
                    expected: 68000,
                    actual: 55000,
                    projected: null,
                },{
                    period: "May",
                    expected: 82000,
                    actual: 78000,
                    projected: null,
                },{
                    period: "June",
                    expected: 84000,
                    actual: 45000,
                    projected: 72000,
                },{
                    period: "July",
                    expected: 80000,
                    actual: null,
                    projected: 73000,
                },{
                    period: "August",
                    expected: 65000,
                    actual: null,
                    projected: 51000,
                },{
                    period: "September",
                    expected: 58000,
                    actual: null,
                    projected: 48000,
                },{
                    period: "October",
                    expected: 55000,
                    actual: null,
                    projected: 40000,
                },{
                    period: "November",
                    expected: 45000,
                    actual: null,
                    projected: 38000,

                },{
                    period: "December",
                    expected: 35000,
                    actual: null,
                    projected: 29000,

                }

            ],
            "valueAxes": [{
             /*   "stackType": "3d", */
                "unit": "$",
                "position": "left",
                unitPosition: "left",
                "title": "Actual vs. Expected Sales"
            }],
            "startDuration": 0,
            "graphs": [{
                "balloonText": "[[period]]: <b>[[actual]]</b>",
                "fillAlphas": 0.9,
                "lineAlpha": 0.2,
                "title": "Actual",
                "type": "column",
                "valueField": "actual"
            },

                {
                    "balloonText": "[[period]]: <b>[[expected]]</b>",
                    "fillAlphas": 0.9,
                    "lineAlpha": 0.2,
                    "title": "Expected",
                    "type": "column",
                    "valueField": "expected"
                },
                {
                    balloonText: "<span style='font-size:12px;'>[[period]]<br><span style='font-size:20px'>$[[projected]]</span></span>",
                    lineThickness: 3,
                    bullet: "round",
                    bulletThickness: 7,
                    bulletColor: "#FFFFFF",
                    bulletBorderAlpha: 1,
                    useLineColorForBulletBorder: true,
                    bulletBorderThickness: 3,
                    lineColor: '#FF8040',
                    lineAlpha: 1,
                    title : "Projected (Weighted)",    //TODO
                    type: "line",
                    valueField: "projected"
                }


            ],
            "plotAreaFillAlphas": 0.1,
            "depth3D": 20,
            "angle": 50, 
            "categoryField": "period",
            "categoryAxis": {
                "gridPosition": "start",
                labelRotation: 45,

            },
            legend: {
                useGraphSettings: true,
                enabled: true,
                position: "top"
            }
        });
    }

};

var app;
$(function() {
    app = new ac_app();
    app.addChart();
});