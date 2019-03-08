//$(".col-md-4").html("hey");
var currentDate=new Date();

//var secs=currentDate.getSeconds();
 showTime();

function showTime(){
	setTimeout(function(){
		var currentDate=new Date();
    	$(".date-days").text(35-currentDate.getDate());
    	$(".date-hrs").text(23-currentDate.getHours());
    	$(".date-mins").text(60-currentDate.getMinutes());
    	$(".date-secs").text(60-currentDate.getSeconds());
    	showTime();
    			
	}, 1000);
}
$(function(){
  $(".animeq").tooltip({
  	title:"Take the anime quiz to test your knowledge about the japanese art and win prizes along the way",
  	placement:'top',
  	animation: true,
  	delay: 100
  });
   $(".how").tooltip({
  	title:"Tell us what you think about the ending of a movie or a book and about how you feel it should've ended. The best one wins the prize",
  	placement:'top',
  	animation: true,
  	delay: 100
  });
   $(".writerblog").tooltip({
  	title:"Put your writing skills on the line and write about a topic in your own words...",
  	placement:'top',
  	animation: true,
  	delay: 100
  });
   $(".putonashow").tooltip({
  	title:"offline event.... put on a show.... you know what we mean",
  	placement:'top',
  	animation: true,
  	delay: 100
  });
   $(".charclick").tooltip({
  	title:"Take a quiz and pick out the correct character from the given images....",
  	placement:'top',
  	animation: true,
  	delay: 100
  });
});


