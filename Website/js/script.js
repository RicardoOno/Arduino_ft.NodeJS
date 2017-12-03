function Action(action) {

    var data = JSON.stringify({'action': action});
    Xhr(data);
}
function Xhr(data){
    var xhr = new XMLHttpRequest();
    //xhr.open("POST", "http://192.168.2.221:2001/post/", true);
    xhr.open("POST", "http://192.168.0.102:2001/command", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(data);
            console.log(json.action);
        }
    };
    xhr.send(data);
    console.log(data);
    return xhr;
}
/*if (x == 'pulse') {
    var data = JSON.stringify({"action": x});
    Xhr('pulse', data);
} else if (x == 'blink') {
    var data = JSON.stringify({"action": "blink"});
    xhr.send(data);
    console.log('Blink');
} else if(x == 'stop') {
    var data = JSON.stringify({"action": "stop"});
    xhr.send(data);
    console.log('STOP');
} else if(x == 'song') {
    var data = JSON.stringify({"action":"song"});
    xhr.send(data);
    console.log('MUSICAAA');
} else if(x == 'rgb') {
    var data = JSON.stringify({"action":"rgb"});
    xhr.send(data);
    console.log('RGB');
} else if (x == 'light') {
    var data = JSON.stringify({"action": "light"});
    xhr.send(data);
    console.log('Light');
}*/