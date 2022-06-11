var win_w=$(window).width();

$('.pro .item').click(function(){
  $(this).addClass("active")
  $('.pro').find('.item').not($(this)).removeClass('active')
});