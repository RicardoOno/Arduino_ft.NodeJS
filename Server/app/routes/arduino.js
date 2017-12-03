/**
 * Created by Tadashi on 14/10/2017.
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
        var leds = new five.Leds([11,10,9,6,5]);
        /* Injects the piezo into the repl
         board.repl.inject({
         piezo: piezo
         }); */

        app.post('/command', function (req, res) {
            console.log('##### Alguem conectou #####');
            var command = req.body['action'];
            //console.log('~> command.length: ' + command.length);
            //console.log('~> command 2: ' + command);
            for(var i = 0; i < command.length; i++) {
                switch (command[i]){
                    case 'leds_light':
                        if((count - leds.length) == 0){
                            count = 0;
                            Light(leds[count]);
                            count = 1;
                        } else {
                            Light(leds[count]);
                            count++;
                        }
                        console.log('Ação: ' + command[i] + ' existente');
                        break;
                    case 'off':
                        leds.off();
                        count = 0;
                        console.log('off');
                        break;
                    default:
                        console.log('Ação: ' + command[i] + ' inexistente');
                        break;
                }
            }
            res.send('bateu').end();
        });
    });
};