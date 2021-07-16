/*
animation:
=======
syntax
=======
$(selector).animate({params},speed,callback);
*/

$(document).ready(function(){
$('button').on('click', function(){
  //animate code
    //$('div').animate({width:'50%',backgroundColor:'#0f0',},1000);
    //fade in and out

    // $('div').fadeOut(1000);
     $('div').fadeToggle(1000);
})

});