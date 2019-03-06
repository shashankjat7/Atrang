//$(".col-md-4").html("hey");
var currentDate=new Date();

//var secs=currentDate.getSeconds();
 showTime();

function showTime(){
	setTimeout(function(){
		var currentDate=new Date();
    	$(".date-days").text(6-currentDate.getDate());
    	$(".date-hrs").text(23-currentDate.getHours());
    	$(".date-mins").text(60-currentDate.getMinutes());
    	$(".date-secs").text(60-currentDate.getSeconds());
    	showTime();
    			
	}, 1000);
}


