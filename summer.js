
$('img').mouseover(function(){
    var newSrc = $(this).attr("src").replace("giphysum.gif", "sushine.jpg");
    $(this).attr("src", newSrc);
  });
  $('img').mouseout(function(){
    var newSrc = $(this).attr("src").replace("sushine.jpg", "giphysum.gif");
    $(this).attr("src", newSrc);
  });




$(document).ready(setup)
