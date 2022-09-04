'use strict';
{
  $(function(){
    $(".more").on("click", function() {
      $(this).toggleClass("on-click");
      $(".speech-contents-hide").slideToggle(1000);
    });
  }); 
}