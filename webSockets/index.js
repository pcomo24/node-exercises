/**
 * Created by jetrodriguez on 6/9/17.
 */
var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'hbs');

app.get('/', function (request, response) {
    response.render('chat.hbs');
});

io.on('connection', function(client){
    console.log('CONNECTED');
    client.on('disconnect', function () {
        console.log('EXITED');
    });
});
//once 'incoming' event is received do 'chat msg'
//client.on('incoming', function(msg){
//    //io.emit to everyone, client.emit to browser it came from
//    io.emit('chat-msg', msg);
//});


client.on('join-room', function(room){
    //join method for client
    client.join(room, function() {
        //.rooms property lists rooms
        console.log(client.rooms);
        //server method .to(room) same as io.emit but to particular room
        io.to(room).emit('chat-msg', '**new user joined**');
    });
    client.on('incoming', function(msg){
        io.to(msg.room).emit('chat-msg', msg.msg);
    });
});



//get socket along with web request so switch to http from app
http.listen(8000, function () {
    console.log('in the year 8000 robots will run the galaxy');
});