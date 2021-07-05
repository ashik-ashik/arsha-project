$(document).ready(function(){

  $(window).scroll(function() {
    
    let ofset = $(document).scrollTop();
    if(ofset > 200){
      $('#header').addClass('nav-bg');
    }else{
      $('#header').removeClass('nav-bg');
    }

  });



  // filtering
  // init Isotope
    var $grid = $('.row').isotope({
      // options
    });
    // filter items on button click
    $('.filter-btn').on('click', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });




  // veno box init
  $('.playVideo').venobox();

  // aos initialize
  AOS.init();
});


