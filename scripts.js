$(document).ready(function(){

    // Toggle menu
    $('.hamburger').click(function(){
        $('nav ul').slideToggle(400, function(){
            $(this).toggleClass('expand').css('display', '');
        });
    });

    // slider
    let sliderImages = document.querySelectorAll('.slide'),
            arrowLeft = document.querySelector('#arrow-left'),
            arrowRight = document.querySelector('#arrow-right'),
            current = 0;

    // Clear all images
    function reset(){
        for(let i=0; i < sliderImages.length; i++) {
            sliderImages[i].style.display = 'none';
        }
    }

    //  Init slider
    function startSlide() {
        reset();
        sliderImages[0].style.display = 'block';
    }

    // Show prev
    function slideLeft(){
        reset();
        sliderImages[current - 1].style.display = 'block';
        current--;
    }

    // Show next
    function slideRight(){
        reset();
        sliderImages[current + 1].style.display = 'block';
        current++;
    }

    // Left arrow click
    arrowLeft.addEventListener('click', function(){
        if(current === 0){
            current = sliderImages.length;
        }
        slideLeft();
    });

    // Rightt arrow click
    arrowRight.addEventListener('click', function(){
        if(current === sliderImages.length - 1){
            current = -1;
        }
        slideRight();
    });

    startSlide();

    

    
    // show content on scroll
    $(window).scroll(function(){
        $('.hide').each(function(){
            var bottom_of_object = $(this).position().top 
            + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop()
            + $(window).height();

            // If the obj is completely visible, fade in
            if(bottom_of_window > bottom_of_object) {
                $(this).animate({'opacity' : '1',}, 1000);
            }
        });
    });



    // Change color of children on hover on parent element
         
    $('.boxContent').hover(function(){
        $(this).children().css('fill', 'white');
        $(this).find('span').css('borderTop', '3px solid white');
        $(this).find('span').css('left', '40%');
    }, function(){
        $(this).children().css('fill', 'black');
        $(this).find('span').css('borderTop', '3px solid black');
        $(this).find('span').css('left', '0');
    });

    // Smooth scrolling
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });


});