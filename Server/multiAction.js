/**
 * Created by ricar on 12/10/2017.
 */
console.log("#### " + command[0] + " ####");
console.log('~> command 1: ' + command.length);
console.log('~> command 2: ' + command);

for(var i = 0; i < command.length; i++) {
    switch (command[i]){
        case 'light':
            console.log('light');
            led11.on();
            break;
        case 'line':
            console.log('line');
            break;
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
        default:
            console.log('Ação inexistente');
            break;
    }
    res.end('~> command: ' + command[i] + "\n");
}