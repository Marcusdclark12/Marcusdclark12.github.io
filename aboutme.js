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

$(document).ready(setup)
