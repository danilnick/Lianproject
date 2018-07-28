$(document).ready(function () {
  var $projectsGrid = $('.projects');
  $projectsGrid.isotope({
    itemSelector: '.project-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.gridSizer'
    }
  });
  $('.projectFilters ul li a').click(function (e) {
    e.preventDefault();
    var filterType = $(this).data('filter');
    if(filterType === 'all'){
      $projectsGrid.isotope({ filter: '*'});
      return false;
    }
    $projectsGrid.isotope({filter:'.' + filterType})
  });
  var $smLogo = $('.fab');
  var $scM = $('.socialMedias');
  $smLogo.mouseenter(function () {
    $scM.css('padding', '18px', 0)
      });
  $smLogo.mouseleave(function () {
    $scM.css('padding', '25px', 0)
  });

  jQuery(function($) {
    $('.example').asRange();
  });



  $(".range-example-input").asRange({
    range: false,
    limit: false
  });

  $(".range-example-5").asRange({
    step: 1,
    range: false,
    min: 0,
    max: 100,
    start: 85
  });



  // $('.slider').bxSlider({
  //   auto: true
  // });
});
