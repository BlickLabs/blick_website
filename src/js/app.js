(function () {
  var scrollTop = 0,
    previousScrollTop = 0,
    logoBreakpoint = 0,
    projectsBreakpoint = 0;

  function setBreakpoints() {
    if (!$('.hero-main-content').hasClass('fixed')) {
      logoBreakpoint = $('.hero-main-content').offset().top + $('.hero-main-content').height();
    }
    projectsBreakpoint = $('.projects-section-wrapper').offset().top;
  }

  function fixDivs() {
    if (scrollTop > logoBreakpoint) {
      $('.hero-main-content').addClass('fixed');
    } else {
      $('.hero-main-content').removeClass('fixed');
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
})();