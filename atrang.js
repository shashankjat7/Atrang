var currentDate=new Date();
 showTime();
var flag=0;

//checks at the start for a mobile version

if(flag==0&&($(window).width()<600)){
      $("#homelogo").width(150);
      $("#homelogo").height(150);
      $(".logo").css("width","75px");
      $(".logo").css("height","75px");
      $(".navbar").css("height","35px");
      $(".title").css("font-size","20px");
      $(".info").css("font-size","15px");
      $(".infoi").css("margin-left","5px");
      $(".headh2").css("font-size","25px");
      $(".date").css("font-size","25px");
      $(".dhms").css("font-size","25px");
      flag=1;
    }

function showTime(){
	setTimeout(function(){
   //mobile adjustments
    if(flag==0&&($(window).width()<600)){
      $("#homelogo").width(150);
      $("#homelogo").height(150);
      $(".logo").css("width","75px");
      $(".logo").css("height","75px");
      $(".navbar").css("height","35px");
      $(".title").css("font-size","20px");
      $(".info").css("font-size","15px");
      $(".infoi").css("margin-left","5px");
      $(".headh2").css("font-size","25px");
      $(".date").css("font-size","25px");
      $(".dhms").css("font-size","25px");
      flag=1;
    }
    //desktop adjustments
    if(flag==1&&($(window).width()>600)){
      $("#homelogo").width(250);
      $("#homelogo").height(250);
       $(".logo").css("width","125px");
      $(".logo").css("height","125px");
      $(".navbar").css("height","70px");
      $(".title").css("font-size","30px");
      $(".info").css("font-size","25px");
      $(".infoi").css("margin-left","30px");
      $(".headh2").css("font-size","30px");
      $(".date").css("font-size","30px");
      $(".dhms").css("font-size","30px");
      flag=0;
    }
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

//scroll on the click of navbar elements

$("#aboutnav").click(function() {
    $('html,body').animate({
        scrollTop: $(".row2").offset().top-70},
        'slow');
});
$("#eventsnav").click(function() {
    $('html,body').animate({
        scrollTop: $(".events").offset().top-70},
        'slow');
});
$("#speakersnav").click(function() {
    $('html,body').animate({
        scrollTop: $(".carousel").offset().top-70},
        'slow');
});
$("#contactnav").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact-row").offset().top-70},
        'slow');
});


