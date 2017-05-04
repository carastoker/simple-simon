/**
 * Created by cstoker on 5/1/17.
 */
// iffe function
(function () {

    'use strict';

    // convert dinos in div to an array using color #ids
    var shapes = ['#green', '#yellow', '#pink', '#orange'];
    var levelArray = [];
    // store player input
    var player = [];
    var counter = 0;
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
        levelArray.push(shapes[Math.floor(Math.random() * shapes.length)]);

        // console.log("CPU array");
        // console.log(levelArray);

        // call blink animation pattern and
        var count = 0;
        var intervalId = setInterval(function () {
            blink(levelArray[count]);
            if (count >= levelArray.length - 1) {
                clearInterval(intervalId);
                playerLevel();
            } else {
                count++;
            }
        }, 800);

    }

    function playerLevel() {

        var i = 0;

        $(".shapes").on('click', function () {

            blink('#' + this.id);
            var test = '#' + this.id;

            //add a new element to the user array
            player.push(test);

            //
            // console.log('length of levelArray =>' + levelArray.length);
            // console.log('length of player.length =>' + player.length);

            if (test === levelArray[i]) {

                if (i === levelArray.length - 1) {

                    console.log("User array");
                    console.log(player);

                    //generates a new element to the array
                    player = [];
                    moveForward();
                    //get rid of the event listeners
                    $(".shapes").off('click');
                    //update the rounds after moving forward
                    $('#rounds').text(levelArray.length);

                } else {
                    i++;
                }

            } else {
                levelArray = [];
                player = [];
                $(".shapes").off('click');
                alert("That's not the dino dance! Game over.");
            }

        });

    }

    // EventListener fires random math/blink animation when btn is clicked.
    $('#newGame').click(function () {
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