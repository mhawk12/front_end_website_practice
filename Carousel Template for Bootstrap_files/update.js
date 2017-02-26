
// jquery fot index.html

$(document).ready(function (){
  $(".button1").click(function () {
    $(".details_CP").hide(1000);
  });



  $(".button2").click(function () {
    $(".details_CP").show(1000);
  });



  $(".button3").click(function () {
    $(".details_CP").toggle(1000);
  });



  $(".details_R_head").dblclick(function (){
    if($(".details_R_inner").is(":hidden"))
    {
    $(".details_R_inner").fadeIn(1000);
  }
  else {
    $(".details_R_inner").fadeOut(1000);
  }
  });


  $(".details_R_inner").dblclick(function() {
    $("#freakonomics_intro").fadeTo("slow", 0.4);
  });

  $("#reading_quote").dblclick(function() {
    $("blockquote").fadeToggle();
  });



    $(".sleep").mouseenter(function() {
      $(this).animate({height:'200px',width:'1140px'},2000);
      $(this).animate({fontSize:'20px'},'slow', function(){
      alert("Done!");
      });

      $(".sleep").mouseleave(function() {
        $(this).stop();
        });
   });



 $(document).keypress(function() {
  $(".sleep_facts").fadeOut(2000).fadeIn(2000).fadeTo(2000,0.5);
    $(this).stop();
});


$(document).keydown(function(e) {
  if(e.which === 40) {
    $(".sleep_facts").slideUp(2000).slideDown(2000).animate({height:'220px',width:'950px'},2000);
  }
});

 });


 // jquey for index.html ends here



//jquey for contact.html begins here

var obj = { count :5};
var obj1 = {temp : "id=" + "'" + "row" + obj.count +"" + "'"};
var obj2 = {tempd : "id=" + "'" + "" + "row" + obj.count +"" + "d" + "'"};


$(document).ready(function (){
  $(".add").click(function () {

    //alert($(#test).tempd);
   var rows = "<tr" + " " + obj1.temp + ">" + "<td>" + "<input type='text' placeholder='firstname'>" + "</td><td>"+ "<input type='text' placeholder='Lastname'>"+"</td><td>"+"<input type='email' placeholder='email'>"+"</td><td>"+"<input type='number' placeholder='phone number'>"
    +"</td><td>" +"<button" + " " + obj2.tempd +">" + "delete" +"</button>" + "</td></tr>";
    $("table tbody").append(rows);


    obj.count++;
    obj1.temp = "id=" + "'" + "row" + obj.count +"" + "'";
    obj2.tempd = "id=" + "'" + "" + "row" + obj.count +"" + "d" + "'";
  });


  $("button").click(function(){
    var id = "" +$(this).attr('id');
    var res = id.substring(0, 4);
    //alert(res);
    $('#'+res).remove();
    //$('#'+res).remove();
  });

  $(document).on('mouseenter','td', function(event) {
  			if(event.altKey) {
  				$(this).css({'background-color':'blue','color':'red'});
  				$(this).children().css({'background-color':'blue','color':'red'});
  			}
  	});
  	$(document).on('mouseleave', 'td', function(event) {
  			$(this).css({'background-color':'white', 'color':'black'});
  			$(this).children().css({'background-color':'white', 'color':'black'});
  	});

  
});
