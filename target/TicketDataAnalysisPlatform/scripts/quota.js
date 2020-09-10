var companyPie = new Map();
function solvePie(flights) {

    for(var flight of flights){
        if(!companyPie.has(flight["airline"]))
            companyPie.set(flight["airline"],1)
        else{
            companyPie.set(flight["airline"],companyPie.get(flight["airline"])+1)
        }
        console.log(flight["airline"])
    }
    var getdata = []
    for(var key of companyPie){
        getdata.push({value:key[1],name:key[0]})
    }
    a.series[0].data = getdata

}


var companyLine = new Map();
function solveLine(flights){
    for(var flight of flights){
        if(!companyLine.has(flight["airline"]))
            companyLine.set(flight["airline"],flight["punctualityRate"])
        else{
            companyLine.set(flight["airline"],companyLine.get(flight["airline"])+flight["punctualityRate"])
        }
        console.log(flight["punctualityRate"])
    }
    var companyData = []
    for(var key of companyLine){
        companyData.push(key[0].toString())
    }
    console.log(companyData)
    c.xAxis[0].data = companyData
    var companyRate = []
    for(var key of companyLine){

        companyRate.push(key[1]/(companyPie.get(key[0])))
    }
    c.series[0].data = companyRate
}



function solvePrice(flights) {
    var priceInDifTime = [0,0,0,0,0,0,0];

    for(var flight of flights){
        var s = flight["FromDateTime"];
        console.log(s)
        s = s.replace(/-/g,"/");
        var date = new Date(s);
        var hour  = date.getHours();
        console.log(hour)
        switch (true) {
            case hour<=7:
                if(priceInDifTime[0] > flight["price"]|| priceInDifTime[0] == 0){
                    priceInDifTime[0] = flight["price"];
                }

                break;
            case hour<=9:
                if(priceInDifTime[1] > flight["price"]|| priceInDifTime[1] == 0){
                    priceInDifTime[1] = flight["price"];
                }

                break;
            case hour<=11:
                if(priceInDifTime[2] > flight["price"]|| priceInDifTime[2] == 0){
                    priceInDifTime[2] = flight["price"];
                }

                break;
            case hour<=13:
                if(priceInDifTime[3] > flight["price"]|| priceInDifTime[3] == 0){
                    priceInDifTime[3] = flight["price"];
                }

                break;
            case hour<=16:
                if(priceInDifTime[4] > flight["price"]|| priceInDifTime[4] == 0){
                    priceInDifTime[4] = flight["price"];
                }

                break;
            case hour<=19:
                if(priceInDifTime[5] > flight["price"]|| priceInDifTime[5] == 0){
                    priceInDifTime[5] = flight["price"];
                }
                break;
            case hour<=23:
                if(priceInDifTime[6] > flight["price"]|| priceInDifTime[6] == 0){
                    priceInDifTime[6] = flight["price"];
                }
                break;
        }
        b.series[0].data = priceInDifTime;
    }


}

var a = {
    color:["#87cefa","#ff7f50","#05cd07","#da70d6","#05CD07","#0606DA"],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    calculable : true,
    series : [
        {
            name:'业务量',
            type:'pie',
            radius : [30, 110],
            center : ['50%', '50%'],
            roseType : 'area',
            x: '50%',
            max: 40,
            sort : 'ascending',
            data:[]
        }
    ]
}

var b = {
    color:["#87cefa","#ff7f50","#05cd07","#da70d6","#05CD07","#0606DA"],
    tooltip: {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}元"
    },
    legend: {
        data: ["东方航空", '四川航空', '中国国航', '南方航空',],
        y: 'bottom',
        x: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['0:00-8:00', '8:00-10:00','10:00-12:00', '12:00-14:00','14:00-17:00', '17:00-20:00','20:00-24:00'],
            axisLine: {
                lineStyle: {
                    color: '#87cefa'
                },
            },
            axisLabel: {
                interval: 0,
                rotate: 40,

                textStyle: {
                    color: '#fff',
                    fontSize: 13
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#87cefa'
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
                    return value + "元"
                },
            },
        }
    ],
    series: [
        {
            name: '不同时间段价格',
            type: 'line',
            smooth: true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [10, 12, 21, 54]
        }
    ]

}

var c = {
    color:["#87cefa","#ff7f50","#05cd07","#da70d6","#05CD07","#0606DA"],
    grid:{
        left: '5%',
        right: '5%',
        bottom: '5%',
        containLabel: true
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}%"
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : [],
            axisLine:{
                lineStyle:{
                    color: '#87cefa'
                },
            },
            axisLabel : {
                interval:0,
                rotate:40,

                textStyle: {
                    color: '#fff',
                    fontSize:13
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine:{
                lineStyle:{
                    color: '#87cefa'
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
                    return value + "%"
                },
            },
        }
    ],
    series : [
        {
            name:'准点率',
            type:'bar',
            barWidth:30,
            data:[60,80,70,50],
        },
    ]
}

function searchRoute(){
    companyPie.clear();
    companyLine.clear();
    var start=$("#start").val();
    var end=$("#end").val();
    url = "Route/searchRoute"
    $.ajax({
        url: "Route/searchRoute",
        data: {start:start, end:end},
        dataType: 'json',
        type:"post",
        success: function (list,status) {
            console.log(list);
            solvePie(list);
            solvePrice(list);


            solveLine(list);
            console.log('test')

            init()
        },
        error:function () {
            alert("error");
        }
    })

}
function init() {


    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];



    var pieChart1 = echarts.init(document.getElementById('pieChart1'));
    pieChart1.setOption(a)

    //价格波动
    var lineChart1 = echarts.init(document.getElementById('lineChart1'));
    lineChart1.setOption(b)

    //药占比
    var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
    histogramChart3.setOption(c);

}