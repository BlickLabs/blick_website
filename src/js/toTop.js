(function () {
  $('.to-top').click(function (e) {
    if (typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    if ($(this).hasClass('clickable')) {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
    }
  });
})();