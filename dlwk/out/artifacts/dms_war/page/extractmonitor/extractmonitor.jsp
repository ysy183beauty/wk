﻿<%@ page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8"/> 
<html>
	<%@include file="../common.jsp"%>
	<body>
		<input type="hidden" value="<%=request.getAttribute("mainStep").toString() %>" id="mainStep"/>
		<input type="hidden" value="<%=request.getAttribute("mainColParam").toString() %>" id="mainColParam"/>
		<input type="hidden" value="<%=request.getAttribute("getLogInfoUrl").toString() %>" id="getLogInfoUrl"/>
		<input type="hidden" value="<%=request.getAttribute("columnNameUrl").toString() %>" id="columnNameUrl"/>
		<input type="hidden" value="<%=request.getAttribute("tableDataUrl").toString() %>" id="tableDataUrl"/>
		<input type="hidden" value="<%=request.getAttribute("tipMsg").toString() %>" id="tipMsg"/>
		<div id='div_body' style="width: 100%; height: 100%;"></div>
	</body>
</html>