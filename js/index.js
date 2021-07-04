$(document).ready(function(){

  $(window).scroll(function() {
    
    let ofset = $(document).scrollTop();
    if(ofset > 200){
      $('#navigation').addClass('nav-bg');
    }else{
      $('#navigation').removeClass('nav-bg');
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


