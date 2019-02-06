//-----toggle Navigation menu

$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 500 ) {     
      $('nav ul').removeAttr('style');
     }
  });//end resize
});//end ready

//---------------------------------------------------------------

// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }
//---------------------------------------------------------------


$(function() {

	// Custom JS

});

//----------------------------------

//     //----slide 

// var slideIndex = 1;
// showSlides(slideIndex);

//     // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

//     // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }



// //---
//-----------------------own-carousel  автоматическое переключение на mobile через каждые 5 сек

//  var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("slide");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}
//   x[myIndex-1].style.display = "block";
//   setTimeout(carousel, 5000);
// }

//-------search nav 

$('#toggleSearch').on('click', function(e) {
  e.preventDefault();
  $('.search').addClass('search-in');
  $('.nav').addClass('nav-offset');
});

$('#closeSearch').on('click', function(e) {
  e.preventDefault();
  $('.search').removeClass('search-in');
  $('.nav').removeClass('nav-offset'); 
});


//-------

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.carousel').carousel();
  });
      

//---------- filter portfolio


 (function($) {

  'use strict';

  var $filters = $('.filter [data-filter]'),
    $boxes = $('.filter-boxes [data-item]');

  $filters.on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    
    $filters.removeClass('active');
    $this.addClass('active');

    var $filterItem = $this.attr('data-filter');

    if ($filterItem == 'all') {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $boxes.addClass('is-animated').fadeIn();
        });
    } else {
      $boxes.removeClass('is-animated')
        .fadeOut().promise().done(function() {
          $boxes.filter('[data-item = "' + $filterItem + '"]')
            .addClass('is-animated').fadeIn();
        });
    }
  });

})(jQuery);

//button "Load more" in filter

var rowOne = document.querySelector('.filter-row-one');
var rowTwo = document.querySelector('.filter-row-two');
var moreLessButton = document.querySelector('.button')
var rowArr = ['rowOne'];

document.querySelector('.button').addEventListener('click', function(){
  
  if (rowArr.length <= 1) {
  rowArr.push('rowTwo');
  rowTwo.classList.add('row-is-visible');
  moreLessButton.innerHTML = 'Show Less';
  } else {
    rowArr.pop();
    rowTwo.classList.remove('row-is-visible');
    moreLessButton.innerHTML = 'Load more';
  }
});

                       // MEDIA 

// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

//------------------SLIDER SLICK



$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  prevArrow:"<span class='fa fa-angle-left'></span>",
  nextArrow:"<span class='fa fa-angle-right'></span>",
  dots: true,
  fade: true,
  mobileFirst: true,

});






