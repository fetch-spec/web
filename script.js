$(document).ready(function() {
    $('.hamburger-icon').click(function() {
        $('.nav-links').slideToggle();
    });
});
$(window).resize(function() {
    if ($(window).width() > 768) {
        $('.nav-links').show();
    }
});
var previousWidth = $(window).width();

$(window).on('resize', function() {
  var currentWidth = $(window).width();

  if (previousWidth < 769 && currentWidth >= 769) {
    location.reload();
  }

  previousWidth = currentWidth;
});
