
// /$('.open-icon').click(function(){
//     console.log('hi')
//     let Width =$('.nav').outerWidth();
// console.log(' navWidth')
// }
// let navItemWidth = $(".nav-item").innerWidth();
// $(".nav").animate({ left: `-${navItemWidth}` });
// let flag = true;
// $("#open,.nav-item i,.navs a").click(() => {
//   if (flag) {
//     $(".nav").animate({ left: 0 }, 1000);
//     flag = false;
//   } else {
//     $(".nav").animate({ left: `-${navItemWidth}` }, 1000);
//     flag = true;
//   }
// });
$(".navs a").click(function(){
  
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},2000);
    
  })
  window.onload = function() {
 
    countDownToTime("10 october 2025 9:56:00");
  }
  
  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);
  
    let now = new Date();
    now = (now.getTime()/1000);
  
    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
  
  
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)
  
  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }
  
// $('#sliderDown .toggle').click(function(){
//   $('.inner').not($(this).next()).slideUp(500);
//   $(this).next().slideToggle(500);
// })
 $(".inner").slideUp();
$(".toggle").click(function () {
  $(".inner").not($(this).next()).slideUp(1000);
  $(this).next().slideToggle(1000);
});

$(".open-icon").click(function(){
  $(".nav").animate({ width:'300px'},500)
 $("#home").animate({marginLeft :'350px'},500)
})

$(".close-icon").click(function(){
  $(".nav").animate({ width:'0px'},500)
 $("#home").animate({marginLeft :'0px'},500)
})

/*leftmenu*/

$(".openNav").click(function(){
  $("#leftMenu").animate({ width:'250px'},50)
 $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").click(function(){
  $("#leftMenu").animate({ width:'0px'},50)
 $("#home-content").animate({marginLeft :'0px'},50)
})



/*scrollmenu*/
$("#leftMenu a").click(function(){
  
  var sectionId= $(this).attr("href");
  
  var positionOfSection = $(sectionId).offset().top;
  
  $("html , body").animate({scrollTop:positionOfSection},1000);
  
})
// var maxLength = 100;
// $('textarea').keyup(function() {
// var length = $(this).val().length;
// var AmountLeft = maxLength-length;
// if(AmountLeft<=0)
//           {
//                $("#chars").text("your available character finished");
              
//           }
//       else{
      
//       $("#chars").text(AmountLeft);
//       }
// });
let navItemWidth = $(".nav-item").innerWidth();
$(".nav").animate({ left: `-${navItemWidth}` });
let flag = true;
$("#open,.nav-item i,.navs a").click(() => {
  if (flag) {
    $(".nav").animate({ left: 0 }, 1000);
    flag = false;
  } else {
    $(".nav").animate({ left: `-${navItemWidth}` }, 1000);
    flag = true;
  }
});
$("textarea").keyup(function () {
  let length = $(this).val().length;
  let remin = 100 - length;
  if (remin <= 0) {
    $("#remin").text("your available character finished");
  } else {
    $("#remin").text(remin);
  }
});