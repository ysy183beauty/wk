<%@ page language="java" contentType="text/html; charset=UTF-8"%>
<%@include file="../../../common/import-tags.jspf"%>
<%
    request.setCharacterEncoding("UTF-8") ;//或者指定的编码(GBK或其他)
%>
<script type="text/javascript">
</script>
<amp:ampHeader title="信息资源详情" />
<link rel="stylesheet" href="${ctx }/plugin/amp/page/views/total/css/searchDeatil.css" />
<%@include file="searchAsset-header.jsp"%>
<%@include file="searchAsset-content.jsp"%>
<amp:ampFooter />
<script src="${ctx}/plugin/amp/page/views/total/js/searchDeatil.js"></script>
