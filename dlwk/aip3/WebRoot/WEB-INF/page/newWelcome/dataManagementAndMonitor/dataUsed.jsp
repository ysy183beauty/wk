<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../../common/import-tags.jspf"%>
<link rel="stylesheet" href="${ctx }/page/welcome/dataManagementAndMonitor/css/metadata_management.css"/>
    
<mdp:newHeader title="数据应用视角" curItem="management"/>
<section style="margin-top:98px;color: #000;">
	<iframe width="100%" style="height:calc(100% - 98px)" scrolling="yes" frameborder="0" id="iframe" onload="iframeLoad();"
			src="${ctx}/mdp/dms/dataResultsVeiw/index.html"></iframe>
</section>
<script>
	function iframeLoad(){
		document.getElementById("iframe").contentWindow.document.body.style.margin = "20px 0 20px 20px";
		document.getElementById("iframe").contentWindow.document.body.style.backgroundColor = "#f1f8ff";
		document.getElementById("iframe").contentWindow.document.getElementById("data_year").style.marginTop = "0";
	}
</script>
<style>
	.foot{
		display:none;
	}
</style>
<mdp:mdpFooter />
