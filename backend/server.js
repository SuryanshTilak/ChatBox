import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from "./db/mongoDb.js"

const app=express()
dotenv.config()// to use .env file

const PORT = process.env.PORT || 5000

app.use(express.json()) 
//to parse the incoming request with JSON payloads (from req.body)

app.get('/', (req,res) => {
    //root route http://localhost:5000/
    res.send("HELLO WORLD!")
})

app.use("/api/auth",authRoutes)


app.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})