<%--
  Created by IntelliJ IDEA.
  User: 25074
  Date: 2020/9/6
  Time: 14:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>航线模块</title>
    <link href="styles/common.css" rel="stylesheet">
    <script src="scripts/Plugin/jquery-3.3.1.min.js"></script>
    <script src="scripts/Plugin/echarts.min.js"></script>
    <script src="scripts/Plugin/bmap.min.js"></script>
    <script src="scripts/common.js"></script>
    <script src="scripts/quota.js"></script>
</head>
<body>
<!--顶部-->
<header class="header left">
    <div class="left nav">
        <ul>
            <li style="width: 110px"><i class="nav_4"></i><a href="flight.jsp">航班模块</a> </li>
            <li><i class="nav_2"></i><a href="quota.jsp">航线模块</a> </li>
            <li><i class="nav_3"></i><a href="trend.jsp">城市模块</a> </li>
            <li><i class="nav_4"></i><a href="chronic1.jsp">航空公司模块</a> </li>
        </ul>
    </div>
    <div class="header_center left" style="position:relative">
        <h2><strong>机票分析综合数据平台</strong></h2>
        <p class="color_font"><small>Comprehensive data platform for air ticket analysis</small></p>
    </div>
    <div class="right nav text_right">
        <ul>

        </ul>
    </div>

</header>
<!--查询框-->
<div >
    <form>
        <font style="color: yellow">始发地:</font><input type="text" id="start"><font style="color: yellow">  目的地:</font><input type="text" id="end">
        <br>
        <button type="button" onclick="searchRoute()">查询</button>

    </form>
</div>
<!--内容部分-->
<div class="con left" style="width: 98%">
    <!--统计分析图-->
    <div class="div_any" style="width: 100%">
        <div class="left div_any01" style="width: 100%">
            <div class="div_any_child" style="width: 100%">
                <div class="div_any_title">今日不同时间段最低价格波动</div>
                <p id="lineChart1" class="p_chart"></p>
            </div>

            <div class="div_any_child" style="width: 100%">
                <div class="div_any_title">该航线各公司业务占比</div>
                <p id="pieChart1" class="p_chart"></p>
            </div>

            <div class="div_any_child" style="width: 100%">
                <div class="div_any_title">该航线各公司准点率</div>
                <p id="histogramChart3" class="p_chart"></p>
            </div>
        </div>
    </div>


</div>
</body>
</html>
