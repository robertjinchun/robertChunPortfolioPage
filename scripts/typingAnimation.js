
$("#typed").typing({
    strings: ['a UI Developer !', 'a Front End Developer !!', 'a UX Designer !!!', 'Jeya Prakash :)'],
    eraseDelay: 10,
    typeDelay: 70,
    stringStartDelay: 1000,
    color: 'red',
    typingColor: 'black',
    typingOpacity: '0.1',
    loopCount: 3,
    cursorBlink: false,
    cursorChar: '<small>_</small>',
    fade: true,
    onTyping: function () {
        console.log('onTyping');
    },
    onFinishedTyping: function () {
        console.log('onFinishedTyping');
    },
    onErasing: function () {
        console.log('onErasing');
    },
    onFinishedErasing: function () {
        console.log('onFinishedErasing');
    },
    onAllTypingCompleted: function () {
        console.log('onAllTypingCompleted');
    },
    onFinishedFadeErasing: function () {
        console.log('onFinishedFadeErasing');
    }
});