(function () {
  var scrollTop = 0,
    previousScrollTop = 0,
    logoBreakpoint = 0,
    projectsBreakpoint = 0;

  $(document).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', '.tada', function () {
    $(this).removeClass('tada');
  });

  function setBreakpoints() {
    if (!$('.hero-main-content').hasClass('fixed')) {
      logoBreakpoint = $('.hero-main-content').offset().top + $('.hero-main-content').height();
    }
    projectsBreakpoint = $('.projects-section-wrapper').offset().top;
  }

  function fixDivs() {
    if (scrollTop > logoBreakpoint) {
      $('.hero-main-content').addClass('fixed');
      $('.hero-main-content img').addClass('clickable').addClass('to-top');
      $('.hero-main-content img').addClass('tada');
    } else {
      $('.hero-main-content').removeClass('fixed');
      $('.hero-main-content img').removeClass('clickable').removeClass('to-top');
      $('.hero-main-content img').addClass('tada');
    }
    if (scrollTop > projectsBreakpoint) {
      $('.projects-section-wrapper').addClass('fixed');
    } else {
      $('.projects-section-wrapper').removeClass('fixed');
    }
  }

  function onScroll() {
    previousScrollTop = scrollTop;
    scrollTop = $(window).scrollTop();
    fixDivs();
  }

  setBreakpoints()
  onScroll();
  $(window).scroll(onScroll);
  $(window).resize(setBreakpoints);

  $('#typed-phrases span').typed({
    strings: [
      'hear from you ^400',
      'meet you ^400',
      'work with you ^400',
      'design with you ^400',
      'develop with you ^400',
      'help you ^400'
    ],
    loop: true,
    typeSpeed: 80
  });
})();