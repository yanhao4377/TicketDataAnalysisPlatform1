function initSearch() {

    var date = "2020-09-11";
    $.ajax({
        url: "City/initSearch",
        data: {date:date},
        dataType: 'json',
        type:"post",
        success: function (list,status) {
            console.log(list);
            solveInTime(list);
            solveRouteRank(list);
            init()
        },
        error:function () {
            alert("error");
        }
    })
}
var symptomName = last_year_month();
var a = {

    color:['#16DE17'],
    grid:{
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}航班数"
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['北京','上海','深圳','厦门','西安','南京','合肥','曲阜','宁夏'],
            axisLine:{
                lineStyle:{
                    color: '#16DE17'
                },
            },
            axisLabel : {
                interval:0,
                rotate:40,
                textStyle: {
                    color: '#fff'
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{
                lineStyle:{
                    color: '#16DE17'
                },
            },
            splitLine: {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                formatter: function (value) {
                    return value + ""
                },
            },
        }
    ],
    series : [
        {
            name:'城市',
            type:'bar',
            barWidth : 20,
            data:[2210,1085,926,669,634,452,412,312,156],
        },
    ]
}
var b = {

    color:['#5bc0de'],
    grid:{
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}航班数"
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['北京','上海','深圳','厦门','西安','南京','合肥','曲阜','宁夏'],
            axisLine:{
                lineStyle:{
                    color: '#5bc0de'
                },
            },
            axisLabel : {
                interval:0,
                rotate:40,
                textStyle: {
                    color: '#fff'
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{
                lineStyle:{
                    color: '#5bc0de'
                },
            },
            splitLine: {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                formatter: function (value) {
                    return value + ""
                },
            },
        }
    ],
    series : [
        {
            name:'城市',
            type:'bar',
            barWidth : 20,
            data:[2210,1085,926,669,634,452,412,312,156],
        },
    ]
}
var c ={

    color:['#FD6C88'],
    grid:{
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}航班"
    },
    calculable : true,
    yAxis : [
        {
            type : 'category',
            data : ['北京-上海','西安-北京','西安-大连','上海-深圳','上海-合肥','石家庄-呼和浩特','西安-天津','福州-珠海'],
            axisLine:{
                lineStyle:{
                    color: '#FD6C88'
                },
            },
            axisLabel : {
                textStyle: {
                    color: '#fff'
                }
            }
        }
    ],
    xAxis : [
        {
            type : 'value',
            axisLine:{
                lineStyle:{
                    color: '#FD6C88'
                },
            },
            splitLine: {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                formatter: function (value) {
                    return value + ""
                },
            },
        }
    ],
    series : [
        {
            name:'航线',
            type:'bar',
            barWidth : 20,
            data:[1750,1416,1136,819,704,413,251,175],
        },
    ]
}
var d = {

    color:['#fff8f3'],
    grid:{
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}航班"
    },
    calculable : true,
    yAxis : [
        {
            type : 'category',
            data : ['北京-上海','西安-北京','西安-大连','上海-深圳','上海-合肥','石家庄-呼和浩特','西安-天津','福州-珠海'],
            axisLine:{
                lineStyle:{
                    color: '#fff8f3'
                },
            },
            axisLabel : {
                textStyle: {
                    color: '#fff'
                }
            }
        }
    ],
    xAxis : [
        {
            type : 'value',
            axisLine:{
                lineStyle:{
                    color: '#fff8f3'
                },
            },
            splitLine: {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                formatter: function (value) {
                    return value + ""
                },
            },
        }
    ],
    series : [
        {
            name:'航线',
            type:'bar',
            barWidth : 20,
            data:[1750,1416,1136,819,704,413,251,175],
        },
    ]
}

