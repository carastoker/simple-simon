/**
 * Created by cstoker on 5/1/17.
 */
// iffe function
(function () {

    'use strict';

    // convert shapes div to an array using #id
    var shapes = ['#green', '#blue', '#purple', '#orange'];
    // declare var for startGame function
    var levelArray;
    // store player inpute
    var player = [];


    console.log(levelArray);

    // animate shapes to blink
    function blink(element) {
        $(element).animate({
            opacity: 1
        }, 500).animate({
            opacity: .5
        }, 200);
    }


    // create empty array, push random math shapes to array, pass array up to blink for animation,
    //  clear if count is >= to array, otherwise keep counting up by one at set speed
    function startGame() {

        levelArray = [];

        // randomize shapes blink in a pattern
        levelArray.push(shapes[Math.floor(Math.random() * shapes.length)]);

        var count = 0;
        var intervalId = setInterval(function () {
            blink(levelArray[count]);
            if (count >= levelArray.length) {
                clearInterval(intervalId);
            } else {
                count++;
            }
        }, 600);

    }
        // EventListener allows blink animation to fire when btn is clicked.
        $('.shapes').click(function () {
            blink(this);
        });
        // EventListener fires random math/blink animation when btn is clicked.
        $('#newGame').click(function () {
            startGame();
        });

})();