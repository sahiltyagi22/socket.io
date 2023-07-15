const io = require('socket.io')(8000)
const express = require('express')
const { Socket } = require('socket.io')
const app = express()

const server = require('http').createServer

let users = {}

io.on('connection' , Socket=>{
    Socket.on('new-user-joined' , name =>{
        users[Socket.id] = name
        Socket.broadcast.emit('user-joined' , name)
    });

    Socket.on('send' , message =>{
        Socket.broadcast.emit('send' , {message :message , name : users[Socket.id] })
    })
})