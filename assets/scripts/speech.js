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
  
  $('#speech1').click(function (){
    $('#speech1').css("display","none");
  });
  $('#speech2').click(function (){
    $('#speech2').css("display","none");
  });
  $('#speech3').click(function (){
    $('#speech3').css("display","none");
  });
  $('#speech4').click(function (){
    $('#speech4').css("display","none");
  });
  $('#speech5').click(function (){
    $('#speech5').css("display","none");
  });
  $('#speech6').click(function (){
    $('#speech6').css("display","none");
  });
  $('#speech7').click(function (){
    $('#speech7').css("display","none");
  });
  $('#speech8').click(function (){
    $('#speech8').css("display","none");
  });
  $('#speech9').click(function (){
    $('#speech9').css("display","none");
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

  function reset(){
    document.input.reset();
  }
}
