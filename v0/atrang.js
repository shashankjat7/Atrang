//$(".col-md-4").html("hey");
var currentDate=new Date();

//var secs=currentDate.getSeconds();
 showTime();

function showTime(){
	setTimeout(function(){
		var currentDate=new Date();
		$(".day").text(4-currentDate.getDate());
    	$(".hours").text(23-currentDate.getHours());
    	$(".mins").text(60-currentDate.getMinutes());
    	$(".secs").text(60-currentDate.getSeconds());
    	showTime();
    			
	}, 1000);
}


