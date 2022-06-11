// $("a").click(function(event){
//   event.preventDefault()
// })

$(".header2").addClass("nav-down")

var didScroll; 
var lastScrollTop = 0; 
var delta = 5; 
var navbarHeight = $('.header2').outerHeight(); 

$(window).scroll(function(event){ 
didScroll = true; 
}); 

setInterval(function() { 
if (didScroll) { 
hasScrolled(); didScroll = false; 
}
  }, 250); 

function hasScrolled() {
  var st = $(this).scrollTop();
  if(Math.abs(lastScrollTop - st) <= delta) 
return; 
  if (st > lastScrollTop && st > navbarHeight){
$('.header2').removeClass('nav-down').addClass('nav-up'); 
} else { 
if(st + $(window).height() < $(document).height()) {
  $('.header2').removeClass('nav-up').addClass('nav-down'); 
} 
} 
lastScrollTop = st; 
}



// function header_show(){
//   $(".header2").stop().animate({top:70}, 100)
// }
// function header_hide(){
//   $(".header2").stop().animate({top:0}, 100)
// }
// header_show()

// $(window).scroll(function(){
//   sc=$(window).scrollTop();
//   console.log(sc);
//   if(sc<10){
//     header_show()
//   }
// })

// $(window).on("mousewheel", function(event){
//   delta=event.originalEvent.wheelDelta;
//   moving=$(".header").is(":animated")
//   if(delta<0 && !moving){
//     header_hide()
//   }else if(delta>0 && !moving){
//     header_show()
//   };
// })
// $(".header1").mouseenter(function(){
//   header_show()
// })

$(".new .item").hover(function(){
  $(this).find(".hover").toggleClass("active")
})
$(".best .item").hover(function(){
  $(this).find(".hover").toggleClass("active")
});

$("#search").click(function(){
  $(".search").toggleClass("active")
})

$(".section1 .buy_group .box").click(function(){
  $(this).toggleClass("active")
})


// 슬라이더
new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".swiper2", {
  slidesPerView: 3,
  centeredSlides: false,
  spaceBetween: 40,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

var swiper = new Swiper(".swiper3", {
  grabCursor: true,
  effect: "creative",
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-100%", 0, 0],
    },
    next: {
      translate: ["15%", 0, 0],
      scale: "0.8",
    },
  },
});

