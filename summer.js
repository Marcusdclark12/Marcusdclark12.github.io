
$('img').mouseenter(function(){
    var newSrc = $(this).attr("src").replace("giphysum.gif", "famgiphy.gif");
    $(this).attr("src", newSrc);
  });
  $('img').mouseout(function(){
    var newSrc = $(this).attr("src").replace("famgiphy.gif", "giphysum.gif");
    $(this).attr("src", newSrc);
  });




$(document).ready(setup)
