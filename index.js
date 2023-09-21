$(function() {
    $(window).on("scroll", function() {
       if($(window).scrollTop() > 280) {
           //background on scroll
           $("#navbar").addClass("scroll");
       } else {
           //background at top
          $("#navbar").removeClass("scroll");
       }
     });
   });