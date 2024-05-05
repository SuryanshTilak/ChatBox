import User from "../models/user.model.js";

const getUsersForSidebar = async(req,res) =>{
    try{
        const LoggedUserId= req.user._id

        const FilteredUsers= await User.find(
            { 
                _id : { $ne : LoggedUserId}
            }
        ).select("-password")

        res.status(200).send(FilteredUsers)
    }
    catch(error)
    {
        console.error("Error in getUserForSidebar : ",error.message)
        res.status(500).json(
            {
                error : "Internal server error"
            }
        )
    }
}

export default getUsersForSidebar