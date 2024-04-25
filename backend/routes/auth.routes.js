import express from "express"
import { logout, signin, signup } from "../controllers/auth.controller.js"

const router = express.Router()

// api/auth/signup
router.post("/signup",signup)

// api/auth/singin
router.post("/login",signin)

// api/auth/logout
router.post("/logout",logout)



export default router