var swiper = new Swiper(".swiper4", {
  slidesPerView: 3,
  centeredSlides: false,
  spaceBetween: 30,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

$(".select_group").children(".select").eq(0).addClass("active")
$(".select_group").children(".select").not($(".select_group").children(".select").eq(0)).removeClass("active")
$(".item").find(".men").show();
$(".item").find(".women, .children, .eyewear, .fragrance").hide();

$("#men").click(function(){
  $(".select_group").children(".select").eq(0).addClass("active")
  $(".select_group").children(".select").not($(".select_group").children(".select").eq(0)).removeClass("active")
  $(".item").find(".men").show();
  $(".item").find(".women, .children, .eyewear, .fragrance").hide();
});
$("#women").click(function(){
  $(".select_group").children(".select").eq(1).addClass("active")
  $(".select_group").children(".select").not($(".select_group").children(".select").eq(1)).removeClass("active")
  $(".item").find(".women").show();
  $(".item").find(".men, .children, .eyewear, .fragrance").hide();
});
$("#children").click(function(){
  $(".select_group").children(".select").eq(2).addClass("active")
  $(".select_group").children(".select").not($(".select_group").children(".select").eq(2)).removeClass("active")
  $(".item").find(".children").show();
  $(".item").find(".women, .men, .eyewear, .fragrance").hide();
});
$("#eyewear").click(function(){
  $(".select_group").children(".select").eq(3).addClass("active")
  $(".select_group").children(".select").not($(".select_group").children(".select").eq(3)).removeClass("active")
  $(".item").find(".eyewear").show();
  $(".item").find(".women, .children, .men, .fragrance").hide();
});
$("#fragrance").click(function(){
  $(".select_group").children(".select").eq(4).addClass("active")
  $(".select_group").children(".select").not($(".select_group").children(".select").eq(4)).removeClass("active")
  $(".item").find(".fragrance").show();
  $(".item").find(".women, .children, .eyewear, .men").hide();
});

$(".info_box").show();
$(".bold_line").addClass("active1");
$(".title").eq(0).addClass("active");

$("#info").click(function(){
  $(this).addClass("active")
  $(".title").not($(this)).removeClass("active")
  $(".title_group").find(".bold_line").addClass("active1")
  $(".title_group").find(".bold_line").removeClass("active2")
  $(".title_group").find(".bold_line").removeClass("active3")
  $(".title_group").find(".bold_line").removeClass("active4")
  $(".info").find(".info_box").show();
  $(".info").find(".size_box").hide();
  $(".info").find(".order_box").hide();
  $(".info").find(".refund_box").hide();
})
$("#size").click(function(){
  $(this).addClass("active")
  $(".title").not($(this)).removeClass("active")
  $(".title_group").find(".bold_line").addClass("active2")
  $(".title_group").find(".bold_line").removeClass("active1")
  $(".title_group").find(".bold_line").removeClass("active3")
  $(".title_group").find(".bold_line").removeClass("active4")
  $(".info").find(".info_box").hide();
  $(".info").find(".size_box").show();
  $(".info").find(".order_box").hide();
  $(".info").find(".refund_box").hide();
})
$("#order").click(function(){
  $(this).addClass("active")
  $(".title").not($(this)).removeClass("active")
  $(".title_group").find(".bold_line").addClass("active3")
  $(".title_group").find(".bold_line").removeClass("active1")
  $(".title_group").find(".bold_line").removeClass("active2")
  $(".title_group").find(".bold_line").removeClass("active4")
  $(".info").find(".info_box").hide();
  $(".info").find(".size_box").hide();
  $(".info").find(".order_box").show();
  $(".info").find(".refund_box").hide();
})
$("#refund").click(function(){
  $(this).addClass("active")
  $(".title").not($(this)).removeClass("active")
  $(".title_group").find(".bold_line").addClass("active4")
  $(".title_group").find(".bold_line").removeClass("active1")
  $(".title_group").find(".bold_line").removeClass("active2")
  $(".title_group").find(".bold_line").removeClass("active3")
  $(".info").find(".info_box").hide();
  $(".info").find(".size_box").hide();
  $(".info").find(".order_box").hide();
  $(".info").find(".refund_box").show();
})


$(".section1 .img_group .img img").eq(0).css({'filter':'brightness('+100+'%)'})
$(".section1 .main_img img").eq(0).show()
$(".section1 .main_img img").not($(".section1 .main_img img").eq(0)).hide()

$(".section1 .img_group .img img").click(function(){
  $(this).css({'filter':'brightness('+100+'%)'})
  $(".section1 .img_group .img img").not($(this)).css({'filter':'brightness('+60+'%)'})
})


$(".section1 .img_group .img").click(function(){
  inx=$(this).index()
  console.log(inx)
  $(".section1 .main_img img").eq(inx).show()
  $(".section1 .main_img img").not($(".section1 .main_img img").eq(inx)).hide()
})

var count=0
var charge=0
var l_charge=0

$('.last_charge').text("￦" + l_charge)
$('.up').click(function(){
  count++
  charge = count * 980000
  l_charge = charge
  $('.last_charge').text("￦" + l_charge)
})
$('.down').click(function(){
  count--
  charge = count * 980000
  l_charge = charge
  $('.last_charge').text("￦" + l_charge)
  if(count <= 0){
    l_charge = 0
    count = 0
    charge = 0
    $('.last_charge').text("￦" + 0)
  }
})

$('.count_box').find('.ea').each(function(){
  var count=0
  var charge=0
  l_charge = 0
  $(this).text(count)
  $(this).parent('.count_box').parent('.bottom').find('.count_charge').text("￦" + charge)

  $(this).parent('.count_box').find('.up').click(function(){
    count++
    charge = count * 980000
    $(this).parent('.count_box').find('.ea').text(count)
    $(this).parent('.count_box').parent('.bottom').find('.count_charge').text("￦" + charge)
  })

  $(this).parent('.count_box').find('.down').click(function(){
    count--
    charge = charge - 980000
    $(this).parent('.count_box').parent('.bottom').find('.count_charge').text("￦" + charge)
    if(count <= 0){
      $(this).parent('.count_box').find('.ea').text('0')
      $(this).parent('.count_box').parent('.bottom').find('.count_charge').text("￦" + 0)
      count = 0
      charge = 0
    }
  })
});



// $('.count_box').each(function(inx){
//   $('.ea').text(count)
//   $(this).find('.down').click(function(){
//     count--
//     $('.ea').text(count)
//   })
// })

// $('.count_box').find('.up').click(function(){
//   count ++
//   $(this).parent('.count_box').find('.ea').text(count)
// })