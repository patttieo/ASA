
$(document).ready( function() {
  console.log('hello?');

  function openMenu() {
    $('.m-menu-default').hide();
    $('.m-menu-open-trigger').addClass("menu-open");
    $('.m-menu-open-trigger').show();
    $('.menu').addClass('menu--open');
  }
  function closeMenu() {
    console.log('cool?');
    $('.m-menu-default').show();
    $('.m-menu-open-trigger').removeClass("menu-open");
    $('.m-menu-open-trigger').hide();
    $('.menu').removeClass('menu--open');
  }
  $('.m-menu-open-trigger').on('click', function() {
    closeMenu();
  });  
  $('.m-menu-default').on('click', function() {
    openMenu();
  });

  $('.nav-link').on('click', function() {
    setTimeout(function() {
      closeMenu();
    },100);
    
  });

  $('.menu-trigger').on('click', function() {
    $('body,html').toggleClass('m-active');
    $('.main-container').toggleClass('m-open');
  }); 
  // $('.main-container').on('click', function() {
  //   if ( $(this).hasClass('m-open') ) {
  //     console.log('cool');
  //     $(this).removeClass('.m-open');
  //     $('body,html').removeClass('m-active');
  //   }

  // }); 
});


