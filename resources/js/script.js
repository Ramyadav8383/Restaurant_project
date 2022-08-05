$(document).ready(function () {
    /* for sticky navigation*/
$('.js--section-features').waypoint(function(direction) {
    if( direction =="down") {
        $('nav').addClass('sticky');
        
    }
    else {
        $('nav').removeClass('sticky');
        
    }
});
/* scroll on  button*/
    $('.js--scroll-to-plan').click(function () {
       $('html,body').animate({scrollTop: $('.js--section-plan').offset().top},1000);
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });
    
    $('a[href*="#"]').on('click', function (e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    1000,
    'linear'
  )
});
    /*animation on scroll*/
    
    
});