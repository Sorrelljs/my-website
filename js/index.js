



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
        $("#tr8-background").css('background', 'black');
    });

    $(".circles").click(function () {
        $(this).toggleClass('color-hover');
        $("#tr8-background").css('background', 'black');


    });

    $(".circles").click(function () {
        $(this).toggleClass('color-btn');
    });
    /////////////////////////////////////////////////




    // $(".circles").click(function () {
    //     $(this).removeClass('color-hover');
    // });

});




