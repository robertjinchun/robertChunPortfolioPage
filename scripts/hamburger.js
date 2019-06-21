$(document).ready(function () {
    // console.log('Hello World');

    $(window).resize(function () {
        // console.log($('header').width());
        if ($('header').width() < 700) {

            $('#projectOneNav').html(`<a>P1</a>`);
            $('#projectTwoNav').html(`<a>P2</a>`);
            $('#projectThreeNav').html(`<a>P3</a>`);

        }
        if ($('header').width() > 700) {

            $('#projectOneNav').html(`<a>Project One</a>`);
            $('#projectTwoNav').html(`<a>Project Two</a>`);
            $('#projectThreeNav').html(`<a>Project Three</a>`);
        }

    });

});