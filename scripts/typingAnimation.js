//Credits to the individual who made this... I need to find her to give credit
$("#typed").typing({
    strings: ['Hello :)', 'My name is Robert', 'I am a Web Developer!!!','Enjoy my portfolio!'],
    eraseDelay: 50,
    typeDelay: 85,
    stringStartDelay: 1500,
    color: '#7be5ab',

    typingColor: '#7be5ab',
    typingOpacity: '0.1',
    loopCount: 5,
    cursorBlink: true,
    cursorChar: '<small>_</small>',
    fade: false,
    onTyping: function () {
        // console.log('onTyping');
    },
    onFinishedTyping: function () {
        // console.log('onFinishedTyping');
    },
    onErasing: function () {
        // console.log('onErasing');
    },
    onFinishedErasing: function () {
        // console.log('onFinishedErasing');
    },
    onAllTypingCompleted: function () {
        // console.log('onAllTypingCompleted');
    },
    onFinishedFadeErasing: function () {
        // console.log('onFinishedFadeErasing');
    }
});