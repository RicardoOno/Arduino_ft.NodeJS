/**
 * Created by Tadashi on 11/12/2017.
 */
function Blink(ledsCount) {
    //console.log('~> Ledscount: ', ledsCount);
    ledsCount.stop().blink();
    return;
}
module.exports = Blink;