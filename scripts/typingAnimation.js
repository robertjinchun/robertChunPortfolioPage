
$("#typed").typing({
    strings: ['!!!\u{1F44B}!!!', 'My name is Robert', 'I am a Web Developer!!!', 'I enjoy coding', 'I enjoy climbing', 'I enjoy robots', 'Enjoy!'],
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