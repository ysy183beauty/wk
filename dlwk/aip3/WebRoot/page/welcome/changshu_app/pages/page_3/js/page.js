window.onload = function() {
    $(".header_date").text(commonClass._getDate());
    $.get("js/chartConfig.js",
    function() {
        var b = echarts.init($("#jmsr")[0]);
        b.setOption(options.jmsr);
        $("#jmsr").width("100%");
        var c = echarts.init($("#jyrs")[0]);
        c.setOption(options.jyrs);
        $("#jyrs").width("100%");
        var a = echarts.init($("#nljzt")[0]);
        a.setOption(options.nljzt);
        $("#nljzt").width("100%");
        var f = echarts.init($("#pjsynl")[0]);
        f.setOption(options.pjsynl);
        $("#pjsynl").width("100%");
        var d;
        $.get("xuzhou.json",
        function(a) {
            echarts.registerMap("xuzhou", a);
            d = new echarts.init($("#rkmdMap")[0]);
            options.rkmdMap.tooltip.formatter = function(a) {
                var b;
                b = "" + (a.name + "\x3cbr/\x3e");
                b += "\u4eba\u53e3\u603b\u6570\uff1a" + a.data.pNum + "\u4e07\u4eba\x3cbr/\x3e";
                return b += "\u4eba\u53e3\u5bc6\u5ea6\uff1a" + a.data.value + "\u4eba/\u5e73\u65b9\u516c\u91cc"
            };
            d.setOption(options.rkmdMap)
        });
        var g = echarts.init($("#sbjn")[0]);
        g.setOption(options.ybp);
        numAnimate("num1", 1164834);
        var h = echarts.init($("#gjjjn")[0]);
        options.ybp.series[0].name = "\u516c\u79ef\u91d1\u7f34\u7eb3\u6bd4\u4f8b";
        options.ybp.series[0].axisLine.lineStyle.color[0] = [.071, "#D73333"];
        options.ybp.series[0].data = [{
            value: 7.1,
            name: "7.10%"
        }];
        h.setOption(options.ybp);
        numAnimate("num2", 729989);
        var e = echarts.init($("#lnfyb1")[0]);
        options.ybp.series[0].name = "\u8001\u5e74\u629a\u517b\u6bd4";
        options.ybp.series[0].axisLine.lineStyle.color[0] = [.156, "#30C6D4"];
        options.ybp.series[0].data = [{
            value: 15.6,
            name: "\u5f90\u5dde\u5e0215.60%"
        }];
        e.setOption(options.ybp);
        var k = echarts.init($("#lnfyb")[0]);
        options.ybp.series[0].name = "\u8001\u5e74\u629a\u517b\u6bd4";
        options.ybp.series[0].axisLine.lineStyle.color[0] = [.137, "#30C6D4"];
        options.ybp.series[0].data = [{
            value: 13.7,
            name: "\u5168\u56fd13.70%"
        }];
        k.setOption(options.ybp);
        e = echarts.init($("#shfyb1")[0]);
        options.ybp.series[0].name = "\u793e\u4f1a\u629a\u517b\u6bd4";
        options.ybp.series[0].axisLine.lineStyle.color[0] = [.452, "#4EC511"];
        options.ybp.series[0].data = [{
            value: 45.2,
            name: "\u5f90\u5dde\u5e0245.20%"
        }];
        e.setOption(options.ybp);
        var l = echarts.init($("#shfyb")[0]);
        options.ybp.series[0].name = "\u793e\u4f1a\u629a\u517b\u6bd4";
        options.ybp.series[0].axisLine.lineStyle.color[0] = [.3621, "#4EC511"];
        options.ybp.series[0].data = [{
            value: 36.2,
            name: "\u5168\u56fd36.20%"
        }];
        l.setOption(options.ybp);
        var m = echarts.init($("#rkzzl")[0]);
        m.setOption(options.rkzzl);
        $("#rkzzl").width("100%");
        window.onresize = function() {
            b.resize();
            c.resize();
            a.resize();
            f.resize();
            d.resize();
            g.resize();
            h.resize();
            k.resize();
            l.resize();
            m.resize()
        }
    })
};
function numAnimate(b, c) {
    try {
        $("." + b).animateNumber({
            number: Number(c)
        },
        2E3)
    } catch(a) {
        console.log(a)
    }
}
function numAnimate_float(b, c) {
    try {
        $("." + b).animateNumber({
            number: parseFloat(c),
            easing: "easeInQuad",
            numberStep: function(a, b) {
                b = $(b.elem);
                a = a.toFixed(2);
                b.text(a)
            }
        },
        2E3)
    } catch(a) {
        console.log(a)
    }
};