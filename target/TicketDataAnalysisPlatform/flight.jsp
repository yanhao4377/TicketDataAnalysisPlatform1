<%--
  Created by IntelliJ IDEA.
  User: yanha
  Date: 2020/9/8
  Time: 22:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <<meta charset="UTF-8">
    <title>航班模块</title>
    <link href="styles/common.css" rel="stylesheet">
    <script src="scripts/Plugin/jquery-3.3.1.min.js"></script>
    <script src="scripts/Plugin/echarts.min.js"></script>
    <script src="scripts/Plugin/bmap.min.js"></script>
    <script src="scripts/common.js"></script>
    <script>
        $(function(){
            var now = new Date()
            var date = DateToString(now)
            date = "2020-09-11"
            $.ajax({
                url: "flight/flightToday",
                data: {date:date},
                dataType: 'json',
                type:"post",
                success: function (list,status) {
                    console.log(list);
                    solveTable(list);
                },
                error:function () {
                    alert("error");
                }
            })

        })
        function solveTable(flights) {
            var $table=$("#flight")
            $("#flight  tr:not(:first)").html("");
            for(var f of flights){
                $table.append('<tr style="color: #f9fffc"><td>' + f["fromCity"] + '</td><td>' + f["toCity"] + '</td><td>' + f["flightNumber"] +'</td><td>'+f["ItinerarDate"]+'</td><td>'+f["airline"]+'</td><td>'+f["FromDateTime"]+'</td><td>'+f["ToDateTime"]+'</td><td>'+f["price"]+'</td><td>'+f["punctualityRate"].toFixed(2)+'</td></tr>')
            }
        }


        function flightSearch() {
            var flightNo = $("#flightNo").val()
            var now = new Date()

            var date = DateToString(now)
            date="2020-09-11"
            $.ajax({
                url: "flight/flightSearch",
                data: {date:date,flightNo:flightNo},
                dataType: 'json',
                type:"post",
                success: function (list,status) {
                    console.log(list);
                    setFlight(list);
                },
                error:function () {
                    alert("error");
                }
            })
        }

        function setFlight(flight) {
            $("#p1").html(flight["fromCity"])
            $("#p2").text(flight["toCity"])
            $("#p3").text(flight["flightNumber"])
            $("#p4").text(flight["ItinerarDate"])
            $("#p9").text(flight["airline"])
            $("#p5").text(flight["FromDateTime"].substring(5,16))
            $("#p6").text(flight["ToDateTime"].substring(5,16))
            $("#p7").text(flight["price"])
            $("#p8").text(flight["punctualityRate"].toFixed(2))
        }

        function DateToString(date) {
            var dateString = date.getFullYear().toString()
            if(date.getMonth()+1<10)
                dateString = dateString+"-0"+(date.getMonth()+1).toString()
            else{
                dateString = dateString+"-"+(date.getMonth()+1).toString()
            }
            if(date.getDate()<10)
                dateString = dateString+"-0"+date.getDate().toString()
            else {
                dateString = dateString+"-"+date.getDate().toString()
            }
            return dateString
        }
    </script>
</head>
<body>
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
<div class="con left" style="width:100%;">
    <div class="div_any">
        <div class="left div_any01" style="width:100%;">
            <div class="div_any_child" style="width:100%;position:relative;height: 200px;">
                <div class="div_any_title">航班数据查询</div>
                <div  style="width: 20%;height: 8%">
                    <input id="flightNo" placeholder="请输入要查询的航班" style="margin-top: 2%;margin-left: 2%">
                    <button type="button" onclick="flightSearch()">查询</button>
                </div>
                <div class="con left" style="width: 96%;height: 20%;margin-left: 2%;top: 8%;">
                    <div style="display: inline-block;width:10%;text-align:center;">
                        <div style="color:#fff;font-size: 18px;line-height: 32px;">出发地</div>
                        <p id="p1"style="color:#87cefa;font-size: 30px;line-height: 42px;"></p>
                    </div>
                    <div style="display: inline-block;width:10%;text-align:center;">
                        <div style="color:#fff;font-size: 18px;line-height: 32px;">目的地</div>
                        <p id="p2"style="color:#87cefa;font-size: 30px;line-height: 42px;"></p>
                    </div>
                    <div style="display: inline-block;width:10%;text-align:center;">
                        <div style="color:#fff;font-size: 18px;line-height: 32px;">航班号</div>
                        <p id="p3"style="color:#87cefa;font-size: 30px;line-height: 42px;"></p>
                    </div>
                    <div style="display: inline-block;width:10%;text-align:center;">
                        <div style="color:#fff;font-size: 18px;line-height: 32px;">日期</div>
                        <p id="p4"style="color:#87cefa;font-size: 20px;line-height: 42px;"></p>
                    </div>
                    <div style="display: inline-block;width:10%;text-align:center;">
                        <div style="color:#fff;font-size: 18px;line-height: 32px;">航空公司</div>
                        <p id="p9"style="color:#87cefa;font-size: 30px;line-height: 42px;"></p>
                    </div>
                    <div style="display: inline-block;width:10%;text-align:center;">
                        <div style="color:#fff;font-size: 18px;line-height: 32px;">起飞时间</div>
                        <p id="p5"style="color:red;font-size: 15px;line-height: 42px;"></p>
                    </div>
                    <div style="display: inline-block;width:10%;text-align:center;">
                    <div  style="color:#fff;font-size: 18px;line-height: 32px;">到达时间</div>
                    <p id="p6" style="color:red;font-size: 15px;line-height: 42px;"></p>
                </div>
                    <div style="display: inline-block;width:10%;text-align:center;">
                    <div style="color:#fff;font-size: 18px;line-height: 32px;">价格</div>
                    <p id="p7" style="color:#ff7f50;font-size: 30px;line-height: 42px;"></p>
                </div>
                    <div style="display: inline-block;width:10%;text-align:center;">
                        <div  style="color:#fff;font-size: 18px;line-height: 32px;">准点率</div>
                        <p id="p8" style="color:red;font-size: 30px;line-height: 42px;"></p>
                    </div>
                </div>
            </div>
            <div class="div_any_child" style="width: 100%">
                <div class="div_any_title">今日航班总览</div>
                <div class="table_p" style="height: 95%;overflow:scroll;margin-top: 20px;">
                    <table id="flight">
                        <thead><tr>
                            <th>出发地</th>
                            <th>目的地</th>
                            <th>航班号</th>
                            <th>日期</th>
                            <th>航空公司</th>
                            <th>起飞时间</th>
                            <th>到达时间</th>
                            <th>价格</th>
                            <th>准点率</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>
