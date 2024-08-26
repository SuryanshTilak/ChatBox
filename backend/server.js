import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
//-------express yaha se socket.js me daal diya gaya--------------
import { app, server } from "./socket/socket.js"

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from "./db/mongoDb.js"
//cors nhi hai original me
import cors from 'cors'
import path from "path"


//-------delete after socket.js---------
//const app=express()
dotenv.config()// to use .env file

const PORT = process.env.PORT || 5000

//gives absolute path to root folder
const __dirname = path.resolve()

app.use(express.json()) 
//to parse the incoming request with JSON payloads (from req.body)

app.use(cookieParser())
//to able to access cookie

// app.use(cors())

// app.get('/', (req,res) => {
//     //root route http://localhost:5000/
//     res.send("HELLO WORLD!")
// })

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

//static dist file
app.use( express.static(path.join(__dirname, "frontend/dist") ) )

//any routes other than upper 3 will be directed here
app.get("*" , (req,res) => {
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})