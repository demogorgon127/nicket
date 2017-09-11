$(document).ready(function () {

  $(window).resize(function() {
    var dropdownLeft = $('#dropdownTrigger').offset().left - ( $('.dropdown').width() - $('#dropdownTrigger').width() ) / 2;
    if ($('.dropdown').hasClass('active')) {  
      $('.dropdown').css({transform: 'translateX(' + dropdownLeft + 'px)'})
      //нашел лучше решение ^
      /*$('.dropdown').offset({
        left: dropdownLeft
      }) */
    }
  })
  
  $(document).click(function(e) {
    if ($('.dropdown').hasClass('active')) {
      if (!$('.dropdown').is(e.target) && $('.dropdown').has(e.target).length === 0) {
        $('.dropdown').removeClass('active').addClass('closed');
      }
    }
    else {
      if ($('#dropdownTrigger').is(e.target)) {
        $('.dropdown').removeClass('closed').addClass('active');
      }
      $(window).resize();
    }
  })
  
});