import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async(req,res) => {

    try{
        const {message} = req.body
        //receiver joh id hum log post request me bhej rahe
        const {id : receiverId} = req.params
        //sender already loggedin hai
        const senderId = req.user._id //protectedRoutes


        let conversation = await Conversation.findOne({
            participants : { $all : [senderId,receiverId]}
        })
        
        

        if(!conversation)
        {
            conversation=await Conversation.create({
                participants : [senderId , receiverId]
                //default message [] from conversation.model
            })
            
        }
        
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })


        if(newMessage)
        {
            conversation.messages.push(newMessage._id)
        }

        await conversation.save()
        await newMessage.save()

        res.status(201).json(newMessage)
    
    }
    catch(error){
        console.log("Error in sendMessage Controller ",error.message)
        res.status(500).json({
            error : "Internal Server Error"
        })
    }
}
