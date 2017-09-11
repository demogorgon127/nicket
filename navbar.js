$(document).ready(function () {

  $(window).resize(function() {
    var dropdownLeft = $('#dropdownTrigger').offset().left - ( $('.dropdown').width() - $('#dropdownTrigger').width() ) / 2;
    if ($('.dropdown').hasClass('active')) {  
      $('.dropdown').css({transform: 'translateX(' + dropdownLeft + 'px)'});
      //нашел лучше решение ^
      /*$('.dropdown').offset({
        left: dropdownLeft
      }) */
    }
  });

  var count = 0;  
  $('#dropdownTrigger, .dropdown').mouseenter(function() {
    count++;
    $('.dropdown').removeClass('closed').addClass('active');
    $(window).resize();
    $('#dropdownTrigger').click(function() {
      $('.dropdown').removeClass('active').addClass('closed');
    });
  });

  $('#dropdownTrigger, .dropdown').mouseleave(function() {
    count--;
    if (count == 0) {
      $('.dropdown').removeClass('active').addClass('closed');
    }
  });

  //для управления dropdown с помощью кликов
  /* $(document).hover(function(e) {
    if ($('.dropdown').hasClass('active')) {
      if (!$('.dropdown').is(e.target) && $('.dropdown').has(e.target).length === 0) && (!$('#dropdownTrigger').is(e.target) && $('#dropdownTrigger').has(e.target).length === 0) {
        $('.dropdown').removeClass('active').addClass('closed');
      }
    }
    else {
      if ($('#dropdownTrigger').is(e.target)) {
        $('.dropdown').removeClass('closed').addClass('active');
      }
      $(window).resize();
    }
  }) */
  
});