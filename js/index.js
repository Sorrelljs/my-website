

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


    /////       ID'S using toggleClass ///////
    $("#glasses").click(function () {
        $('#glasses').siblings().prop('disabled', true);
        $('.box-text-glasses').toggleClass('show');
        // $(this).toggleClass('color-hover');
        $('#glasses').siblings().prop('disabled', false);
    });

    $("#laptop").click(function () {
        $('#laptop').siblings().prop('disabled', true);
        $('.box-text-laptop').toggleClass('show');
        $('#laptop').siblings().prop('disabled', false);
    });

    $("#astronaut").click(function () {
        $('#astronaut').siblings().prop('disabled', true);
        $('.box-text-astronaut').toggleClass('show');
        $('#astronaut').siblings().prop('disabled', false);
    });

    $("#mobile").click(function () {

        $('#mobile').siblings().prop('disabled', true);
        $('.box-text').toggleClass('show');
        $('#mobile').siblings().prop('disabled', false);
    });


    // $('.circles').click(function () {
    //     $('.circles').not(this).removeClass('active').html(function () {
    //         //   return $(this).html().replace('SELECTED', 'SELECT');
    //     });
    //     $(this).addClass('active').html(jQuery(this).html().replace('SELECT', 'SELECTED'));
    // });




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


