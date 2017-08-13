
//This function animates the scrolling effect
$(document).ready(function(){   
    //var headerHeight = $('header').outerHeight();  
    $('.slide-section').click(function(e) {
        
        var linkHref = $(this).attr('href');
        console.log(linkHref);
        console.log( $("#menu").hasClass("topnav"));
        if ( $('#menu').is(':visible'))
        {
            if( $("#menu").hasClass("sticky"))
            {
                $('html, body').animate({
                scrollTop: $(linkHref).offset().top - 50
                }, 1000);
            }
            else
            {
                $('html, body').animate({
                scrollTop: $(linkHref).offset().top - 100
                }, 1000);    
            }
        }
        else
        {
            $('html, body').animate({
            scrollTop: $(linkHref).offset().top 
            }, 1000);   
        }
        e.preventDefault();
    })
})

// this function handles toggling the hamburger menu
// and also handles toggling the menu when clicked
$(function(){
  $('.navbar-toggle, nav').click(function(){
    $('.navbar-toggle').toggleClass('navbar-on');
    $('nav').fadeToggle();
    $('nav').removeClass('nav-hide');
  });
  $('.bar').click(function(){
      $('nav').removeClass('nav-hide');
  })
});

$(window).scroll(function(){
    var pos = $('#logo').height();
    if($(this).scrollTop()>pos)
    {
        $('.topnav').addClass("sticky");
    }
    else
    {
        $('.topnav').removeClass("sticky");    
    }
})

