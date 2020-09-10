<%--
  Created by IntelliJ IDEA.
  User: 25074
  Date: 2020/9/6
  Time: 14:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>数据可视化demo</title>
    <link href="styles/common.css" rel="stylesheet">
    <script src="scripts/Plugin/jquery-3.3.1.min.js"></script>
    <script src="scripts/Plugin/echarts.min.js"></script>
    <script src="scripts/common.js"></script>
    <script src="scripts/trend.js"></script>
</head>
<body onload="initSearch()">
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

<!--内容部分-->
<div class="con left" style="width:50%;">
    <!--统计分析图-->

    <div class="left div_any01" style="width:48%;">
        <div class="div_any_child" style="height: 420px;">
            <div class="div_any_title">今日热门航线排行</div>
            <p id="histogramChart3" class="p_chart" style="height: 400px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;" _echarts_instance_="ec_1599478606232">


        </div>
    </div>
    <div class="left div_any01" style="width:48%;">
        <div class="div_any_child" style="height: 420px;">
            <div class="div_any_title">今日热门城市排行</div>
            <p id="histogramChart2" class="p_chart" style="height: 400px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;" _echarts_instance_="ec_1599478606233"></p>

        </div>
    </div>
</div>

<div class="con right" style="width:50%;">
    <div class="left div_any01" style="width:48%;">
        <div class="div_any_child" style="width:98%;position:relative;height: 420px;">
            <div class="div_any_title">今日城市进入机次显示</div>
            <div id="histogramChart1" style="width: 100%; display: inline-block; height: 400px; -webkit-tap-highlight-color: transparent; user-select: none;" _echarts_instance_="ec_1599478606235"></div>
        </div>
    </div>
    <div class="left div_any01" style="width:48%;">
        <div class="div_any_child" style="width:98%;position:relative;height: 420px;">
            <div class="div_any_title">今日城市出行机次显示</div>
            <div id="histogramChart4" style="width: 100%; display: inline-block; height: 400px; -webkit-tap-highlight-color: transparent; user-select: none;" _echarts_instance_="ec_1599478606235"></div>
        </div>
    </div>
</div>

<div class="con left">
    <form>
        <input id="cityInput" type="text" placeholder="请输入要查找的城市" style="width: 400px ;height: 50px">

        </input>
        <button type="button" onclick="citySearch()" style="width:50px;height:50px">查询</button>

    </form>
</div>

<div class="con left" style="width:100%;">
    <div class="div_any">
        <div class="left div_any01" style="width:100%;">
            <div class="div_any_child" style="width:100%;position:relative;height: 420px;">

                <div class="div_any_title">城市航班数据分析</div>
                <div id="pieChart1" style="width: 24%; display: inline-block; height: 66%; margin-top: 70px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;" _echarts_instance_="ec_1599478606236"></div>
                <div id="lineChart1" style="width: 24%; height: 66%; display: inline-block; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;" _echarts_instance_="ec_1599478606234"></div>
                <div id="pieChart2" style="width: 24%; display: inline-block; height: 66%; margin-top: 70px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;" _echarts_instance_="ec_1599478606236"></div>
                <div id="pieChart3" style="width: 24%; display: inline-block; height: 66%; margin-top: 70px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;" _echarts_instance_="ec_1599478606236"></div>
            </div>
        </div>
    </div>
</div>




</body>

</html>
