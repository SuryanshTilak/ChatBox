import { Server } from "socket.io";
//http is a build in node js module
import http from 'http'
import express from "express";

const app=express()

//http server banaya
//http ko upgrage kar rahe web socket me
const server = http.createServer(app)
const io = new Server(server,{
    cors : {
        origin : ["http://localhost:3000"],
        methods : ["GET","POST"]
    }
})

export const getReceiverSocketId = (receiverId) =>{
    return userSocketMap[receiverId]
}

const userSocketMap = {} ; //{userId : socketId}

io.on('connection',(socket) =>{
    console.log('a user connected',socket.id)

    const userId=socket.handshake.query.userId
    if(userId != "undefined")
    userSocketMap[userId] = socket.id

    //io.emit() us used to send events to all connected clients
    //jab user connect karega toh kon online hai offline hai send karega using getOnlineUsers(event)
    io.emit("getOnlineUsers",Object.keys(userSocketMap))

    //socket khud se close nhi hota hum logo ko karna hota hai
    socket.on('disconnect',()=>{
        console.log("USER DISCONNECTED",socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers",Object.keys(userSocketMap))
    })
})

export {app,io,server};