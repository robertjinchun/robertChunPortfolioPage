$(document).ready(function () {
    // console.log('Hello World');
    $('#aboutNav').click(function () {
        $('#aboutMe, #typingAnimation, #portfolioOne, #portfolioTwo, #portfolioThree').not(this).addClass('displayStatus'); // remove buttonactive from the others
        $('#aboutMe').toggleClass('displayStatus'); // toggle current clicked element
    });
    $('#logo').click(function () {
        $('#aboutMe, #typingAnimation, #portfolioOne, #portfolioTwo, #portfolioThree').not(this).addClass('displayStatus'); // remove buttonactive from the others
        $('#typingAnimation').toggleClass('displayStatus'); // toggle current clicked element
    });
    $('#projectOneNav').click(function () {
        $('#aboutMe, #typingAnimation, #portfolioOne, #portfolioTwo, #portfolioThree').not(this).addClass('displayStatus'); // remove buttonactive from the others
        $('#portfolioOne').toggleClass('displayStatus'); // toggle current clicked element
    });
    $('#projectTwoNav').click(function () {
        $('#aboutMe, #typingAnimation, #portfolioOne, #portfolioTwo, #portfolioThree').not(this).addClass('displayStatus'); // remove buttonactive from the others
        $('#portfolioTwo').toggleClass('displayStatus'); // toggle current clicked element
    });
    $('#projectThreeNav').click(function () {
        $('#aboutMe, #typingAnimation, #portfolioOne, #portfolioTwo, #portfolioThree').not(this).addClass('displayStatus'); // remove buttonactive from the others
        $('#portfolioThree').toggleClass('displayStatus'); // toggle current clicked element
    });
});