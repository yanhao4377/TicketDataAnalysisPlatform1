<%--
  Created by IntelliJ IDEA.
  User: 25074
  Date: 2020/9/6
  Time: 14:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>数据可视化demo</title>
    <link href="styles/common.css" rel="stylesheet">
    <link href="styles/bootstrap.min.css" rel="stylesheet">
    <link href="styles/bootstrap-table.css" rel="stylesheet">
    <link href="styles/pagination.css" rel="stylesheet">
    <script src="scripts/Plugin/jquery-3.3.1.min.js"></script>
    <script src="scripts/Plugin/echarts.min.js"></script>
    <script src="scripts/Plugin/jquery.pagination.min.js"></script>
    <script src="scripts/common.js"></script>
    <script src="scripts/chronic.js"></script>
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
<!--内容部分-->
<div class="con left" style="width: 49%;margin-left: 1%;margin-bottom: 25px;">
    <div class="div_any_child" style="width: 98%">
        <div class="div_any_title">各公司今日总航班数对比</div>
        <p id="histogramChart1" class="p_chart"></p>
    </div>
</div>
<div class="con right" style="width: 49%;margin-left: 1%;margin-bottom: 25px;">
    <div class="div_any_child" style="width: 98%">
        <div class="div_any_title">各公司今日航班平均准点率对比</div>
        <p id="histogramChart2" class="p_chart"></p>
    </div>
</div>
<div class="con left" style="width:100%;">
    <div class="div_any">
        <div class="left div_any01" style="width:100%;">
            <div class="div_any_child" style="width:100%;position:relative;height: 420px;">
                <div class="div_any_title">航空公司数据展示</div>
                <div  style="width: 20%;height: 8%">
                    <input id="airline" placeholder="请输入要查询的航空公司" style="margin-top: 2%;margin-left: 2%">
                    <button type="button" onclick="searchCompany()">查询</button>
                </div>
                <div class="con left" style="width: 49%;height: 20%;margin-left: 2%;top: 8%;">
                    <div style="display: inline-block;width:33%;text-align:center;">
                        <div style="color:#fff;font-size: 18px;line-height: 32px;">航班机次</div>
                        <p id="airlineTime"style="color:#87cefa;font-size: 30px;line-height: 42px;"></p>
                    </div><div style="display: inline-block;width:33%;text-align:center;">
                    <div  style="color:#fff;font-size: 18px;line-height: 32px;">平均准点率(%)</div>
                    <p id="pRatio" style="color:red;font-size: 30px;line-height: 42px;"></p>
                </div><div style="display: inline-block;width:33%;text-align:center;">
                    <div style="color:#fff;font-size: 18px;line-height: 32px;">市场占有率(%)</div>
                    <p id="mRatio" style="color:#ff7f50;font-size: 30px;line-height: 42px;"></p>
                </div>
                </div>
                <div class="con right" style="width: 47%;height: 80%;margin-right: 2%">
                    <div class="table_p" style="height: 100%;overflow:scroll;margin-top: 10px;">
                        <caption style="color: white" align="top">公司所负责航线数据</caption>
                        <table id="route">
                            <thead><tr>
                                <th>航线</th>
                                <th>机次</th>
                                <th>平均准点率</th>
                                <th>平均价格</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div class="con left" style="width: 49%;height: 60%;margin-left: 2%">
                    <p id="pieChart1" class="p_chart"></p>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
</body>
</html>

