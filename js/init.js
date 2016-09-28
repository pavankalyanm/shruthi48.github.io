(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
   

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
      $('.carousel').carousel();
      $('.carousel').carousel({dist:0});
        window.setInterval(function(){$('.carousel').carousel('next')},1000);
        $('.fixed-action-btn').openFAB();
        $('.fixed-action-btn').closeFAB();
     

    });
        