var cityInLine = new Map();
var cityOutLine = new Map();
var cityIO = new Map();
function solveInTime(flights) {
    cityInLine.clear();
    cityOutLine.clear();
    cityIO.clear();
    for(var flight of flights){
        if(!cityInLine.has(flight["fromCity"]))
            cityInLine.set(flight["fromCity"],1)
        else{
            cityInLine.set(flight["fromCity"],cityInLine.get(flight["fromCity"])+1)
        }
        if(!cityOutLine.has(flight["toCity"]))
            cityOutLine.set(flight["toCity"],1)
        else{
            cityOutLine.set(flight["toCity"],cityOutLine.get(flight["toCity"])+1)
        }
        if(!cityIO.has(flight["fromCity"]))
            cityIO.set(flight["fromCity"],1)
        else{
            cityIO.set(flight["fromCity"],cityIO.get(flight["fromCity"])+1)
        }
        if(!cityIO.has(flight["toCity"]))
            cityIO.set(flight["toCity"],1)
        else{
            cityIO.set(flight["toCity"],cityIO.get(flight["toCity"])+1)
        }
        //将cityIO根据值排序

    }
    //进入图加载
    var InCity = []
    for(var key of cityInLine){
        InCity.push(key[0].toString())
    }
    console.log(InCity)
    a.xAxis[0].data = InCity;
    var InData = []
    for(var key of cityInLine){

        InData.push(key[1])
    }
    a.series[0].data = InData
    //出行图加载
    var OutCity = []
    for(var key of cityOutLine){
        OutCity.push(key[0].toString())
    }
    console.log(OutCity)
    b.xAxis[0].data = OutCity;
    var OutData = []
    for(var key of cityOutLine){

        OutData.push(key[1])
    }
    b.series[0].data = OutData
    //吞吐量排行图加载
    var InOutCity = []
    var InOutData = []
    for(var key of cityIO){
        InOutCity.push(key[0].toString())
        InOutData.push(key[1])
    }
    for (var i = 0, len = InOutData.length; i < len; i++) {
        for (var j = 0; j < len - i; j++) {
            var keyTemp, valTemp;
            if (InOutData[j] > InOutData[j + 1]) {
                valTemp = InOutData[j];
                InOutData[j] = InOutData[j + 1];
                InOutData[j+1] = valTemp;
                keyTemp = InOutCity[j];
                InOutCity[j] = InOutCity[j + 1];
                InOutCity[j+1] = keyTemp;
            }
        }
    }
    var hotCity = InOutCity.splice(-6)
    var hotData = InOutData.splice(-6)
    c.yAxis[0].data = hotCity
    c.series[0].data = hotData

}

var route = new Map();
function solveRouteRank(flights) {
    route.clear();
    for(var flight of flights){
        var routeName = flight["fromCity"].toString()+"-"+flight["toCity"].toString()
        if(!route.has(routeName))
            route.set(routeName,1)
        else{
            route.set(routeName,route.get(routeName)+1)
        }
    }
    var InOutCity = []
    var InOutData = []
    for(var key of route){
        InOutCity.push(key[0].toString())
        InOutData.push(key[1])
    }
    for (var i = 0, len = InOutData.length; i < len; i++) {
        for (var j = 0; j < len - i; j++) {
            var keyTemp, valTemp;
            if (InOutData[j] > InOutData[j + 1]) {
                valTemp = InOutData[j];
                InOutData[j] = InOutData[j + 1];
                InOutData[j+1] = valTemp;
                keyTemp = InOutCity[j];
                InOutCity[j] = InOutCity[j + 1];
                InOutCity[j+1] = keyTemp;
            }
        }
    }
    var hotRoute = InOutCity.splice(-8)
    var hotRouteData = InOutData.splice(-8)
    d.yAxis[0].data = hotRoute
    d.series[0].data = hotRouteData

}
function init(){
    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
    //主要传染病
    var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
    histogramChart1.setOption(a)


    var histogramChart4 = echarts.init(document.getElementById('histogramChart4'));
    histogramChart4.setOption(b)
    //主要症状
    var histogramChart2 = echarts.init(document.getElementById('histogramChart2'));
    histogramChart2.setOption(c)

    //传染病发病趋势


    //主要城市排行
    var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
    histogramChart3.setOption(d)

    //业务占比

}

