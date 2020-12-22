<%@ page language="java" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<style>
	.main_box ul{
		padding: 0;
	}
</style>
<div class="main_box m0_15"> 	
	<ul class="p0_20 col-lg-6 col-md-6">
			<li class="conlist_li p0_20">
				<i class="conlist_dot"></i>
				申请的资源目录：<span>外国专家信息</span>
			</li>			
			<li class="conlist_li">
				<i class="conlist_dot"></i>
				授权码：<span>MA6R-6WNR-GV5K-T2LY6</span>
			</li>
	</ul>
	<ul class="p0_20 col-lg-6 col-md-6">
			<li class="conlist_li">
				<i class="conlist_dot"></i>
				申请人：<span>申请人名字  申请人部门</span>
			</li>
	</ul>
	<div class="clearfix box inline_any m20_0" style="width:100%;">
		<ul>
			<li class="filter_sort_li">
				<a href="javascript:void(0);" class="filter_sort_link">
					<i class="icon-plus"></i> 创建服务
				</a>
			</li>
		</ul>
		<div class="l pl20 clearfix" style="line-height:40px;">
			<div class="inline_any">
				服务名称
				<input type="text" placeholder="服务名称"
					class="nav-search-input search_sm_input mt10 ml5 mr20" style="width:160px;">
			</div>				
			<input id="dict-search-btn" type="button"  value="搜索" class="search_sm_submit search-btn" style="cursor: pointer;line-height: 24px;">			
		</div>
	</div>
	<table id="service-list" width="100%" border="0" cellspacing="0" cellpadding="0" class="tabl mb10">
			<thead>
				<tr>
					<th>服务名称</th>					
					<th>挂接的资源目录</th>
					<th>协议类型</th>
					<th>授权类型</th>
					<th>发布时间</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>				
				<tr>
					<td colspan="6" style="color: red; text-align: center;">暂无服务</td>
				</tr>				
			</tbody>
	</table>
</div>
<div class="modal-footer">
	<button type="button" class="btn btn-info btn-xs" data-dismiss="modal">关闭</button>
</div>