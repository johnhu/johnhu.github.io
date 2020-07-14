    /*=========================================================================
     One Page Scroll with jQuery
     =========================================================================*/
    $('.vertical-menu li a[href^="#"]:not([href="#"])').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 800, 'easeInOutQuad');
        event.preventDefault();
    });

    /*=========================================================================
     Add (nav-link) class to main menu.
     =========================================================================*/
    $('.vertical-menu li a').addClass('nav-link');

    /*=========================================================================
     Bootstrap Scrollspy
     =========================================================================*/
    $("body").scrollspy({ target: ".scrollspy", offset: 50 });

    /*=========================================================================
     Background Image with Data Attribute
     =========================================================================*/
    var bg_img = document.getElementsByClassName('background');

    for (var i = 0; i < bg_img.length; i++) {
        var src = bg_img[i].getAttribute('data-image-src');
        bg_img[i].style.backgroundImage = "url('" + src + "')";
    }
    /*=========================================================================
            Scroll to Top
    =========================================================================*/
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 250) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    $('#return-to-top').on('click', function() { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 400);
    });

    /*=========================================================================
            Mobile menu toggle
    =========================================================================*/

function mobileToggle() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }