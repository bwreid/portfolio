$(function(){

  setupHeader(); // On ready, resize header
  smoothScrolling(); 

  $( window ).resize( function() { 
    setupHeader();
  } ); // On resize

  $( window ).scroll( function() {
    fadeElements();
    iWokeUpLikeThis();
    growPortfolioBoxes();
  } ); // On scroll

  function setupHeader() {
    var $header = $('#header');
    var window_height = $(window).height();

    var padding = ( ( $(window).height() - $header.height() ) / 2 );
    $header.find( '.title' ).css( 'padding', padding + 'px 0' );
    $header.css( 'height', $header.height() );
    $header.find('h1').animate({opacity: 1}, 1000)
    $header.find('h3').delay(500).animate({opacity: 1}, 1000)
  }

  function fadeElements() {
    var $header = $('#header').find('.title');
    var $top = $('#top');
    var delta = ($(window).scrollTop() / 4)
    
    var opacity = 1 - ( delta / 100 );
    $header.css('opacity', opacity);
    $top.css('opacity', (-1 * opacity));
  }

  function iWokeUpLikeThis() {
    if( $(window).scrollTop() > ( $('#about').position()["top"] - 450 ) ) {
      $( 'img#selfie' ).addClass('roll');
    }
  }

  function growPortfolioBoxes() {
   if( $(window).scrollTop() > ( $('#portfolio').position()["top"] - 350 ) ) {
      $( '#portfolio' ).removeClass('faded');
      $('#portfolio').find('img').css('padding','0');
    } 
  }

  function smoothScrolling() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
  }
});
