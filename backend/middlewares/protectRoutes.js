import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {

        const token = req.cookies.jwt

        // console.log("PRINTING = ",token)

        if (!token) {
            return res.status(401).json({
                error: "Unauthorized - No Token Provided"
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)
        // console.log("PRINTING = ",decode)


        if (!decode) {
            return res.status(401).json({
                error: "Unauthorized - Invalid Token"
            })
        }

        // console.log("PRINT",decode.userId)
        const user = await User.findById(decode.userId ).select("-password")
        // console.log("PRINTING",user)

        if (!user) {
            return res.status(404).json({
                error: "User not found"
            })
        }

        req.user = user

        next()

    } catch (error) {

        console.log("Error in protected Routes middleware", error.message)
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export default protectRoute