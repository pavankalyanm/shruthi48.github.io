(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
      $('.carousel').carousel();
      $('.carousel').carousel('time_constant',50);
      $('.carousel').carousel('indicators',true);

    });
        