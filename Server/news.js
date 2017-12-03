/**
 * Created by ricar on 14/10/2017.
 */
var five = require("johnny-five");
//var board = new five.Board({ port: 'COM19'});
var board = new five.Board();
var Light = require('../services/light');
var count = 0;
module.exports = function (app) {

    board.on("ready", function() {

        var piezo = new five.Piezo(3);
        //var led11 = new five.Led(11);
        //var led9 = new five.Led(9);
        var leds = new five.Leds([11,10,9]);
        /* Injects the piezo into the repl
         board.repl.inject({
         piezo: piezo
         }); */
        app.post('/command1', function (req, res) {
            console.log('##### Alguem conectou #####');
            var command = req.body;
            console.log('~> Comando: ' + command['action']);
            switch (command['action']) {
                case 'song':
                    piezo.play({
                        song: [
                            ["C4", 1 / 4],
                            ["D4", 1 / 4],
                            ["F4", 1 / 4],
                            ["D4", 1 / 4],
                            ["A4", 1 / 4],
                            [null, 1 / 4]
                        ],
                        tempo: 50
                    });

                    break;
                case 'noTone':
                    piezo.stop().off();
                    led11.stop().off();
                    break;
                case 'light_buzzer':
                    piezo.play({
                        song: [
                            ["C4", 1 / 4],
                            ["D4", 1 / 4],
                            ["F4", 1 / 4],
                            ["D4", 1 / 4],
                            ["A4", 1 / 4],
                            [null, 1 / 4]
                        ],
                        tempo: 50
                    });

                    led11.on();
                    res.send('Ligou');
                    break;
                default:
                    console.log('===> Comando Invalido <===');
                    break;
            }
            res.end();
        });

        app.post('/command', function (req, res) {
            console.log('##### Alguem conectou #####');
            var command = req.body['action'];
            console.log('~> command.length: ' + command.length);
            console.log('~> command 2: ' + command);

            for(var i = 0; i < command.length; i++) {
                switch (command[i]){
                    case 'light':
                        console.log('light');
                        leds[2].on();
                        break;
                    case 'pulse':
                        console.log('pulse');
                        leds[1].pulse();
                        break;
                    case 'blink':
                        console.log('blink');
                        leds[2].blink();
                    case 'piezo':
                        console.log('piezo');
                        piezo.play({
                            song: [
                                ["C4", 1 / 4],
                                ["D4", 1 / 4],
                                ["F4", 1 / 4],
                                ["D4", 1 / 4],
                                ["A4", 1 / 4],
                                [null, 1 / 4]
                            ],
                            tempo: 50
                        });
                        break;
                    //vetor de luzes
                    case 'light1':

                        if((count - leds.length) == 0){
                            count = 0;
                            Light(leds[count]);
                            count = 1;

                        } else {

                            Light(leds[count]);
                            count++;
                        }
                        console.log('~> count: ', count);
                        //var x = leds[count];
                        console.log('~> length: ', leds.length);
                        break;

                    default:
                        console.log('Ação inexistente');
                        break;
                }
            }
            res.end();
        });
    });
}; //module exports

function  song() {
    console.log('===> Piezo here <====');
    var piezo = new five.Piezo(3);

    //var song = songs.load('never-gonna-give-you-up');
    var song = songs.load('starwars-theme');

    // Play it !
    piezo.play(song);

    // List all songs
    songs.list(function (err, tunes) {
        // Object literal with all the songs
    });

    console.log("===> End Piezo <===");
}

function rgb() {
    console.log('===> RGB Led <===');
    var rgbLed = new five.Led.RGB([10,9,6]);
    console.log('===> 100% red <===');
    rgbLed.color("#FF0000").blink(50);
    temporal.queue([{
        wait: 3000,
        task: function(){
            console.log('===> 30% red <===');
            rgbLed.intensity(30);
        }
    }, {
        wait: 3000,
        task: function(){
            console.log('===> 30% gree <===');
            rgbLed.color("#00FF00").blink(20);
        }
    }, {
        wait: 3000,
        task: function(){
            console.log('===> 100% gree <===');
            rgbLed.intensity(100);
        }
    }, {
        wait: 3000,
        task: function(){
            console.log('===> 100% blue <===');
            rgbLed.color('#0000FF').blink(100);
        }
    }, {
        wait: 3000,
        task: function(){
            console.log('===> 30% blue <===');
            rgbLed.intensity(30);
        }
    }, {
        wait: 3000,
        task: function(){
            console.log('===> #800080 <===');
            rgbLed.intensity(100)
            rgbLed.color('#800080').blink(1000);
        }
    }, {
        wait: 3000,
        task: function(){
            console.log('===> #E0FFFF <===');
            rgbLed.color('#E0FFFF').blink(150);
        }
    },{
        wait: 3000,
        task: function(){
            console.log('===> #708090 <===');
            rgbLed.color('#708090').blink(850);
        }
    }, {
        wait: 3000,
        task: function(){
            rgbLed.stop().off();
        }
    }
    ]);

}