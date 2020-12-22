Ext.BLANK_IMAGE_URL = getContextPath()+ 'resource/ext/resources/images/default/s.gif';
Ext.onReady(init);

function init()
{
	var xx = true;
	var grid = createGrid();
	setTip("我的审批记录");
	setPaging(grid);
	setMainPanel(document.body, grid);
}
function createGrid()
{
	var sm = new Ext.grid.CheckboxSelectionModel({
		singleSelect : true,
		listeners :
		{
			rowselect : function()
			{
				var grid=Ext.getCmp("doneListGrid");
				var record=this.getSelected();
				var toolbar = grid.getTopToolbar();
				toolbar.getComponent(0).enable();
				if(record.get("isAuth")==1)
				{
					toolbar.getComponent(1).enable();
				}
			},
			rowdeselect : function()
			{
				var grid=Ext.getCmp("doneListGrid");
				var toolbar = grid.getTopToolbar();
				toolbar.getComponent(0).disable();
				
			}
		}
	});
	var columns = [ sm, new Ext.grid.RowNumberer(),
	{
		dataIndex : 'id',
		hidden : true
	},
	{
		dataIndex : 'assetName',
		header : "资产名称",
		sortable : true,
		width : 120
	},
	{
		dataIndex : 'assetProviderName',
		header : "所有者",
		sortable : true,
		width : 100
	},
	{
		dataIndex : 'proposerName',
		header : "申请人",
		sortable : true,
		width : 80
	},
	{
		dataIndex : 'applyTime',
		header : "申请时间",
		sortable : true,
		renderer : function(value)
		{
		return formatDate(value, "");
		},
		width : 80
	},
	{
		dataIndex : 'status',
		header : "状态",
		sortable : true,
		width : 120
	}];
	var gridStore = new Ext.data.Store(
	{
		autoLoad :
		{
			params :
			{
				start : 0,
				limit : pageSize
			}
		},

		successProperty : 'success',
		listeners :
		{
			exception : function(dataProxy, type, action, options, response,
					arg)
			{
				var o = Ext.util.JSON.decode(response.responseText);
				if (!o.success)
				{
					Ext.Msg.alert('错误提示', "加载数据异常！异常信息：" + o.msg);
				}
			}
		},
		reader : new Ext.data.JsonReader(
		{
			totalProperty : "count",
			root : "list"
		}, Ext.data.Record.create([
		{
			name : 'id'
		},
		{
			name : 'assetName'
		},
		{
			name : 'assetProviderName'
		},
		{
			name : 'proposerName'
		},
		{
			name : 'applyTime'
		},
		{
			name : 'status'
		}])),
		proxy : new Ext.data.HttpProxy(
		{
			url : getHandlerRequestUrl() + "approvalHandler/getDoneList"
		})
	});
	return new Ext.grid.GridPanel(
	{
		autoScroll : true,
		width : '100%',
		tbar : createToolbar(),
		loadMask : true,
		buttonAlign : 'center',
		id : 'serviceGrid',
		monitorResize : true,
		store : gridStore,
		id:'doneListGrid',
		border : false, // 是否显示行的边框
		sm : sm,
		columns : columns,
		trackMouseOver : true,
		forceLayout : true,
		frame : true,
		columnLines : true,
		stripeRows : true,
		bbar : [],
		viewConfig :
		{
			forceFit : true
		}
	});
}
function createToolbar()
{
	var toolbar = new Ext.Toolbar();
	toolbar.addButton(new Ext.Button(
	{
		text : "详细信息",
		disabled : true,
		iconCls : 'icon_sms',
		handler:showDetailWin
	}));
	return toolbar;
}