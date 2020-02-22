



$(document).ready(function () {

    const ScrollReveal = $('scrollreveal');

    // do jQuery


    // ScrollReveal().reveal('.scrolljava');


    const $quote = $(".test-quotes").hide();
    const $insta = $(".test-instanews").hide();
    const $inhabitent = $(".test-inhabitent").hide();
    const $pong = $(".test-pong").hide();

    const $icon = $("#icon2020");


    // BACKGROUND TAGS



    $(".quote-tag").mouseenter(
        function () {
            $quote.fadeIn(450);
            $(this).css("background", "black")

        }
    );

    $(".quote-tag").mouseleave(function () {
        $quote.fadeOut(250);
        $(this).removeAttr('style');

    });


    // PONG TAG

    $(".pong-tag").mouseenter(
        function () {
            $pong.fadeIn(450);
            $(this).css("background", "black")

        }
    );

    $(".pong-tag").mouseleave(function () {
        $pong.fadeOut(250);
        $(this).removeAttr('style');

    });

    // INHABITENT 

    $(".inhabitent-tag").mouseenter(
        function () {
            $inhabitent.fadeIn(450);
            $(this).css("background", "black")


        }
    );

    $(".inhabitent-tag").mouseleave(function () {
        $inhabitent.fadeOut(250);
        $(this).removeAttr('style');

    });


    // INSTA NEWS


    $(".insta-tag").mouseenter(
        function () {
            $insta.fadeIn(450);
            $(this).css("background", "black")


        }
    );

    $(".insta-tag").mouseleave(function () {
        $insta.fadeOut(250);
        $(this).removeAttr('style');

    });
    //background-color, none

    $(".work-display-button").mouseenter(function () {
        $($icon).toggleClass('flip');
        $(this).css('background-color', 'none')
    });

    $(".work-display-button").mouseleave(function () {
        $($icon).removeClass('flip');
        $(this).removeAttr('style')

    });

    $(".work-display-button").mouseenter(function () {
        $(this).css('border', 'none');

    });

    $(".work-display-button").mouseleave(function () {
        $(this).css('border', '3px solid white');
    });





    $(".open-source").scroll(function () {
        $(".open-source").toggleClass('.zoomOut');
    });

    $(".language-skill-wrap").scroll(function () {
        $(this).toggleClass("ufo");
    });


    $(".circles").click(function () {
        $("#About").css('background', 'black');
    });

    $(".circles").click(function () {
        $(this).toggleClass('color-hover');
        $("#About").css('background', 'black');


    });

    $(".circles").click(function () {
        $(this).toggleClass('color-btn');
    });
    /////////////////////////////////////////////////


    ////// STICKY NAV BAR CHANGES

    const num = 700;
    const num1 = 1450;

    $(window).bind('scroll', function () {


        if ($(window).scrollTop() > num) {
            $('.menu').addClass('sticky');
            $('.mask').addClass('sticky-color')
            $('.menu-list').addClass('side-list')


        } else {
            $('.menu').removeClass('sticky');
            $('.mask').removeClass('sticky-color')
            $('.menu-list').removeClass('side-list')


        } if ($(window).scrollTop() > num1) {
            $('.mask').addClass('sticky-color-white')

        } else {
            $('.mask').removeClass('sticky-color-white')

        }
    });



});




