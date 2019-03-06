//$(".col-md-4").html("hey");
var currentDate=new Date();

//var secs=currentDate.getSeconds();
 showTime();

function showTime(){
	setTimeout(function(){
		var currentDate=new Date();
    	$(".td").text(5-currentDate.getDate());
    	$(".th").text(23-currentDate.getHours());
    	$(".tm").text(60-currentDate.getMinutes());
    	$(".ts").text(60-currentDate.getSeconds());
    	showTime();
    			
	}, 1000);
}


