(function () {
  $(document).on('click.toTop', '.to-top', function (e) {
    if (typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
})();