$(document).ready(function(){

    // Toggle menu
    $('.hamburger').click(function(){
        $('.nav').slideToggle(400, function(){
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



});