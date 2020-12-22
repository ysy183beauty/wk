'use strict';
define(
		[ "dojo/_base/declare", "dojo/_base/html", "./../../../echartsCommon",
				"./../../../BaseWidget", "dojo/text!./../../../Template.html" ],
		function(b, f, a, c, d) {
			var e = {
				title : a.getTitle("\u7528\u7535\u884c\u4e1aTOP5"),
				tooltip : {
					trigger : "item",
					formatter : function(a) {
						return a.value[2] + ": " + a.value[1]
								+ "\u4e07\u5343\u74e6\u65f6"
					}
				},
				series : [ {
					name : "\u7528\u7535\u884c\u4e1aTOP5",
					data : [
							{
								value : [ 100, 2543638, "\u5de5\u4e1a" ],
								name : "\u5de5\u4e1a"
							},
							{
								value : [ 80, 107663,
										"\u516c\u5171\u4e8b\u4e1a\u53ca\u7ba1\u7406\u7ec4\u7ec7" ],
								name : "\u516c\u5171\u4e8b\u4e1a"
							},
							{
								value : [ 60, 84703,
										"\u5546\u4e1a\u996e\u98df\u7269\u8d44\u4ed3\u50a8" ],
								name : "\u5546\u4e1a"
							},
							{
								value : [ 40, 66856,
										"\u4ea4\u901a\u8fd0\u8f93\u90ae\u7535\u4e1a" ],
								name : "\u8fd0\u8f93"
							},
							{
								value : [ 20, 65504,
										"\u91d1\u878d\u623f\u4ea7\u53ca\u5c45\u6c11\u670d\u52a1\u4e1a" ],
								name : "\u91d1\u878d"
							} ]
				} ]
			};
			return b([ c ], {
				baseClass : "widget7",
				templateString : d,
				postCreate : function() {
				},
				startup : function() {
					this.chart = echarts.init(this.chartNode);
					this.chart.setOption(a.getBaseFunnel());
					this.chart.setOption(e)
				}
			})
		});