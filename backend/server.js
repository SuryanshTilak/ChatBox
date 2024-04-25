import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"

const app=express()
dotenv.config()// to use .env file

const PORT = process.env.PORT || 5000

app.get('/', (req,res) => {
    //root route http://localhost:5000/
    res.send("HELLO WORLD!")
})

app.use("/api/auth",authRoutes)//

// app.get('/api/auth/signup' ,(req,res) => {
//     console.log("SignUp Route")
// })

// app.get("/api/auth/login",(req,res) => {
//     console.log("Login Route")
// })

// app.get("/api/auth/logout",(req,res) =>{
//     console.log("Logout Route")
// })

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})