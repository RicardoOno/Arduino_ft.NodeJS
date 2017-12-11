var app = require('./config/custom-express')();
//var http = require('http').Server(app);

//var cors = require('cors');

// var corsOptions = ({
//    credentials: true,
//    origins: [
//        'http://localhost:8080',
//        'chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop'
//    ],
//    optionsSuccessStatus: 200
// });

//http.listen(2001,  '192.168.0.103', cors(corsOptions) , function () {
app.listen(2001,  '192.168.0.104', function () {
   console.log('====> Servidor no rodando <====');
});

