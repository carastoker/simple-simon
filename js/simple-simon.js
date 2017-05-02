/**
 * Created by cstoker on 5/1/17.
 */

(function () {

    "use strict";


    var shapes = ['#green', '#blue', '#purple', '#orange'];
    var levelArray = [];
    var player = [];

    var generateRandom = shapes[Math.floor(Math.random() * shapes.length)];

    function blink(el) {
        $(el).animate({
            opacity: 1
        }, 500).animate({
            opacity: .5
        }, 200);
    }

    blink(generateRandom);

    $(".shapes").click(function () {
        blink(this);
        // console.log(this);
    });

    // $(".fireNext").click(function () {
    //     console.log();
    // });

})();