$(document).ready(function(){

  $(window).scroll(function() {
    
    let ofset = $(document).scrollTop();
    if(ofset > 200){
      $('#navigation').addClass('nav-bg');
    }else{
      $('#navigation').removeClass('nav-bg');
    }
    console.log(ofset)
  });


  // aos initialize
  AOS.init();
});