var pie1={
    title: {
        text: '航空公司业务占比',
        textStyle:{
            fontSize:12,
            color:'#fff7ff'
        },
    },
    color:["#32cd32","#ff7f50","#87cefa","#FD6C88","#4b5cc4","#faff72"],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series : [
        {
            name:'业务占比',
            type:'pie',
            radius : ['50%', '70%'],
            center : ['50%', '50%'],

            data:[
                {value:10, name:'业务1'},
                {value:5, name:'业务2'},
                {value:15, name:'业务3'},
                {value:25, name:'业务4'},
                {value:125, name:'业务5'},
                {value:175, name:'业务6'},
            ]
        }
    ]
}
var pie2={
    title: {
        text: '来源城市分布',
        textStyle:{
            fontSize:12,
            color:'#fff7ff'
        },
    },
    color:["#32cd32","#ff7f50","#87cefa","#FD6C88","#4b5cc4","#faff72"],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series : [
        {
            name:'业务占比',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'radius',
            x: '50%',



            sort : 'ascending',
            data:[
                {value:10, name:'业务1'},
                {value:5, name:'业务2'},
                {value:15, name:'业务3'},
                {value:25, name:'业务4'},
                {value:125, name:'业务5'},
                {value:175, name:'业务6'},
            ]
        }
    ]
}
var pie3={
    title: {
        text: '去向城市分布',
        textStyle:{
            fontSize:12,
            color:'#fff7ff'
        },
    },
    color:["#32cd32","#ff7f50","#87cefa","#FD6C88","#4b5cc4","#faff72"],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series : [
        {
            name:'业务占比',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'radius',
            x: '50%',



            sort : 'ascending',
            data:[
                {value:10, name:'业务1'},
                {value:5, name:'业务2'},
                {value:15, name:'业务3'},
                {value:25, name:'业务4'},
                {value:125, name:'业务5'},
                {value:175, name:'业务6'},
            ]
        }
    ]
}

function citySearch(){
    var city=$("#cityInput").val()
    $.ajax({
        url: "City/citySearch",
        data: {city:city},
        dataType: 'json',
        type:"post",
        success: function (list,status) {
            console.log(list);
            solveCityCharts(list,city);

            init2()
        },
        error:function () {
            alert("error");
        }
    })
}

var toCity = new Map();
var fromCity = new Map();
var airline = new Map();
function solveCityCharts(flights,city) {
    toCity.clear();
    fromCity.clear();
    airline.clear();
    for(var flight of flights){
        if(flight["fromCity"].toString()==city){
            if(!toCity.has(flight["toCity"]))
                toCity.set(flight["toCity"],1)
            else{
                toCity.set(flight["toCity"],toCity.get(flight["toCity"])+1)
            }
        }
        else if(flight["toCity"].toString()==city){
            if(!fromCity.has(flight["fromCity"]))
                fromCity.set(flight["fromCity"],1)
            else{
                fromCity.set(flight["fromCity"],fromCity.get(flight["fromCity"])+1)
            }
        }
        if(!airline.has(flight["airline"]))
            airline.set(flight["airline"],1)
        else{
            airline.set(flight["airline"],airline.get(flight["airline"])+1)
        }
    }
    var toCityData = []
    for(var key of toCity){
        toCityData.push({value:key[1],name:key[0]})
    }
    pie3.series[0].data = toCityData
    var fromCityData = []
    for(var key of fromCity){
        fromCityData.push({value:key[1],name:key[0]})
    }
    pie2.series[0].data = fromCityData
    var airlineData = []
    for(var key of airline){
        airlineData.push({value:key[1],name:key[0]})
    }
    pie1.series[0].data = airlineData
}

function init2() {
    var pieChart1 = echarts.init(document.getElementById('pieChart1'));
    pieChart1.setOption(pie1)
    var lineChart1 = echarts.init(document.getElementById('lineChart1'));
    lineChart1.setOption({
        title: {
            text: '吞吐量趋势',
            textStyle:{
                fontSize:16,
                color:'#ff7f50'
            },
        },
        color:["#ff7f50"],
        grid:{
            left: '15%',
            right: '5%',
            bottom: '15%',

        },
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}机次"
        },

        calculable : true,
        yAxis: [
            {
                type: 'value',
                axisLine:{
                    lineStyle:{
                        color: '#ff7f50'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
            }
        ],
        xAxis: [
            {
                type: 'category',
                data : symptomName,
                boundaryGap : false,
                axisLine:{
                    lineStyle:{
                        color: '#ff7f50'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    // interval:0,
                    // rotate:40,
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
            }
        ],
        series : [
            {
                name:'吞吐量',
                type:'line',
                smooth:true,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data:[120, 132, 128, 134, 48, 9,12 ,7, 8, 238, 232, 212]
            },
        ]

    })
    var pieChart2 = echarts.init(document.getElementById('pieChart2'));
    pieChart2.setOption(pie2)

    var pieChart3 = echarts.init(document.getElementById('pieChart3'));
    pieChart3.setOption(pie3)

}
