var now = new Date();
var flights
$(function(){
  var date = DateToString(now)
  $.ajax({
    url: "airline/initSearch",
    data: {date:date},
    dataType: 'json',
    type:"post",
    success: function (list,status) {
      console.log(list);
      solveCompanyCharts(list)
      solveLine(list)
      flights = list;
      var flight = flights[0];
      console.log(typeof flight)
      init()
    },
    error:function () {
      alert("error");
    }
  })

})

var histo1 = {

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
      name:'航空公司',
      type:'bar',
      barWidth : 20,
      data:[2210,1085,926,669,634,452,412,312,156],
    },
  ]
}
var histo2 = {

  color:['#de8b71'],
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
      data : ['北京','上海','深圳','厦门','西安','南京','合肥','曲阜','宁夏'],
      axisLine:{
        lineStyle:{
          color: '#deb372'
        },
      },
      axisLabel : {
        interval:0,
        rotate:40,
        textStyle: {
          color: '#ffe59a'
        }
      }
    }
  ],
  yAxis : [
    {
      type : 'value',
      axisLine:{
        lineStyle:{
          color: '#debb87'
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
      name:'航空公司',
      type:'bar',
      barWidth : 20,
      data:[2210,1085,926,669,634,452,412,312,156],
    },
  ]
}
var labelFromatter = {
  normal : {
    label : {
      position : 'center',
      formatter : function (params){
        console.log(params)
        if(params.name == "其他公司"){
          return "其他公司"+":"+(params.percent + '%')
        }else{
          return params.name+":"+(params.percent + '%')
        }
      },
    },
    labelLine : {
      show : false
    }
  },
};
var pie1 ={
  title: {
    text: '市场占有率',
    textStyle:{
      fontSize:12,
      color:'#fff7ff'
    },
  },
  color: ['#87cefa','#FD6C88'],
  tooltip : {
    trigger: 'item',
    formatter: "{b}({c})<br/>{d}%"
  },

  series : [
    {
      type : 'pie',
      center : ['50%', '50%'],
      radius : [55, 95],
      x: '0%', // for funnel
      itemStyle : labelFromatter,
      data : [
        {name:'男性', value:158},
        {name:'女性', value:142},
      ]
    },
  ],
}

var companyPie = new Map();
function solveCompanyCharts(flights) {

  for(var flight of flights){
    if(!companyPie.has(flight["airline"]))
      companyPie.set(flight["airline"],1)
    else{
      companyPie.set(flight["airline"],companyPie.get(flight["airline"])+1)
    }
    console.log(flight["airline"])
  }
  var getdata = []
  var getcity = []
  for(var key of companyPie){
    getcity.push(key[0].toString())
    getdata.push(key[1])
  }
  histo1.xAxis[0].data = getcity
  histo1.series[0].data = getdata

}

var companyLine = new Map();
function solveLine(flights){
  companyLine
  for(var flight of flights){
    if(!companyLine.has(flight["airline"]))
      companyLine.set(flight["airline"],flight["punctualityRate"])
    else{
      companyLine.set(flight["airline"],companyLine.get(flight["airline"])+flight["punctualityRate"])
    }

  }
  var companyData = []
  for(var key of companyLine){
    companyData.push(key[0].toString())
  }
  histo2.xAxis[0].data = companyData
  var companyRate = []
  for(var key of companyLine){

    companyRate.push(key[1]/(companyPie.get(key[0])))
  }
  histo2.series[0].data = companyRate
}

var route = new Map()
function solveTable(company) {
  route.clear();
  for(var flight of flights){
    if(flight["airline"]!=company)
      continue
    var routeName = flight["fromCity"].toString()+"-"+flight["toCity"].toString()
    if(!route.has(routeName)){
      var routeData={num:1,pRate:flight["punctualityRate"],price:flight["price"]}
      route.set(routeName,routeData)
    }
    else{
      var routeData={num: route.get(routeName)["num"]+1,
                     pRate: (route.get(routeName)["pRate"]+flight["punctualityRate"]),
                     price: (route.get(routeName)["price"]+flight["price"])}
      route.set(routeName,routeData)
    }
  }
  var finalData = []
  for(var key of route){
    var a = {routeName: key[0].toString(),
             num: key[1]["num"],
             pRate: key[1]["pRate"]/key[1]["num"],
             price: key[1]["price"]/key[1]["num"]}
    finalData.push(a)
  }
  console.log(finalData)
  //插入表
  var $table=$("#route")
  $("#route  tr:not(:first)").html("");
  for(var f of finalData){
    $table.append('<tr style="color: #f9fffc"><td>' + f["routeName"] + '</td><td>' + f["num"] + '</td><td>' + f["pRate"].toFixed(2) +'</td><td>'+f["price"].toFixed(2)+'</td></tr>')
  }
}
function searchCompany() {
  var airline = []
  var company = $("#airline").val();
  var count = 0
  for(var flight of flights){
    if(flight["airline"].toString() == company){
      airline.push(flight)
    }
  }
  count = airline.length
  var obj = [
    {name:company, value:count},
    {name:'其他公司', value:flights.length-count},
  ]
  pie1.series[0].data=obj
  document.getElementById("airlineTime").innerText = count
  document.getElementById("pRatio").innerText = (companyLine.get(company)/count).toFixed(2)
  document.getElementById("mRatio").innerText = (count/flights.length*100).toFixed(2)
  init2()
  solveTable(company)

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
function init() {
  var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
  histogramChart1.setOption(histo1);
  var histogramChart2 = echarts.init(document.getElementById('histogramChart2'));
  histogramChart2.setOption(histo2);



}
function init2() {
  var pieChart2 = echarts.init(document.getElementById('pieChart1'));
  pieChart2.setOption(pie1)

}