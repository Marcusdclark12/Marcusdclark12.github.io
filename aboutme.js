function usercomment() {
   var comment = $('#comment').val();

   $("#top_comment").text(  comment );
}
function handleKey(event)
{
  if (event.keyCode == 13)
  {
    usercomment();
  }
}
function setup() {
   $("#post_button").click(usercomment);
$('#comment').on('keypress',handleKey);
}


$('img').mouseover(function(){
    var newSrc = $(this).attr("src").replace("giphysum.gif", "sushine.jpg");
    $(this).attr("src", newSrc);
  });
  $('img').mouseout(function(){
    var newSrc = $(this).attr("src").replace("sushine.jpg", "giphysum.gif");
    $(this).attr("src", newSrc);
  });




$(document).ready(setup)
