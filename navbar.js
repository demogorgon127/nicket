$(document).ready(function () {

  $(window).resize(function() {
    if ($(".dropdown").hasClass("active")) {  
      $('.dropdown').offset({
        left: $("#dropdownTrigger").offset().left
      })
    }
  })
  
  $(document).click(function(e) {
    if ($(".dropdown").hasClass("active")) {
      if (!$(".dropdown").is(e.target) && $(".dropdown").has(e.target).length === 0) {
        $(".dropdown").removeClass("active").addClass("closed");
      }
    }
    else {
      if ($("#dropdownTrigger").is(e.target)) {
        $(".dropdown").removeClass("closed").addClass("active");
      }
      $(window).resize();
    }
  })
  
});