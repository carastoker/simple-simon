/**
 * Created by cstoker on 5/1/17.
 */
// iffe function
(function () {

    'use strict';

    // convert shapes div to an array using color #id
    var shapes = ['#green', '#blue', '#purple', '#orange'];
    // declare var for startGame and function
    var levelArray = [];
    // store player input
    var player = [];

    // animate shapes to blink
    function blink(element) {
        $(element).animate({
            opacity: 1
        }, 500).animate({
            opacity: .5
        }, 200);

    }

    // create empty array inside local function, push random math shapes to array, pass array up to blink for animation,
    //  clear if var count is >= to array, otherwise keep counting up by one, at set speed.
    function startGame() {

        // randomize shapes blink in a pattern
        levelArray.push(shapes[Math.floor(Math.random() * shapes.length)]);

        var count = 0;
        var intervalId = setInterval(function () {
            blink(levelArray[count]);
            if (count >= levelArray.length -1) {
                clearInterval(intervalId);
                playerMove();
            } else {
                count++;
            }
        }, 800);

    }

    // function playGame() {
    //
    //     // randomize shapes blink in a pattern
    //     levelArray.push(shapes[Math.floor(Math.random() * shapes.length)]);
    //     console.log('++++++++++++++++');
    //     console.log(levelArray);
    //     // you have color in levelArray
    //     // you start reading your array with counter
    //     // [green, red, green]
    //     var count = 0;
    //     var intervalId = setInterval(function () {
    //         blink(levelArray[count]);
    //         if (count >= levelArray.length) {
    //             clearInterval(intervalId);
    //         } else {
    //             count++;
    //         }
    //     }, 600);
    //
    // }

    function playerMove() {

        var i = 0;

        $(".shapes").on('click', function () {
            blink('#'+this.id);
            var test = '#' + this.id;
            // player.push(test);
            console.log(player);
            console.log('length of levelArray =>' + levelArray.length);
            console.log('length of player.length =>' + player.length);
            if (test === levelArray[i]) {
                if (i === levelArray.length - 1) {
                    startGame();
                    $(".shapes").off('click');
                } else {
                    i++;
                }
            } else {
                console.log('lose');
                levelArray = [];
                $(".shapes").off('click');
            }

        });

    }

    // EventListener fires random math/blink animation when btn is clicked.
    $('#newGame').click(function () {
        startGame();
    });
    // EventListener fires the next level w/ random math/blink animation when btn is clicked.
    // removed clear array so function counts up one by one.
    $('#nextLevel').click(function () {
        playGame();
    });
})();