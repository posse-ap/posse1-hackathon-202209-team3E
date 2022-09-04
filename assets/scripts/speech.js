// 'use strict';
// {
//   $(function(){
//     $(".more").on("click", function() {
//       $(this).toggleClass("on-click");
//       $(".speech-contents-hide").slideToggle(1000);
//     });
//   }); 
// }
'use strict';{
  $(function () {
    $('.button').prevAll().hide();
    $('.button').click(function () {
      if ($(this).prevAll().is(':hidden')) {
        $(this).prevAll().slideDown();
        $(this).text('--閉じる--').addClass('close');
      } else {
        $(this).prevAll().slideUp();
        $(this).text('--もっと見る--').removeClass('close');
      }
    });
  });
}