

$(document).ready(function () {


    const ScrollReveal = $('scrollreveal');

    // do jQuery


    const $quote = $(".test-quotes").hide();
    const $insta = $(".test-instanews").hide();
    const $inhabitent = $(".test-inhabitent").hide();
    const $pong = $(".test-pong").hide();
    const $icon = $("#icon2020");


    $(function () {
        // Get page title
        let pageTitle = $("title").text();



        // Change page title on blur
        $(window).blur(function () {
            $("title").text("I am a tab");
        });

        // Change page title back on focus
        $(window).focus(function () {
            $("title").text(pageTitle);
        });
    });



//// POP UP CONSTRUCTION BOX 

    // setTimeout(function () {
    //     $(".website-construction-box").show();
    // }, 3500);

    // $(".construction-button").click(function () {
    //     $('.website-construction-box').fadeOut(800)

    // });


    // BACKGROUND TAGS






    // $(window).load(function(){


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



    ///// THIS IS THE BUTTON CLICK FUNCITONALITY ///



    $('#mobile').click(function () {

        if ($('.box-text').hasClass('show')) {
            $('.box-text').removeClass('show')
            $('#phone-box').addClass('show');

        }
        else {
            $('#phone-box').addClass('show')
        }
    })
    $('#laptop').click(function () {

        if ($('.box-text').hasClass('show')) {

            $('.box-text').removeClass('show')
            $('#laptop-box').addClass('show')

        }
        else {
            $('#laptop-box').addClass('show')
        }
    })

    $('#astronaut').click(function () {

        if ($('.box-text').hasClass('show')) {

            $('.box-text').removeClass('show')
            $('#astro-box').addClass('show')

        }
        else {
            $('#astro-box').addClass('show')
        }
    })

    $('#glasses').click(function () {

        if ($('.box-text').hasClass('show')) {

            $('.box-text').removeClass('show')
            $('#glasses-box').addClass('show')

        }
        else {
            $('#glasses-box').addClass('show')
        }
    })


});

