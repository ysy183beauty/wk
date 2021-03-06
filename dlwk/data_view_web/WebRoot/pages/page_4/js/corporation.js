﻿/*
	@page4
	@宏观经济分析
 */var _tmpData = null;
 var dataz = null;
 var leftChart1 = null, leftChart2 = null;
 var midChart1 = null, midChart2 = null;
 var rightChart1 = null, rightChart2 = null;
window.onload = function() {
	dataz = commonClass._commAjax('/page4/data');
	pageLoad();
	
	//动画
	var charts = new Array();
	charts.push(leftChart1);
    charts.push(leftChart2);
    charts.push(midChart1);
    charts.push(midChart2);
    charts.push(rightChart1);
    charts.push(rightChart2);
    
    animationAfterStill.autoPlay(charts);
};
function pageLoad() {
	$(".header_date").text(commonClass._getDate());
	leftCorPanel.init();
	rightCorPanel.init();
	middelCorPanel.init();
	window.onresize = function() {
		barEx.resize();
		barEx1.resize();
		//radarEx.resize();
		dieBar.resize();
		dieBarex.resize();
		industryDesity.resize();
		//industryCloud.resize();
		//industryCloud1.resize();
		//pieIndustryAve.resize();
		//bubbleIndustyr.resize()
	}
}
var leftCorPanel = {
	init : function() {
		barEx1 = this.createBarEx1();
		//radarEx = this.createRadar();
		dieBarex = this.createDieBarEX();
	},
	createBarEx1 : function() {
		var names1 = dataz.left.left1_1_name;
		var names2 = dataz.left.left1_2_name;
		var datas1 = [], datas2 = [];
		var aux_datas1 = [], aux_datas2 = [];
		
		var max = Math.max(dataz.left.left1_1_data[0], dataz.left.left1_2_data[0]) *1.1;
		$.each(dataz.left.left1_1_data, function(index, value) {
			datas1.push({
				value : value*-1,
				itemStyle : {
					normal : {
						color : '#FFBE71',
					}
				}
			});
			aux_datas1.push(max*-1);
		});
		$.each(dataz.left.left1_2_data, function(index, value) {
			datas2.push({
				value : value,
				itemStyle : {
					normal : {
						color : '#F5A700',
					}
				}
			});
			aux_datas2.push(max);
		});
		
		option = {
			title : {
				text : "人口库       法人库",
				right : 'center',
				top : '10%',
				textStyle : {
					color : "#A9BDD6",
					fontSize : 15,
					fontWeight : "bold"
				}
			},
			toolbox : {
				right : 16,
				feature : {
					saveAsImage : {
						name : '五大基础库资源贡献部门Top5',
						icon : 'M15,0 L10,0 L10,3 C10,3.6 9.6,4 9,4 L4,4 C3.4,4 3,3.6 3,3 L3,0 L1,0 C0.4,0 0,0.4 0,1 L0,15 C0,15.6 0.4,16 1,16 L15,16 C15.6,16 16,15.6 16,15 L16,1 L16,1 C16,0.44771525 15.5522847,3.42636147e-16 15,4.4408921e-16 Z M13,14 L3,14 L3,11 C3,10.4 3.4,10 4,10 L12,10 C12.6,10 13,10.4 13,11 L13,14 Z M7,0 L9,0 L9,3 L7,3 L7,0 Z',
						backgroundColor : '#03162B',
						title : '保存为图'
					}
				}
			},
			tooltip : {
				trigger : "axis",
				axisPointer : {
					type : "shadow"
				},
				formatter : function(params) {
					var tips = "信息资源数量";
//					console.info(params)
					tips += "\x3cbr\x3e<span style='display:inline-block;margin-right:5px;"
							+ "border-radius:10px;width:9px;height:9px;background-color:"
							+ params[0].color
							+ "'>"
							+ "</span>"
							+ params[0].name
							+" : "
							+ params[0].value * -1;
					tips += "\x3cbr\x3e<span style='display:inline-block;margin-right:5px;"
							+ "border-radius:10px;width:9px;height:9px;background-color:"
							+ params[2].color
							+ "'>"
							+ "</span>"
							+ params[2].name
							+" : " + params[2].value;
					return tips;
				}
			},
			animationDuration : 5000,
			grid : {
				left : '8%',
				right : "8%",
				bottom : "5%",
				top : "20%",
				containLabel : !1
			},
			xAxis : {
				type : "value",
				position : 'top',
				max : max,
				min : max*-1,
				axisLine : {
					show : false
				},
				axisLabel : {
					show : false
				},
				axisTick : {
					show : false
				},
				splitLine : {
					show : false
				},
			},
			yAxis : [{
				type : "category",
				onZero : true,
				axisLine : {
					show : true,
					lineStyle : {
						color : '#03162B',
						width : 6
					}
				},
				axisLabel : {
					show : false
				},
				axisTick : {
					show : false
				},
				splitLine : {
					show : false
				},
				data : names1.reverse(),
				z : 30
			},{
				type : "category",
				offset : 15,
				axisLine : {
					show : false,
				},
				axisLabel : {
					show : false
				},
				axisTick : {
					show : false
				},
				splitLine : {
					show : false
				},
				data : names2.reverse(),
			}],
			series : [ {
				name : "信息资源数量",
				type : "bar",
				yAxisIndex: 0,
				label : {
					normal : {
						show : true,
						position : "insideRight",
						formatter : function(a){
							return commonClass._jName(a.name);
						},
						textStyle : {
							color : '#000000',
							fontWeight : 'normal'
						}
					}
				},
				data : datas1.reverse(),
				z : 20
			},{
				type : "bar",
				silent : true,
				yAxisIndex: 0,
				barGap : '-100%',
				label : {
					normal : {
						show : false
					}
				},
				itemStyle : {
					normal : {
						color : 'rgba(255,190,113,0.5)',
						barBorderRadius : 5
					}
				},
				data : aux_datas1
			},{
				name : "信息资源数量",
				type : "bar",
				yAxisIndex: 1,
				barGap : "0",
				label : {
					normal : {
						show : true,
						position : "insideLeft",
						formatter : function(a){
							return commonClass._jName(a.name);
						},
						textStyle : {
							color : '#000000',
							fontWeight : 'normal'
						}
					}
				},
				data : datas2.reverse(),
				z : 20
			},{
				type : "bar",
				silent : true,
				yAxisIndex: 1,
				barGap : '-100%',
				label : {
					normal : {
						show : false
					}
				},
				itemStyle : {
					normal : {
						color : 'rgba(245,167,0,0.5)',
						barBorderRadius : 5
					}
				},
				data : aux_datas2
			}]
		};
		leftChart1 = echarts.init(document.getElementById("NewIndustryBarEx1"));
		leftChart1.setOption(option);
		return leftChart1;
	},
	createDieBarEX : function() {
		var names1 = dataz.left.left2_1_name;
		var names2 = dataz.left.left2_2_name;
		var datas1 = [], datas2 = [];
		var aux_datas1 = [], aux_datas2 = [];
		var max = 0,min = 0, multiple = 0;
		if(dataz.left.left2_1_data.length == 0){
			dataz.left.left2_1_data = [0,0,0,0,0];
		}
		if(dataz.left.left2_2_data.length == 0){
			dataz.left.left2_2_data = [0,0,0,0,0];
		}
		max = Math.max(dataz.left.left2_1_data[0], dataz.left.left2_2_data[0]) *1.2;
		min = Math.min(dataz.left.left2_1_data[0], dataz.left.left2_2_data[0]) *1.2;
		//两项数据差值很大时会比较难看,所以给小的一组数值乘一个倍数以美化图表
		if(min != 0 && max != 0){
			multiple = Math.floor(max/min);
		}else{
			multiple = 1;
		}
		
		//比较出较小的一组数据
		if(dataz.left.left2_1_data[0] >= dataz.left.left2_2_data[0]){
			//left2_1较大,将left2_2中的数据扩大multiple倍
			$.each(dataz.left.left2_1_data, function(index, value) {
				datas1.push({
					value : value*-1,
					itemStyle : {
						normal : {
							color : 'rgba(33,243,95,1)',
						}
					}
				});
				aux_datas1.push(max*-1);
			});
			$.each(dataz.left.left2_2_data, function(index, value) {
				datas2.push({
					value : value*multiple,
					itemStyle : {
						normal : {
							color : '#70E41A',
						}
					}
				});
				//将较小数据的辅助数据-1作为标识
				aux_datas2.push(max-1);
			});
		}else {
			//left2_2较大,将left2_1中的数据扩大multiple倍
			$.each(dataz.left.left2_1_data, function(index, value) {
				datas1.push({
					value : value*-1*multiple,
					itemStyle : {
						normal : {
							color : 'rgba(33,243,95,1)',
						}
					}
				});
				aux_datas1.push((max-1)*-1);
			});
			$.each(dataz.left.left2_2_data, function(index, value) {
				datas2.push({
					value : value,
					itemStyle : {
						normal : {
							color : '#70E41A',
						}
					}
				});
				aux_datas2.push(max);
			});
		}
		
		option = {
			title : {
				text : "宏观经济库       信用征信库",
				right : 'center',
				top : '10%',
				textStyle : {
					color : "#A9BDD6",
					fontSize : 15,
					fontWeight : "bold"
				}
			},
			toolbox : {
				right : 16,
				feature : {
					saveAsImage : {
						name : '五大基础库资源贡献部门Top5',
						icon : 'M15,0 L10,0 L10,3 C10,3.6 9.6,4 9,4 L4,4 C3.4,4 3,3.6 3,3 L3,0 L1,0 C0.4,0 0,0.4 0,1 L0,15 C0,15.6 0.4,16 1,16 L15,16 C15.6,16 16,15.6 16,15 L16,1 L16,1 C16,0.44771525 15.5522847,3.42636147e-16 15,4.4408921e-16 Z M13,14 L3,14 L3,11 C3,10.4 3.4,10 4,10 L12,10 C12.6,10 13,10.4 13,11 L13,14 Z M7,0 L9,0 L9,3 L7,3 L7,0 Z',
						backgroundColor : '#03162B',
						title : '保存为图'
					}
				}
			},
			tooltip : {
				trigger : "axis",
				axisPointer : {
					type : "shadow"
				},
				formatter : function(params) {
					var tips = "信息资源数量";
//					console.info(params);	//params详细信息打印可见
					if(params[1].value*-1 > params[3].value){
						//说明params[2]是小数据,乘了multiple倍
						tips += "\x3cbr\x3e<span style='display:inline-block;margin-right:5px;"
							+ "border-radius:10px;width:9px;height:9px;background-color:"
							+ params[0].color
							+ "'>"
							+ "</span>"
							+ params[0].name
							+" : "
							+ params[0].value * -1;
						tips += "\x3cbr\x3e<span style='display:inline-block;margin-right:5px;"
							+ "border-radius:10px;width:9px;height:9px;background-color:"
							+ params[2].color
							+ "'>"
							+ "</span>"
							+ params[2].name
							+" : " + params[2].value / multiple;
					}else{ 
						//params[0]是小数据
						tips += "\x3cbr\x3e<span style='display:inline-block;margin-right:5px;"
							+ "border-radius:10px;width:9px;height:9px;background-color:"
							+ params[0].color
							+ "'>"
							+ "</span>"
							+ params[0].name
							+" : "
							+ (params[0].value * -1) / multiple;
						tips += "\x3cbr\x3e<span style='display:inline-block;margin-right:5px;"
							+ "border-radius:10px;width:9px;height:9px;background-color:"
							+ params[2].color
							+ "'>"
							+ "</span>"
							+ params[2].name
							+" : " + params[2].value ;
					}
					
					return tips;
				}
			},
			animationDuration : 5000,
			grid : {
				left : '8%',
				right : "8%",
				bottom : "5%",
				top : "20%",
				containLabel : !1
			},
			xAxis : {
				type : "value",
				position : 'top',
				max : max,
				min : max*-1,
				axisLine : {
					show : false
				},
				axisLabel : {
					show : false
				},
				axisTick : {
					show : false
				},
				splitLine : {
					show : false
				}
			},
			yAxis : [{
				type : "category",
				onZero : true,
				axisLine : {
					show : true,
					lineStyle : {
						color : '#03162B',
						width : 6
					}
				},
				axisLabel : {
					show : false
				},
				axisTick : {
					show : false
				},
				splitLine : {
					show : false
				},
				data : names1.reverse(),
				z : 30
			},{
				type : "category",
				offset : 15,
				axisLine : {
					show : false,
				},
				axisLabel : {
					show : false
				},
				axisTick : {
					show : false
				},
				splitLine : {
					show : false
				},
				data : names2.reverse(),
			}],
			series : [ {
				name : "信息资源数量",
				type : "bar",
				yAxisIndex: 0,
				label : {
					normal : {
						show : true,
						position : "insideRight",
						formatter : function(a){
							return commonClass._jName(a.name);
						},
						textStyle : {
							color : '#000000',
							fontWeight : 'normal'
						}
					}
				},
				data : datas1.reverse(),
				z : 20
			},{
				type : "bar",
				silent : true,
				yAxisIndex: 0,
				barGap : '-100%',
				label : {
					normal : {
						show : false
					}
				},
				itemStyle : {
					normal : {
						color : 'rgba(33,243,95,0.5)',
						barBorderRadius : 5
					}
				},
				data : aux_datas1
			},{
				name : "信息资源数量",
				type : "bar",
				yAxisIndex: 1,
				barGap : "0",
				label : {
					normal : {
						show : true,
						position : "insideLeft",
						formatter : function(a){
							return commonClass._jName(a.name);
						},
						textStyle : {
							color : '#000000',
							fontWeight : 'normal'
						}
					}
				},
				data : datas2.reverse(),
				z : 20
			},{
				type : "bar",
				silent : true,
				yAxisIndex: 1,
				barGap : '-100%',
				label : {
					normal : {
						show : false
					}
				},
				itemStyle : {
					normal : {
						color : 'rgba(112,228,26,0.5)',
						barBorderRadius : 5
					}
				},
				data : aux_datas2
			}]
		};
		leftChart2 = echarts.init(document.getElementById("DieIndustryBarEx"));
		leftChart2.setOption(option);
		return leftChart2;
	},
}, rightCorPanel = {
	init : function() {
		PieIndustryPer = this.loadPieIndustryPer();
		pieIndustryAve = this.loadPieIndustryAve();
		//bubbleIndustyr = this.loadBubbleIndustry()
	},
	loadPieIndustryPer : function() {
//right1":{"right1_data1":[297,208,202,43],"right1_data2":[53,66,54,23],"right1_name":["法人","人口","宏观经济","自然资源和空间地理"]}
		var color1 = ['#F5A700','#FFBE71','#21F35F','#70E41A','#FF673F'];
		var color2 = ['rgba(245,167,0,0.6)','rgba(255,190,113,0.6)','rgba(33,243,95,0.6)','rgba(112,228,26,0.6)','rgba(255,103,63,0.6)'];
		var names = dataz.right1.right1_name;
		var datas1 = [];
		var datas2 = [];
		$.each(dataz.right1.right1_data1, function(index, value, array) {
			datas1.push({
				value : value,
				itemStyle : {
					normal : {
						color : color1[index]
					}
				}
			});
		});
		$.each(dataz.right1.right1_data2, function(index, value, array) {
			datas2.push({
				value : value,
				itemStyle : {
					normal : {
						color : color2[index],
					}
				}
			});
		});
		
		rightChart1 = echarts.init(document.getElementById("IndustryPercentEx")), d = [], e = {
			title : {
				text : "五大库信息资源需求度",
				textStyle : {
					fontSize : 15,
					color : "#FFF",
					fontWeight : "normal",
					fontFamily : "Microsoft YaHei"
				}
			},
			animationDuration: 5000,
			tooltip : {
				trigger: 'axis',
				formatter : function(a) {
					return a[0].name + "\x3cbr\x3e<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:"+a[0].color+"'></span>信息资源:"
							+ a[0].value				
							+ "\x3cbr\x3e<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:"+a[1].color+"'></span>被需求信息资源:"
							+ a[1].value
							+ "\x3cbr\x3e<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#FFF'></span>被需求信息资源占比(%):"
							+ ((a[1].value*100)/a[0].value).toFixed(2)	
				}
			},
			toolbox : {
				right : 16,
				feature : {
					saveAsImage : {
						name : '五大库信息资源需求度',
						icon : 'M15,0 L10,0 L10,3 C10,3.6 9.6,4 9,4 L4,4 C3.4,4 3,3.6 3,3 L3,0 L1,0 C0.4,0 0,0.4 0,1 L0,15 C0,15.6 0.4,16 1,16 L15,16 C15.6,16 16,15.6 16,15 L16,1 L16,1 C16,0.44771525 15.5522847,3.42636147e-16 15,4.4408921e-16 Z M13,14 L3,14 L3,11 C3,10.4 3.4,10 4,10 L12,10 C12.6,10 13,10.4 13,11 L13,14 Z M7,0 L9,0 L9,3 L7,3 L7,0 Z',
						backgroundColor : '#03162B',
						title : '保存为图'
					}
				}
			},
//			visualMap: {
//		        show: !1,
//		        min: 0,
//		        max: 50,
//		        dimension: 0,
//		        inRange: {
//		        	color: ['#ffb570','#76EE00','#c23531','#fee235']
//		        }
//		    },
			grid : {
				left : "1%",
				right : "5%",
				bottom : "3%",
				top : "20%",
				containLabel : !0,
				show : !0,
				borderColor : "#031d34"
			},
			calculable : true,
		    xAxis : [
		        {
		            type : 'category',
		            splitLine : {show : false},
		            data : dataz.right1.right1_name,
		            axisTick : {
						show : false
					},
					axisLine : {
						lineStyle : {
							color : "#c2d6ef",
							width : 1.5,
							opacity : .8
						}
					},
					axisLabel : {
						textStyle : {
							color : "#c2d6ef"
						},
						interval : 0,
						formatter : function (a){
							return commonClass._bName(a);
						}
					},
					splitLine : {
						show : false,
					}
		        }
		    ],
		    yAxis : [
		        {
//		        	name:"数量",
		            type : 'value',
		            position: 'left',
		            axisLabel : {
		            	show : false
//						formatter : "{value}",
//						textStyle : {
//							fontSize : 13,
//							color : "#c2d6ef"
//						},
//						interval : 0
					},
					splitLine : {
						show : !0,
						lineStyle : {
							color : "#c2d6ef",
							width : 1,
							opacity : .2
						}
					},
					axisLine : {
						lineStyle : {
							color : "#c2d6ef",
							width : 1.5,
							opacity : .8
						}
					},
					axisTick : {
						show : false
					}
//					splitArea : {
//						show : !0,
//						areaStyle : {
//							color : [ "rgba(0,0,0,0.3)" ]
//						}
//					}
		        }			        
		    ],
		    series : [
		        {
		            name:'信息资源数量',
		            type:'bar',
		            data:datas1
		        },	
		        {
		            name:'信息资 源被需求数量',
		            type:'bar',
		            data:datas2
		        },
		    ]
		};
		rightChart1.setOption(e);
	},
	loadPieIndustryAve : function() {
		var stackBar = {
            xAxis_data: dataz.right2.right2_name,
//var color1 = ['#F5A700','#FFBE71','#21F35F','#70E41A','#FF673F'];
            series_data: [
                { name: "人口库", stack: "提交", color: "#FFBE71", data: dataz.right2.right2_data1 },
                { name: "法人库", stack: "提交", color: "#F5A700", data: dataz.right2.right2_data2 },
                { name: "宏观经济库", stack: "提交", color: "#21F35F", data: dataz.right2.right2_data3 },
                { name: "信用征信库", stack: "提交", color: "#70E41A", data: dataz.right2.right2_data4 },
            ],
        };
		rightChart2 = echarts.init(document.getElementById("IndustryAvearageEx")), d = [], e = {
			color : "#f16e15 #fee235 #457bdb #bda29a #ffb570 #90d760 #81c3ff #c23531 #fee235 #00BFFF #d48265 #76EE00 #749f83 #FF34B3 #BF3EFF #546570 #00EE00 #211c49 #962364 #8fad4a #36cfd1 #7f3900"
				.split(" "),
			title : {
				text : "五大基础库需求部门Top10",
				textStyle : {
					fontSize : 15,
					color : "#FFF",
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
			toolbox : {
				right : 16,
				top : 16,
				feature : {
					saveAsImage : {
						name : '五大基础库需求部门Top10',
						icon : 'M15,0 L10,0 L10,3 C10,3.6 9.6,4 9,4 L4,4 C3.4,4 3,3.6 3,3 L3,0 L1,0 C0.4,0 0,0.4 0,1 L0,15 C0,15.6 0.4,16 1,16 L15,16 C15.6,16 16,15.6 16,15 L16,1 L16,1 C16,0.44771525 15.5522847,3.42636147e-16 15,4.4408921e-16 Z M13,14 L3,14 L3,11 C3,10.4 3.4,10 4,10 L12,10 C12.6,10 13,10.4 13,11 L13,14 Z M7,0 L9,0 L9,3 L7,3 L7,0 Z',
						backgroundColor : '#03162B',
						title : '保存为图'
					}
				}
			},
			animationDuration : 5000,
			grid : {
				left : "1%",
				right : "5%",
				bottom : "3%",
				top : "20%",
				containLabel : !0,
				show : !0,
				borderColor : "#031d34"
			},
			xAxis : [ {
				type : "category",
				data : stackBar.xAxis_data,
				axisTick : {
					show : false
				},
				axisLine : {
					lineStyle : {
						color : "#c2d6ef",
						width : 1.5,
						opacity : .8
					}
				},
				axisLabel : {
					textStyle : {
						color : "#c2d6ef"
					},
					//interval : 1,
					formatter: function(a){
					    return commonClass._jName(a); 
					}
				},
				splitLine : {
					show : false
				}
			} ],
			yAxis : [ {
				type : "value",
				min : 0,
				axisLine : {
					lineStyle : {
						color : "#c2d6ef",
						width : 1.5,
						opacity : .8
					}
				},
				axisTick : {
					show : false
				},
				axisLabel : {
					show : false			
				},
				splitLine : {
					lineStyle : {
						color : "#c2d6ef",
						width : 1,
						opacity : .2
					}
				}
			} ],
			series : null
		};
		$.each(stackBar.series_data, function(a, e) {
			d.push({
				name : e.name,
				type : "bar",
				barWidth : "50%",
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
		rightChart2.setOption(e);
	}
}, middelCorPanel = {
	init : function() {
		industryDesity = this.loadIndustryDesity();
		industryCloud = this.createFourTotalRateEx();
		//industryCloud1 = this.createFourRateEx();
	},
	createFourTotalRateEx:function(){
		//"mid1":{"mid1_data":[477,816,3551,140,6945],"mid1_name":["法人","人口","宏观经济","自然资源和空间地理","总量"]},
		var color = ['#F5A700','#FFBE71','#21F35F','#70E41A','#FF673F'];
		var names = dataz.mid1.mid1_name;
		var datas = [];
		$.each(dataz.mid1.mid1_data, function(index, value, array) {
			datas.push({
				value : value,
				itemStyle : {
					normal : {
						color : color[index]
					}
				}
			});
		});
		
		midChart1 = echarts.init(document.getElementById("fourAndTotalEx")), d = [], e = {
			title : {
				text : "五大基础库信息资源数量",
				textStyle : {
					fontSize : 15,
					color : "#FFF",
					fontWeight : "normal",
					fontFamily : "Microsoft YaHei"
				}
			},
			tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        },
//		        formatter: function (params) {
//		        	//console.log(params)
//		            var tar = params[0];
//		            return tar.name + '<br/>数据项占比(%): ' + ((tar.value*100)/dataz.mid1.mid1_data[4]).toFixed(2);
//		        }
		    },
		    toolbox : {
				right : 16,
				feature : {
					saveAsImage : {
						name : '五大基础库信息资源数量',
						icon : 'M15,0 L10,0 L10,3 C10,3.6 9.6,4 9,4 L4,4 C3.4,4 3,3.6 3,3 L3,0 L1,0 C0.4,0 0,0.4 0,1 L0,15 C0,15.6 0.4,16 1,16 L15,16 C15.6,16 16,15.6 16,15 L16,1 L16,1 C16,0.44771525 15.5522847,3.42636147e-16 15,4.4408921e-16 Z M13,14 L3,14 L3,11 C3,10.4 3.4,10 4,10 L12,10 C12.6,10 13,10.4 13,11 L13,14 Z M7,0 L9,0 L9,3 L7,3 L7,0 Z',
						backgroundColor : '#03162B',
						title : '保存为图'
					}
				}
			},
			animationDuration:5000,
			grid : {
				left : "5%",
				right : "5%",
				bottom : "10%",
				top : "20%",
				containLabel : !0,
				show : !0,
				borderColor : "#031d34"
			},
//			visualMap: {
//		        show: false,
//		        min: 0,
//		        max: 50,
//		        dimension: 0,
//		        inRange: {
//		        	color: ['#90d760', '#BF3EFF', '#211c49', '#546570', '#962364', '#36cfd1']
//		        }
//		    },
			xAxis : [ {
				type : "category",
				data : dataz.mid1.mid1_name,
				axisLine : {
					lineStyle : {
						color : "#c2d6ef",
						width : 1.5,
						opacity : .8
					}
				},
				axisLabel : {
					margin : 15,
					textStyle : {
						color : "#c2d6ef"
					},
					formatter : function (a){
						return commonClass._bName(a);
					}
				},
				axisTick : {
					show : false
				},
				splitLine : {
					show : false,
				}
			} ],
			yAxis : [ {
				type : "value",
				min : 0,
				axisLine : {
					lineStyle : {
						color : "#c2d6ef",
						width : 1.5,
						opacity : .8
					}
				},
				axisTick : {
					show : false
				},
				axisLabel : {
					textStyle : {
						color : "#c2d6ef"
					}
				},
				splitLine : {
					lineStyle : {
						color : "#c2d6ef",
						width : 1,
						opacity : .2
					}
				}
			} ],
			series: [
			       
			         {
			             name: '信息资源数量',
			             type: 'bar',
			             stack: '总量',
			             barWidth : '50%',
			             label: {
			                 normal: {
			                     show: false
			                 }
			             },
			             data:datas
			         }
			     ]
		};
		midChart1.setOption(e);
	},
	
	
	
	loadIndustryDesity : function() {
		var a = {
			title : {
				text : "五大基础库资源部门贡献度",
				textStyle : {
					fontSize : 15,
					color : "#FFF",
					fontWeight : "normal",
					fontFamily : "Microsoft YaHei"
				}
			},
			tooltip : {
		        trigger: 'axis'
		    },
		    toolbox : {
				right : 16,
				top : 16,
				feature : {
					saveAsImage : {
						name : '五大基础库资源部门贡献度',
						icon : 'M15,0 L10,0 L10,3 C10,3.6 9.6,4 9,4 L4,4 C3.4,4 3,3.6 3,3 L3,0 L1,0 C0.4,0 0,0.4 0,1 L0,15 C0,15.6 0.4,16 1,16 L15,16 C15.6,16 16,15.6 16,15 L16,1 L16,1 C16,0.44771525 15.5522847,3.42636147e-16 15,4.4408921e-16 Z M13,14 L3,14 L3,11 C3,10.4 3.4,10 4,10 L12,10 C12.6,10 13,10.4 13,11 L13,14 Z M7,0 L9,0 L9,3 L7,3 L7,0 Z',
						backgroundColor : '#03162B',
						title : '保存为图'
					}
				}
			},
			animationDuration : 5000,
			//focusNodeAdjacency: true,
			grid : {
				left : "5%",
				right : "5%",
				bottom : "15%",
				top : "20%",
				containLabel : !0,
				show : !0,
				borderColor : "#031d34"
			},
			legend: {
				orient : 'horizontal',
				x : 'right',
				y : 'top',
				itemGap : 5,
//				selected : {	//控制默认选中状态
//					'总贡献量' : false
//				},
				//['总贡献量','人口库','法人库','宏观经济库','空间地理库']
				data : [
					{
						name : '总贡献量',
						textStyle : {
							color : '#FF673F'
						}
					},{
						name : '法人库',
						textStyle : {
							color : '#F5A700'
						}
					},{
						name : '人口库',
						textStyle : {
							color : '#FFBE71'
						}
					},{
						name : '宏观经济库',
						textStyle : {
							color : '#21F35F'
						}
					},{
						name : '信用征信库',
						textStyle : {
							color : '#70E41A'
						}
					}]
		    },
		    dataZoom: [{
		    	type : 'slider',
				xAxisIndex : 0,
				filterMode : 'filter',
				start : 5,
				end : 45,
				borderColor:'rgba(158,183,212,0.5)',
				backgroundColor : '#031019',
				dataBackground : {
					lineStyle : {
						color : '#9EB7D4',
						width : 1,
						opacity : 0.8
					},
					areaStyle : {
						color : '#9EB7D4',
						opacity : 0.3
					}
				},
				handleIcon : 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
				handleSize : '100%',
				handleStyle : {
					color : '#fff',
					shadowBlur : 3,
					shadowColor : 'rgba(0, 0, 0, 0.1)',
					shadowOffsetX : 2,
					shadowOffsetY : 2,
					opacity : 0.8
				},
				
				realtime : true,
				height : 20,
				bottom : '2%',
		    }],
			yAxis : [ {
				type : "value",
//				name : "信息资源数量",
				nameGap : 12,				
				axisLabel : {
					formatter : "{value}",
					textStyle : {
						fontSize : 13,
						color : "#c2d6ef"
					}
				},
				splitLine : {
					show : true,
					lineStyle : {
						color : "#c2d6ef",
						width : 1,
						opacity : .2
					}
				},
				axisLine : {
					lineStyle : {
						color : "#c2d6ef",
						width : 1.5,
						opacity : .8
					}
				},
				axisTick : {
					show : false
				},
//				splitArea : {
//					show : !0,
//					areaStyle : {
//						color : [ "rgba(0,0,0,0.3)" ]
//					}
//				}
			}],
			xAxis : {
//				name : "委办局",
				type : "category",
				boundaryGap : !1,
				splitLine : {
					show : false
				},
				axisLine : {
					lineStyle : {
						color : "#c2d6ef",
						width : 1.5,
						opacity : .8
					}
				},
				axisTick : {
					show : false
				},
				axisLabel : {
					textStyle : {
						color : "#c2d6ef"
					},
					formatter: function(a){
					    return commonClass._jName(a); 
					}
				},
				data : dataz.mid2.mid2_name
			},
			series : [
					{
						name : "总贡献量",
						type : "line",
						smooth : true,
						showSymbol : false,
						lineStyle : {
							normal : {
								width : 3,
								color : "#FF673F"
							}
						},
						itemStyle: {
							normal: {
								color : '#FF673F',
								areaStyle: {
									opacity : 0.4,
									type: 'default'
								}
							}
						},
						data : dataz.mid2.mid2_total
					},
					{
						name : "人口库",
						type : "line",
						smooth : true,
						showSymbol : false,
						lineStyle : {
							normal : {
								width : 3,
								color : "#FFBE71"
							}
						},
						itemStyle: {
							normal: {
								color : '#FFBE71',
								areaStyle: {
									opacity : 0.4,
									type: 'default'
								}
							}
						},
						data : dataz.mid2.mid2_data1
					},
					{
						name : "法人库",
						type : "line",
						smooth : true,
						showSymbol : false,
						lineStyle : {
							normal : {
								width : 3,
								color : "#F5A700"
							}
						},
						itemStyle: {
							normal: {
								color : '#F5A700',
								areaStyle: {
									opacity : 0.4,
									type: 'default'
								}
							}
						},
						data : dataz.mid2.mid2_data2
					} ,	
					{
						name : "宏观经济库",
						type : "line",
						smooth : true,
						showSymbol : false,
						lineStyle : {
							normal : {
								width : 3,
								color : "#21F35F"
							}
						},
						itemStyle: {
							normal: {
								color : '#21F35F',
								areaStyle: {
									opacity : 0.4,
									type: 'default'
								}
							}
						},
						data : dataz.mid2.mid2_data3
					} ,
					{
						name : "信用征信库",
						type : "line",
						smooth : true,
						showSymbol : false,
						lineStyle : {
							normal : {
								width : 3,
								color : "#70E41A"
							}
						},
						itemStyle: {
							normal: {
								color : '#70E41A',
								areaStyle: {
									opacity : 0.4,
									type: 'default'
								}
							}
						},
						data : dataz.mid2.mid2_data4
					} ]
		};
		midChart2 = echarts.init(document.getElementById("IndustryDesIncreEx"));
		midChart2.setOption(a);
		return midChart2
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
					animationDuration : 5000,
					title : {
						text : "\u884c\u4e1a\u4f01\u4e1a\u5e73\u5747\u5b58\u6d3b\u5e74\u9650",
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
									+ "\x3cbr\x3e\u4f01\u4e1a\u6570(\u5bb6):"
									+ c[0]
									+ "\x3cbr\x3e\u5b58\u6d3b\u5e74\u9650(\u5e74):"
									+ c[1]
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
									name : "\u79d1\u5b66\u7814\u7a76\u3001\u6280\u672f\u670d\u52a1\u548c\u5730\u8d28\u52d8\u67e5\u4e1a",
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
									name : "\u5236\u9020\u4e1a",
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
									name : "\u6279\u53d1\u548c\u96f6\u552e\u4e1a",
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
									name : "\u79df\u8d41\u548c\u5546\u52a1\u670d\u52a1\u4e1a",
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
									name : "\u519c\u3001\u6797\u3001\u7267\u3001\u6e14\u4e1a",
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
									name : "\u4ea4\u901a\u8fd0\u8f93\u3001\u4ed3\u50a8\u53ca\u90ae\u653f\u4e1a",
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
									name : "\u4fe1\u606f\u4f20\u8f93\u3001\u8ba1\u7b97\u673a\u670d\u52a1\u548c\u8f6f\u4ef6\u4e1a",
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
									name : "\u623f\u5730\u4ea7\u4e1a",
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
									name : "\u5c45\u6c11\u670d\u52a1\u548c\u5176\u4ed6\u670d\u52a1\u4e1a",
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
									name : "\u91d1\u878d\u4e1a",
									value : [ 2122, 9.8 ],
									textStyle : {
										normal : {
											color : "#087ba5"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "\u6587\u5316\u3001\u4f53\u80b2\u548c\u5a31\u4e50\u4e1a",
									value : [ 1488, 3.7 ],
									textStyle : {
										normal : {
											color : "#02ef50"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "\u4f4f\u5bbf\u548c\u9910\u996e\u4e1a",
									value : [ 1387, 6.9 ],
									textStyle : {
										normal : {
											color : "#338f13"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "\u6559\u80b2",
									value : [ 521, 2.4 ],
									textStyle : {
										normal : {
											color : "#338f13"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "\u7535\u529b\u3001\u7164\u6c14\u53ca\u6c34\u7684\u751f\u4ea7\u548c\u4f9b\u5e94\u4e1a",
									value : [ 503, 5.2 ],
									textStyle : {
										normal : {
											color : "#669abd"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "\u6c34\u5229\u3001\u73af\u5883\u548c\u516c\u5171\u8bbe\u65bd\u7ba1\u8d74\u76d1",
									value : [ 471, 5.8 ],
									textStyle : {
										normal : {
											color : "#d09d34"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "\u91c7\u77ff\u4e1a",
									value : [ 280, 10.6 ],
									textStyle : {
										normal : {
											color : "#0879a3"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "\u536b\u751f\u3001\u793e\u4f1a\u4fdd\u969c\u548c\u793e\u4f1a\u798f\u5229\u4e1a",
									value : [ 203, 4.2 ],
									textStyle : {
										normal : {
											color : "#9a5a12"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								},
								{
									name : "\u516c\u5171\u7ba1\u7406\u548c\u793e\u4f1a\u7ec4\u7ec7",
									value : [ 4, 12.8 ],
									textStyle : {
										normal : {
											color : "#c9d019"
										},
										emphasis : {
											fontWeight : "bolder"
										}
									}
								} ]
					} ],
					animationEasing : "Linear"
				});
		return a
	}
};