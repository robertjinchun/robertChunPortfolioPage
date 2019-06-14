
$("#typed").typing({
    strings: ['Hey!', 'My name is Robert', 'I am a Front End Developer !!', 'I am also an avid climber', 'Please enjoy my portfolio'],
    eraseDelay: 50,
    typeDelay: 85,
    stringStartDelay: 1000,
    color: '#eaf2ef',

    typingColor: '#eaf2ef',
    typingOpacity: '0.1',
    loopCount: 5,
    cursorBlink: true,
    cursorChar: '<small>_</small>',
    fade: false,
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