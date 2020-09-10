function flightSearch() {
    var flightNo = $("#flightNo")
    var now = new Date()
    var date = DateToString(now)
    $.ajax({
        url: "flight/flightSearch",
        data: {date:date,flightNo:flightNo},
        dataType: 'json',
        type:"post",
        success: function (list,status) {
            console.log(list);
            init()
        },
        error:function () {
            alert("error");
        }
    })
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