'use strict';{
  $(function () {
    $('.button').prevAll().hide();
    $('.button').click(function () {
      $('.ribbon15').css("display","none");

      if ($(this).prevAll().is(':hidden')) {
        $(this).prevAll().slideDown();
        $(this).text('--閉じる--').addClass('close');
      } else {
        $(this).prevAll().slideUp();
        $(this).text('--もっと見る--').removeClass('close');
      }
    });
  });

  let $setTime;
  $('#record-modalButton').on('click',function(){
    $('#loading').css("display","block");
    $setTime = setTimeout(function(){
        $('#loading').css("display","none");
        $('#access-record').css("display","block");
    },3000);
  });

  $('.js-closeModal').on('click',function(){
    clearTimeout($setTime);
    $('#loading').css("display","none");
    $('#access-record').css("display","none");
  });
  
  const $container = $('.overlay')
  const $button = $('.js-openModal')
  const $closeButton = $('.js-closeModal')

  $button.click((e) => {
    $container.addClass('openModal')
  })

  $closeButton.click(() => {
    $container.removeClass('openModal')
  })

}