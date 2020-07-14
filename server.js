var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

require('dotenv').config();

const socketEventEnum = {
  'CLIENT_LOGGED_IN': 'CLIENT_LOGGED_IN',
  'CLIENT_LOGGED_OUT': 'CLIENT_LOGGED_OUT'
};

io.on('connection', (socket) => {
    socket.on(socketEventEnum['CLIENT_LOGGED_IN'], (payload) => {
      io.emit(socketEventEnum['CLIENT_LOGGED_IN'], payload);
    });
    socket.on(socketEventEnum['CLIENT_LOGGED_OUT'], (payload) => {
      io.emit(socketEventEnum['CLIENT_LOGGED_OUT']);
    });
});


http.listen(process.env.PORT, () => {
  console.log('listening on *:' + process.env.PORT);
});