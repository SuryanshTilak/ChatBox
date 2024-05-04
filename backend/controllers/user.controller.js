import User from "../models/user.model.js";

const getUsersForSidebar = async(req,res) =>{
    const users= await User.find()

    res.status(200).send(users)
}

export default getUsersForSidebar