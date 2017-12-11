/**
 * Created by Tadashi on 11/12/2017.
 */
function Pulse(ledsCount) {
    //console.log('~> Ledscount: ', ledsCount);
    ledsCount.stop().pulse();
    return;
}
module.exports = Pulse;