$(document).ready(function(){
  $("#popup").show();
  $("#content").hide();

  $("#playbtn").click(function(){
    $("#popup").hide();
    $("#content").show();
  });
});