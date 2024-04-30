import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(

    {
        senderId: {
            //type object when we want reference from other table
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
        ,
        receiverId: {
            //type object when we want reference from other table
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
        ,
        message: {
            type: String,
            required: true
        }
    }
    ,
     //show created Time , updated Time
    { timestamps: true }

)


const Message = mongoose.model("Message", messageSchema)

export default Message