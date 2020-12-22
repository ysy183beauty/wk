﻿/*
	@page
	@宏观经济分析
 */var _tmpData = null;
window.onload = function() {
	_tmpData = corporData;
	pageLoad()
};
function pageLoad() {
	$(".header_date").text(commonClass._getDate());
	leftCorPanel.init();
	rightCorPanel.init();
	middelCorPanel.init();
	window.onresize = function() {
		//barEx.resize();
		barEx1.resize();
		radarEx.resize();
		dieBar.resize();
		dieBarex.resize();
		industryDesity.resize();
		industryCloud.resize();
		PieIndustryPer.resize();
		pieIndustryAve.resize();
		bubbleIndustyr.resize()
	}
}
var leftCorPanel = {
	init : function() {
		barEx = this.createInfoNeedEx();
		radarEx = this.createInfoResourceShareEx();
	},
	createInfoResourceShareEx: function(){
	
		var c = echarts.init(document.getElementById("infoResourceShareEx")), d = [], e = {
			title : {
				text : "信息资源集中度",
				textStyle : {
					fontSize : 15,
					color : "#018ccd",
					fontWeight : "normal",
					fontFamily : "Microsoft YaHei"
				}
			},
			tooltip : {
				formatter : function(a) {
					return "政务云平台集中管理信息资源数量：770"
							+ "\x3cbr\x3e政务信息资源总量：1000"
				}
			},	
			animationDuration: 5000,
		    series: [
		        {
		            name: '已获取信息资源需求量比例',
		            type: 'gauge',
		            min:0,
		            max:100,
		            radius: 85,
		            center : ['45%', '60%'],
		            axisLine: {            // 坐标轴线
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: [[0.50, '#ff4500'],[0.80, '#fee235'],[1, 'lime']],
		                    width: 18,
		                    shadowColor : '#fff', //默认透明
		                    shadowBlur: 10
		                }
		            },
		            axisLabel: {            // 坐标轴小标记
		                textStyle: {       // 属性lineStyle控制线条样式
		                    fontWeight: 'bolder',
		                    color: '#fff',
		                    shadowColor : '#fff', //默认透明
		                    shadowBlur: 10
		                }
		            },
		            axisTick: {            // 坐标轴小标记
		                length :15,        // 属性length控制线长
		                lineStyle: {       // 属性lineStyle控制线条样式
		                    color: 'auto',
		                    shadowColor : '#fff', //默认透明
		                    shadowBlur: 10
		                }
		            },
		            splitLine: {           // 分隔线
		                length :25,         // 属性length控制线长
		                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
		                    width:3,
		                    color: '#fff',
		                    shadowColor : '#fff', //默认透明
		                    shadowBlur: 10
		                }
		            },
		            pointer: {           // 分隔线
		                shadowColor : '#fff', //默认透明
		                shadowBlur: 5
		            },
		            title : {
		                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
		                    fontWeight: 'bolder',
		                    fontSize: 20,
		                    fontStyle: 'italic',
		                    color: '#fff',
		                    shadowColor : '#fff', //默认透明
		                    shadowBlur: 10
		                }
		            },
		            detail: {formatter:'{value}%'},
		            data: [{value: 77, name: ''}]
		        }
		    ]
		};
		c.setOption(e);
	},
	createInfoNeedEx : function() {

		var a = _tmpData.left.stackBar;
		var c = echarts.init(document.getElementById("fourAndTotalEx")), d = [], e = {
			color : "#f16e15 #fee235 #457bdb #bda29a #ffb570 #90d760 #81c3ff #c23531 #fee235 #00BFFF #d48265 #76EE00 #749f83 #FF34B3 #BF3EFF #546570 #00EE00 #211c49 #962364 #8fad4a #36cfd1 #7f3900"
				.split(" "),
				title : {
					text : "信息资源共享开放难易度",
					textStyle : {
						fontSize : 15,
						color : "#018ccd",
						fontWeight : "normal",
						fontFamily : "Microsoft YaHei"
					}
				},
				animationDuration: 5000,
				 tooltip: {
				        trigger: 'item',
				        formatter: "{a} <br/>{b}: {c} ({d}%)"
				    },
				    series: [
				        {
				            name:'信息资源获取方式',
				            type:'pie',
				            selectedMode: 'single',
				            radius: ['20%', '40%'],
				            center : [ "45%", "57%" ],
				            label: {
				                normal: {
				                    position: 'inner'
				                }
				            },
				            labelLine: {
				                normal: {
				                    show: false
				                }
				            },
				            data:[
								{value:335, name:'文件传输', selected:true},
								{value:310, name:'数据接口'},
								{value:234, name:'数据库对接'},
								{value:135, name:'前置机对接'},
								{value:1048, name:'在线查询'},
								{value:251, name:'其他'}
				            ]
				        },
				        {
				            name:'信息资源存储条件',
				            type:'pie',
				            radius: ['50%', '75%'],
				            center : [ "45%", "57%" ],
				            data:[
				                
				                {value:335, name:'数据库'},
				                {value:679, name:'电子表格'},
				                {value:679, name:'纸质文档'}
				            ]
				        }
				    ]
		};
		c.setOption(e);
		
		c.on('click', function (params) {
			
			var data1 = [
			               
			                {value:Math.ceil(Math.random()*100), name:'数据库'},
			                {value:Math.ceil(Math.random()*100), name:'电子表格'},
			                {value:Math.ceil(Math.random()*100), name:'纸质文档'},
			            ];
			
			if(params.seriesIndex==0){
				for(var i=0;i<e.series[0].data.length;i++){
                    e.series[0].data[i].selected=false;
                }
                var selected=params.data;
                selected.selected=true;              
                e.series[0].data[params.dataIndex]=selected;
              //  option.series[1].data=dataA;
                e.series[1].data=data1;  
                e.animationDuration=1000;
                c.clear();
                c.setOption(e);
			}
		    
		});
	},
	createRadar : function() {
		var a = _tmpData.left.IndustrySuv.data, a = {
			title : {
				text : "\u4f01\u4e1a\u5bb6\u6570",
				textStyle : {
					color : "#018ccd",
					fontSize : 15,
					fontWeight : "normal",
					fontFamily : "Microsoft YaHei"
				}
			},
			tooltip : {},
			animationDuration: 5000,
			radar : {
				indicator : _tmpData.left.IndustrySuv.info,
				center : [ "50%", "55%" ],
				name : {
					textStyle : {
						color : "#00a0e8",
						fontSize : 14
					}
				},
				nameGap : 12,
				splitArea : {
					areaStyle : {
						color : "#03162b",
						shadowColor : "rgba(0, 0, 0, 0.3)",
						shadowBlur : 10
					}
				},
				axisLine : {
					lineStyle : {
						color : "rgba(255, 255, 0, 0.3)"
					}
				},
				splitLine : {
					lineStyle : {
						color : "rgba(0, 0, 0, 0.5)",
						width : 1
					}
				}
			},
			series : [ {
				name : "",
				type : "radar",
				symbolSize : 6,
				label : {
					normal : {
						show : !1,
						position : [ -10, -20 ],
						formatter : function(a) {
							return a.value
						},
						textStyle : {
							color : "#ff0"
						}
					}
				},
				lineStyle : {
					normal : {
						type : "dashed",
						color : "#ff0",
						opacity : .5
					}
				},
				areaStyle : {
					normal : {
						color : new echarts.graphic.RadialGradient(.5, .5, .6,
								[ {
									offset : 0,
									color : "#00ff21"
								}, {
									offset : 1,
									color : "#b6ff00"
								} ]),
						opacity : .5
					}
				},
				itemStyle : {
					normal : {
						color : new echarts.graphic.RadialGradient(.5, .5, .8,
								[ {
									offset : 0,
									color : "#00ff21"
								}, {
									offset : 1,
									color : "#b6ff00"
								} ])
					}
				},
				data : [ {
					name : "\u4f01\u4e1a\u5b58\u6d3b\u5e74\u9650",
					value : a
				} ]
			} ]
		}, b = echarts.init(document.getElementById("SurvivalTimeBarEx"));
		b.setOption(a);
		return b
	},
	createDieBarEX : function() {
		var a = _tmpData.left.DieIndustry.data2010.series_data_share, a = {
			title : {
				right : 0,
				textAlign : "left",
				subtext : "2010\u5e74",
				subtextStyle : {
					color : "#018ccd",
					fontWeight : "bold"
				}
			},
			tooltip : {
				trigger : "axis",
				axisPointer : {
					type : "shadow"
				}
			},
			animationDuration: 5000,
			grid : {
				left : -40,
				right : "0%",
				bottom : "-10%",
				top : "23%",
				containLabel : !0
			},
			xAxis : [ {
				type : "value",
				inverse : !0,
				axisLabel : {
					show : !1
				},
				axisTick : {
					show : !1
				},
				axisLine : {
					show : !1
				},
				splitLine : {
					show : !1
				}
			} ],
			yAxis : [ {
				type : "category",
				axisLabel : {
					show : !1,
					interval : 0,
					formatter : function(a, b) {
					}
				},
				axisTick : {
					show : !1
				},
				inverse : !0,
				axisLine : {
					show : !1
				},
				data : _tmpData.left.DieIndustry.data2010.xAxis_data
			} ],
			series : [ {
				name : "\u4f01\u4e1a\u6570(\u5bb6)",
				type : "bar",
				barWidth : "45%",
				barGap : "0",
				label : {
					normal : {
						show : !0,
						position : "left"
					}
				},
				data : [ {
					value : a[0],
					itemStyle : {
						normal : {
							color : "#8407d3"
						}
					}
				}, {
					value : a[1],
					itemStyle : {
						normal : {
							color : "#4154e6"
						}
					}
				}, {
					value : a[2],
					itemStyle : {
						normal : {
							color : "#419ae6"
						}
					}
				}, {
					value : a[3],
					itemStyle : {
						normal : {
							color : "#2eb9aa"
						}
					}
				}, {
					value : a[4],
					itemStyle : {
						normal : {
							color : "#2eb979"
						}
					}
				} ]
			} ]
		}, b = echarts.init(document.getElementById("DieIndustryBarEX"));
		b.setOption(a);
		return b
	},
	createDieBar : function() {
		var a = _tmpData.left.DieIndustry.data2015.series_data_share.reverse();
		option = {
			title : {
				right : 63,
				textAlign : "right",
				subtext : "2015\u5e74",
				subtextStyle : {
					color : "#018ccd",
					fontWeight : "bold"
				}
			},
			animationDuration: 5000,
			tooltip : {
				trigger : "axis",
				axisPointer : {
					type : "shadow"
				}
			},
			grid : {
				left : -85,
				right : "15%",
				bottom : "-10%",
				top : "23%",
				containLabel : !0
			},
			xAxis : {
				type : "value",
				axisLabel : {
					show : !1
				},
				axisTick : {
					show : !1
				},
				axisLine : {
					show : !1
				},
				splitLine : {
					show : !1
				}
			},
			yAxis : {
				type : "category",
				axisLabel : {
					show : !1,
					interval : 9
				},
				axisTick : {
					show : !1
				},
				axisLine : {
					show : !1
				},
				data : _tmpData.left.DieIndustry.data2015.xAxis_data.reverse()
			},
			series : [ {
				name : "\u4f01\u4e1a\u6570(\u5bb6)",
				type : "bar",
				barWidth : "45%",
				label : {
					normal : {
						show : !0,
						position : "right"
					}
				},
				data : [ {
					value : a[0],
					itemStyle : {
						normal : {
							color : "#2eb979"
						}
					}
				}, {
					value : a[1],
					itemStyle : {
						normal : {
							color : "#2eb9aa"
						}
					}
				}, {
					value : a[2],
					itemStyle : {
						normal : {
							color : "#419ae6"
						}
					}
				}, {
					value : a[3],
					itemStyle : {
						normal : {
							color : "#4154e6"
						}
					}
				}, {
					value : a[4],
					itemStyle : {
						normal : {
							color : "#8407d3"
						}
					}
				} ]
			} ]
		};
		a = echarts.init(document.getElementById("DieIndustryBar"));
		a.setOption(option);
		return a
	}
}, rightCorPanel = {
	init : function() {
		PieIndustryPer = this.infoNeedRatePre();
		pieIndustryAve = this.loadPieIndustryAve();
		//bubbleIndustyr = this.loadBubbleIndustry()
	},
	infoNeedRatePre:function(){
		
		var a = _tmpData.right.stackBar;
		var c = echarts.init(document.getElementById("infoNeedRate")), d = [], e = {
			title : {
				text : "信息资源服务电子化分析",
				textStyle : {
					fontSize : 15,
					color : "#018ccd",
					fontWeight : "normal",
					fontFamily : "Microsoft YaHei"
				}
			},
			tooltip : {
				trigger : "axis",
				axisPointer : {
					type : "none"
				}
			},
			animationDuration: 5000,
			grid : {
				left : "7%",
				right : "5%",
				top : "20%",
				bottom : "15%",
				containLabel : !1
			},
			xAxis : [ {
				type : "category",
				data : a.xAxis_data,
				axisTick : {
					alignWithLabel : !0,
					length : 0
				},
				axisLine : {
					lineStyle : {
						color : "#072543",
						width : 0
					}
				},
				axisLabel : {
					textStyle : {
						color : "#09b7ff"
					},
					interval : 2
				},
				splitLine : {
					show : !1,
					lineStyle : {
						color : "#072543"
					}
				}
			} ],
			yAxis : [ {
				type : "value",
				min : 0,
				axisLine : {
					lineStyle : {
						color : "#072543"
					}
				},
				axisTick : {
					length : 10
				},
				axisLabel : {
					textStyle : {
						color : "#09b7ff"
					}
				},
				splitLine : {
					lineStyle : {
						color : "#031d34"
					}
				}
			} ],
			series : null
		};
		$.each(a.series_data, function(a, e) {
			d.push({
				name : e.name,
				type : "bar",
				barWidth : "25%",
				stack : e.stack,
				itemStyle : {
					normal : {
						color : e.color
					}
				},
				data : e.data
			})
		});
		
		e.series = d;
		c.setOption(e);
	},
	
	loadPieIndustryPer : function() {
		var a = {
			color : "#f16e15 #fee235 #457bdb #bda29a #ffb570 #90d760 #81c3ff #c23531 #fee235 #00BFFF #d48265 #76EE00 #749f83 #FF34B3 #BF3EFF #546570 #00EE00 #211c49 #962364 #8fad4a #36cfd1 #7f3900"
					.split(" "),
			title : {
				text : "\u884c\u4e1a\u4f01\u4e1a\u6570\u91cf\u5360\u6bd4",
				textStyle : {
					fontSize : 15,
					color : "#018ccd",
					fontWeight : "normal",
					fontFamily : "Microsoft YaHei"
				}
			},
			tooltip : {
				trigger : "item",
				formatter : "{a} \x3cbr/\x3e{b}: {c}\u5bb6 "
			},
			animationDuration: 5000,
			series : [ {
				name : "\u884c\u4e1a\u6570\u91cf\u5360\u6bd4",
				type : "pie",
				selectedMode : "single",
				radius : [ 0, "40%" ],
				startAngle : 180,
				label : {
					normal : {
						show : !1,
						position : "inner"
					}
				},
				labelLine : {
					normal : {
						show : !1
					}
				},
				data : _tmpData.right.IndustryPercent.data1
			}, {
				name : "\u4f01\u4e1a\u6570\u91cf\u5360\u6bd4",
				type : "pie",
				radius : [ "60%", "80%" ],
				startAngle : 180,
				label : {
					normal : {
						show : !1
					}
				},
				labelLine : {
					normal : {
						show : !1,
						length : 2
					}
				},
				data : _tmpData.right.IndustryPercent.data2
			} ]
		}, b = echarts.init(document.getElementById("IndustryPercentEx"));
		b.setOption(a);
		return b
	},
	loadPieIndustryAve : function() {
		var a = _tmpData.right.info_data;
		var c = echarts.init(document.getElementById("IndustryAvearageEx")), d = [], e = {
			color : "#8fad4a #36cfd1 #7f3900 #f16e15 #fee235 #457bdb #bda29a #ffb570 #90d760 #81c3ff #c23531 #fee235 #00BFFF #d48265 #76EE00 #749f83 #FF34B3 #BF3EFF #546570 #00EE00 #211c49 #962364 #8fad4a #36cfd1 #7f3900  #962364"
				.split(" "),
			title : {
				text : "信息资源鲜活度",
				textStyle : {
					fontSize : 15,
					color : "#018ccd",
					fontWeight : "normal",
					fontFamily : "Microsoft YaHei"
				}
			},
			animationDuration: 5000,
			tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    series: [
		        {
		            name:'信息资源存储方式统计',
		            type:'pie',
		            selectedMode: 'single',
		            radius: [0, '30%'],

		            label: {
		                normal: {
		                    position: 'inner'
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
						{value:33532, name:'信息资源总量', selected:true},
						{value:21000, name:'数据库'},
						{value:11234, name:'电子表格'}
		            ]
		        },
		        {
		            name:'信息资源更新频率',
		            type:'pie',
		            radius: ['40%', '55%'],

		            data:[	                
		                {value:13335, name:'实时'},
		                {value:4679, name:'旬'},
		                {value:3548, name:'月'},
		                {value:2548, name:'季'},
		                {value:2548, name:'年'},
		                {value:1548, name:'其他'}
		            ]
		        }
		    ]
	};
		c.setOption(e);
		
		c.on('click', function (params) {
			
			var data1 = [	                
			                {value:Math.ceil(Math.random()*1000+1000), name:'实时'},
			                {value:Math.ceil(Math.random()*1000), name:'旬'},
			                {value:Math.ceil(Math.random()*1000), name:'月'},
			                {value:Math.ceil(Math.random()*1000), name:'季'},
			                {value:Math.ceil(Math.random()*1000), name:'年'},
			                {value:Math.ceil(Math.random()*1000), name:'其他'}
			            ];
			
			if(params.seriesIndex==0){
				for(var i=0;i<e.series[0].data.length;i++){
                    e.series[0].data[i].selected=false;
                }
                var selected=params.data;
                selected.selected=true;              
                e.series[0].data[params.dataIndex]=selected;
              //  option.series[1].data=dataA;
                e.series[1].data=data1;  
                e.animationDuration=1000;
                c.clear();
                c.setOption(e);
			}
		    
		});
	},
	loadBubbleIndustry : function() {
		for (var a = _tmpData.right.IndustryBuble.data, b = "#f16e15 #fee235 #457bdb #bda29a #ffb570 #90d760 #81c3ff #c23531 #fee235 #00BFFF #d48265 #76EE00 #749f83 #FF34B3 #BF3EFF #546570 #00EE00 #211c49 #962364 #8fad4a #36cfd1 #7f3900"
				.split(" "), c = [], d = 0; d < a.length; d++) {
			var e = {};
			e.value = a[d];
			e.itemStyle = {
				normal : {
					color : new echarts.graphic.RadialGradient(.3, .3, .5, [ {
						offset : 0,
						color : b[d]
					}, {
						offset : 1,
						color : b[d + 1]
					} ]),
					opacity : .6
				}
			};
			c.push(e)
		}
		option = {
			title : {
				text : "信息资源需求结构",
				textStyle : {
					fontSize : 15,
					color : "#018ccd",
					fontWeight : "normal",
					fontFamily : "Microsoft YaHei"
				}
			},
			tooltip : {
				formatter : function(a) {
					return a.data.value[3] + "\x3cbr\x3e业务事项(个)"
							+ a.data.value[1]
							+ "\x3cbr\x3e信息资源(个):"
							+ a.data.value[0]
							+ "\x3cbr\x3e重合度(%):"
							+ a.data.value[2]
				}
			},
			grid : {
				left : "3%",
				right : "10%",
				bottom : "3%",
				top : "25%",
				containLabel : !0,
				show : !0,
				borderColor : "#031d34"
			},
			animationDuration: 5000,
			xAxis : {
				type : "value",
				name : "信息资源",
				nameLocation : "end",
				nameGap : 9,
				splitLine : {
					show : !0,
					lineStyle : {
						color : "#00a0e8",
						width : 1,
						opacity : .2
					}
				},
				axisLine : {
					lineStyle : {
						color : "#00a0e8",
						width : 1,
						opacity : .2
					}
				}
			},
			yAxis : {
				type : "value",
				name : "业务事项数量",
				nameGap : 8,
				splitLine : {
					show : !0,
					lineStyle : {
						color : "#00a0e8",
						width : 1,
						opacity : .2
					}
				},
				axisLine : {
					lineStyle : {
						color : "#00a0e8",
						width : 1,
						opacity : .2
					}
				},
				scale : !0
			},
			series : [ {
				name : "重合度",
				data : c,
				type : "scatter",
				symbolSize : function(a) {
					return Math.sqrt(a[2]) *4
				},
				label : {
					emphasis : {
						show : !0,
						textStyle : {
							color : "#018ccd"
						},
						position : "top"
					}
				},
				itemStyle : {
					normal : {
						shadowBlur : 10,
						shadowColor : "rgba(120, 36, 50, 0.5)",
						shadowOffsetY : 5
					}
				}
			} ]
		};
		a = echarts.init(document.getElementById("infoBubbleEx"));
		a.setOption(option);
		return a
	}
}, middelCorPanel = {
	init : function() {
		industryCloud = this.laodIndustryCloudLable()
	},
	loadIndustryDesity : function() {
		var a = _tmpData.middel.IndustryDesIncre.IndustryDestiy.xAxis_data, b = _tmpData.middel.IndustryDesIncre.IndustryIncre.data, c;
		c = _tmpData.middel.IndustryDesIncre.IndustryDestiy.data;
		a = {		
			color : "#fee235 #457bdb #bda29a #76EE00 #FF34B3 #BF3EFF #8fad4a #36cfd1 #7f3900 #f16e15 #ffb570 #90d760 #749f83 #FF34B3 #BF3EFF #546570 #00EE00 #211c49 #962364 #8fad4a #36cfd1 #7f3900 #962364"
				.split(" "),
				title : {
					text : "信息资源共享开放度",
					textStyle : {
						fontSize : 15,
						color : "#018ccd",
						fontWeight : "normal",
						fontFamily : "Microsoft YaHei"
					}
				},
				animationDuration: 5000,
				    tooltip : {
				        trigger: 'axis'
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : false,
				            data : ['部门1','部门2','部门3','部门4','部门5','部门6','部门7','部门8','部门9','部门10','部门11','部门12','部门13','部门14','部门15','部门16','部门17','部门18','部门19','部门20','部门1','部门2','部门3','部门4','部门5','部门6','部门7','部门8','部门9','部门10','部门11','部门12','部门13','部门14','部门15','部门16','部门17','部门18','部门19','部门20','部门1','部门2','部门3','部门4','部门5','部门6','部门7','部门8','部门9','部门10','部门11','部门12','部门13','部门14','部门15','部门16','部门17','部门18','部门19','部门20','部门1','部门2','部门3','部门4','部门5','部门6','部门7','部门8','部门9','部门10','部门11','部门12','部门13','部门14','部门15','部门16','部门17','部门18','部门19','部门20'],
					        axisTick : {
								alignWithLabel : !0,
								length : 5
							},
							axisLine : {
								lineStyle : {
									color : "#072543"
								}
							},
							axisLabel : {
								textStyle : {
									color : "#09b7ff"
								},
								interval : 5
							},
							splitLine : {
								show : !1,
								lineStyle : {
									color : "#072543"
								}
							}
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value',
				            axisLine : {
								lineStyle : {
									color : "#072543"
								}
							},
							axisTick : {
								length : 10
							},
							axisLabel : {
								textStyle : {
									color : "#09b7ff"
								}
							},
							splitLine : {
								lineStyle : {
									color : "#031d34"
								}
							}
				        }
				    ],
				    series : [
				        {
				            name:'共享(条)',
				            type:'line',
				            smooth:true,
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data:[1120, 1032, 999, 998, 899, 879, 859,812,799,786,753,698,670,631,611,598,561,512,490,451,1120, 1032, 999, 998, 899, 879, 859,812,799,786,753,698,670,631,611,598,561,512,490,451,1120, 1032, 999, 998, 899, 879, 859,812,799,786,753,698,670,631,611,598,561,512,490,451,1120, 1032, 999, 998, 899, 879, 859,812,799,786,753,698,670,631,611,598,561,512,490,451]
				        },
				        {
				            name:'共享意愿(条)',
				            type:'line',
				            smooth:true,
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data:[1220, 1182, 1100, 987, 940, 900, 899,854,811,798,768,711,688,633,596,588,511,435,411,356,1220, 1182, 1100, 987, 940, 900, 899,854,811,798,768,711,688,633,596,588,511,435,411,356,1220, 1182, 1100, 987, 940, 900, 899,854,811,798,768,711,688,633,596,588,511,435,411,356,1220, 1182, 1100, 987, 940, 900, 899,854,811,798,768,711,688,633,596,588,511,435,411,356]
				        },
				        {
				            name:'开放意愿(条)',
				            type:'line',
				            smooth:true,
				            itemStyle: {normal: {areaStyle: {type: 'default'}}},
				            data:[2150, 1232, 1201, 1154, 999, 876, 800,786,754,732,700,648,633,622,599,577,522,490,467,324,2150, 1232, 1201, 1154, 999, 876, 800,786,754,732,700,648,633,622,599,577,522,490,467,324,2150, 1232, 1201, 1154, 999, 876, 800,786,754,732,700,648,633,622,599,577,522,490,467,324,2150, 1232, 1201, 1154, 999, 876, 800,786,754,732,700,648,633,622,599,577,522,490,467,324]
				        }
				    ]
		};
		b = echarts.init(document.getElementById("IndustryDesIncreEx"));
		b.setOption(a);
		return b
	},
	loadIndustryCloud : function() {
		$("#IndustrySurvialEx")
				.html(
						"\x3ca style\x3d'font-size:33px;'\x3e\u6279\u53d1\u548c\u96f6\u552e\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:30px;'\x3e\u5236\u9020\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:28px;'\x3e\u79df\u8d41\u548c\u5546\u52a1\u670d\u52a1\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:27px;'\x3e\u5efa\u7b51\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:26px;width:120px;'\x3e\u79d1\u5b66\u7814\u7a76\u3001\u6280\u672f\u670d\u52a1\u548c\u5730\u8d28\u52d8\u67e5\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:25px;'\x3e\u519c\u3001\u6797\u3001\u7267\u3001\u6e14\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:25px;'\x3e\u623f\u5730\u4ea7\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:24px;'\x3e\u4ea4\u901a\u8fd0\u8f93\u3001\u4ed3\u50a8\u53ca\u90ae\u653f\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:23px;width:120px;'\x3e\u4fe1\u606f\u4f20\u8f93\u3001\u8ba1\u7b97\u673a\u670d\u52a1\u548c\u8f6f\u4ef6\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:23px;'\x3e\u5c45\u6c11\u670d\u52a1\u548c\u5176\u4ed6\u670d\u52a1\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:22px;'\x3e\u91d1\u878d\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:22px;'\x3e\u6587\u5316\u3001\u4f53\u80b2\u548c\u5a31\u4e50\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:20px;'\x3e\u4f4f\u5bbf\u548c\u9910\u996e\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:20px;'\x3e\u6559\u80b2\x3c/a\x3e\x3ca style\x3d'font-size:19px;width:120px;'\x3e\u7535\u529b\u3001\u7164\u6c14\u53ca\u6c34\u7684\u751f\u4ea7\u548c\u4f9b\u5e94\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:18px;width:120px;'\x3e\u6c34\u5229\u3001\u73af\u5883\u548c\u516c\u5171\u8bbe\u65bd\u7ba1\u8d74\u76d1\x3c/a\x3e\x3ca style\x3d'font-size:18px;'\x3e\u91c7\u77ff\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:15px;width:120px;'\x3e\u536b\u751f\u3001\u793e\u4f1a\u4fdd\u969c\u548c\u793e\u4f1a\u798f\u5229\u4e1a\x3c/a\x3e\x3ca style\x3d'font-size:14px;'\x3e\u516c\u5171\u7ba1\u7406\u548c\u793e\u4f1a\u7ec4\u7ec7\x3c/a\x3e");
		var a = $("#IndustrySurvialEx").height();
		loadLabelCloud("IndustrySurvialEx", a / 2 - 40)
	},
	laodIndustryCloudLable : function() {
		var a = echarts.init(document.getElementById("IndustrySurvialEx"));
		a
				.setOption({
					animationDuration: 5000,
					title : {
						text : "信息资源丰富性",
						textStyle : {
							fontSize : 15,
							color : "#018ccd",
							fontWeight : "normal",
							fontFamily : "Microsoft YaHei"
						}
					},
					tooltip : {
						textStyle : {},
						formatter : function(a, c, d) {
							c = a.data.value;
							return a.name
									+ "\x3cbr\x3e信息资源(条):"
									+ c[0]
									+ "\x3cbr\x3e数据项(条):"
									+ c[0]
						}
					},
					grid : {
						left : "3%",
						right : "4%",
						bottom : "3%",
						top : "27%",
						containLabel : !0,
						show : !1
					},
					series : [ {
						type : "wordCloud",
						gridSize : 12,
						size : [ "100%", "100%" ],
						sizeRange : [ 12, 66 ],
						width : "100%",
						height : "100%",
						rotationRange : [ 0, 0 ],
						center : [ "40%", "47%" ],
						clickable : !0,
						shape : "circle",
						autoSize : {
							enable : !0,
							minSize : 12
						},
						data : [
								{
									name : "部门1",
									value : [ 11236, 3.6 ],
									textStyle : {
										normal : {
											color : "#026bb8"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "部门2",
									value : [ 34374, 6.5 ],
									textStyle : {
										normal : {
											color : "#026bb8"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "部门3",
									value : [ 64784, 5.4 ],
									textStyle : {
										normal : {
											color : "#b6ff00"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "部门4",
									value : [ 17734, 4.1 ],
									textStyle : {
										normal : {
											color : "#0ebcf6"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "部门5",
									value : [ 5852, 5.1 ],
									textStyle : {
										normal : {
											color : "#f00"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "部门6",
									value : [ 4758, 6.2 ],
									textStyle : {
										normal : {
											color : "#34b647"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "部门7",
									value : [ 1112, 5.6 ],
									textStyle : {
										normal : {
											color : "#486497"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "部门8",
									value : [ 4950, 5.2 ],
									textStyle : {
										normal : {
											color : "#ff6a00"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "部门9",
									value : [ 3836, 6.6 ],
									textStyle : {
										normal : {
											color : "#d1d74d"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "部门10",
									value : [ 2122, 9.8 ],
									textStyle : {
										normal : {
											color : "#087ba5"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								}]
					} ],
					animationEasing : "Linear"
				});
		return a
	}
};