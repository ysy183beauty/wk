'use strict';
define("dojo/_base/declare dojo/_base/lang dojo/_base/html ./../../echartsCommon ./../../BaseWidget dojo/text!./Widget.html".split(" "),
function(a, f, g, b, c, d) {
    var e = {
        title: b.getTitle("\u56fa\u5b9a\u8d44\u4ea7\u6295\u8d44"),
        calculable: !0,
        calculableColor: "rgba(255,165,0,0.2)",
        tooltip: {
            position: "top",
            backgroundColor: "rgba(50,50,50,0.7)",
            showDelay: 0,
            formatter: "{b}: {c}\u4ebf\u5143"
        },
        series: [{
            type: "pie",
            radius: ["50%", "64%"],
            center: ["50%", "54%"],
            itemStyle: {
                normal: {
                    label: {
                        show: !1,
                        textStyle: {
                            color: "#00a5ff"
                        }
                    },
                    labelLine: {
                        show: !1,
                        length: 6,
                        length2: 6,
                        lineStyle: {
                            color: "#fff",
                            width: 3
                        }
                    }
                }
            },
            startAngle: 160,
            minAngle: 30,
            data: [{
                value: 0,
                name: "\u7b2c\u4e00\u4ea7\u4e1a"
            },
            {
                value: 243.7263,
                name: "\u7b2c\u4e8c\u4ea7\u4e1a"
            },
            {
                value: 301.1802,
                name: "\u7b2c\u4e09\u4ea7\u4e1a"
            }]
        }],
        color: ["#FFDE1A", "#F5832A", "#8BCC6E"]
    };
    return a([c], {
        baseClass: "widget1",
        templateString: d,
        postCreate: function() {},
        startup: function() {
            this.chart = echarts2.init(this.chartNode);
            this.chart.setOption(e)
        }
    })
});