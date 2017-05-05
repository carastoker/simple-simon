/**
 * Created by cstoker on 5/1/17.
 */
// iffe function
(function () {

    'use strict';

    // convert dinos in div to an array using color #ids
    var dinos = ['#green', '#yellow', '#pink', '#orange'];
    var levelArray = [];
    var rounds = 0;

    // animate dinos to blink
    function blink(element) {
        $(element).animate({
            opacity: .5
        }, 500).animate({
            opacity: 1
        }, 200);

    }

    // create empty array inside local function, push random math shapes to array, pass array up to blink for animation,
    //  clear if var count is >= to array, otherwise keep counting up by one, at set speed.
    function moveForward() {


        // randomize blink animation pattern
        levelArray.push(dinos[Math.floor(Math.random() * dinos.length)]);

        /
        // setInterval runs through length of array starting at 0 then clears
        var count = 0;

        var intervalId = setInterval(function () {
            // animation + random math starting at beginning of array
            blink(levelArray[count]);
            // goes through length of array before clearing
            if (count >= levelArray.length - 1) {
                clearInterval(intervalId);
                playerLevel();
            }

            count++;

        }, 800);

    }

    function playerLevel() {

        var i = 0;

        $(".shapes").on('click', function () {
            // add magic sound to dinos
            var audio = new Audio("sound/magic.wave");
            // grabs the id clicked on in this event
            var test = '#' + this.id;

            audio.play();

            blink(test);

            // console.log('length of levelArray =>' + levelArray.length);
            // console.log('length of player.length =>' + player.length);

            if (test === levelArray[i]) {

                if (i === levelArray.length - 1) {

                    //generates a new element to the array

                    moveForward();

                    //get rid of the event listeners
                    $(".shapes").off('click');
                    //update the rounds after moving forward.
                    $('#rounds').text(levelArray.length);

                } else {
                    i++;
                }

            } else {
                levelArray = [];

                $(".shapes").off('click');
                alert("That's not the dino dance! Game over.");
                // $("#gameOver")
            }

        });

    }

    // EventListener fires random math/animation when btn is clicked by player.
    $('#newGame').click(function () {
        // add sound to start game btn.
        var audio = new Audio("sound/magic.wave");
        audio.play();
        //Reset the rounds number to Zero
        $("#rounds").text(1);
        levelArray = [];

        moveForward();
    });

    // EventListener fires the next level w/ random math/blink animation when btn is clicked.
    // removed clear array so function counts up one by one.
    $('#nextLevel').click(function () {
        moveForward();
    });
})();