'use strict'; 

{
  $(function() {
    $(window).on("scroll", function() {
      $(".link-list").each(function(i) {
        setTimeout(function() {
            $(".link-list").eq(i).addClass("fade-in-left");
        }, 100 * i);
      });
    });
  });

  $(function() {
    $(window).on("scroll", function() {
      $(".fade-l-1").each(function(i) {
        setTimeout(function() {
            $(".fade-l-1").eq(i).addClass("fade-in-left");
        }, 100 * i);
      });
    });
  });
  $(function() {
    $(window).on("scroll", function() {
      $(".fade-r-1").each(function(i) {
        setTimeout(function() {
            $(".fade-r-1").eq(i).addClass("fade-in-left");
        }, 100 * i);
      });
    });
  });
}