'use strict';
{
  const Header = document.getElementById('js-header');
  const HeaderButton = document.getElementById('js-headerButton');

  HeaderButton.addEventListener('click', () => {
    Header.classList.toggle('is-open')
  })

  $(function() {
    $(window).on("scroll", function() {
      $(".link-list").each(function(i) {
        setTimeout(function() {
            $(".link-list").eq(i).addClass("fade-in-left");
        }, 100 * i);
      });
    });
  });
}
