$(document).ready(function () {
    // do jQuery




    const $quote = $(".test-quotes").hide();
    const $insta = $(".test-instanews").hide();
    const $inhabitent = $(".test-inhabitent").hide();
    const $pong = $(".test-pong").hide();


    // BACKGROUND TAGS





    $(".quote-tag").mouseenter(
        function () {
            $quote.fadeIn(450);
        }
    );

    $(".quote-tag").mouseleave(function () {
        $quote.fadeOut(250);
    });


    // PONG TAG

    $(".pong-tag").mouseenter(
        function () {
            $pong.fadeIn(450);
        }
    );

    $(".pong-tag").mouseleave(function () {
        $pong.fadeOut(250);
    });

    // INHABITENT 

    $(".inhabitent-tag").mouseenter(
        function () {
            $inhabitent.fadeIn(450);
        }
    );

    $(".inhabitent-tag").mouseleave(function () {
        $inhabitent.fadeOut(250);
    });


    // INSTA NEWS


    $(".insta-tag").mouseenter(
        function () {
            $insta.fadeIn(450);
        }
    );

    $(".insta-tag").mouseleave(function () {
        $insta.fadeOut(250);
    });

    $(".work-text-button").hover(function () {
        $(this).toggleClass('.forum_hover')
    });


});
