import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
import { getReceiverSocketId,io } from "../socket/socket.js"

export const sendMessage = async(req,res) => {

    try{
        const {message} = req.body
        //receiver joh id hum log post request me bhej rahe
        const {id : receiverId} = req.params
        //sender already loggedin hai
        const senderId = req.user._id  //protectedRoutes


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

        // await conversation.save()
        // await newMessage.save()

        //this will run in parallel

        await Promise.all([conversation.save() , newMessage.save()])

        const receiverSocketId = getReceiverSocketId(receiverId)
        
        //SOCKET SEND MSG TO RECEIVER
        if(receiverSocketId){
            //io.to(<socket_id>).emit() used to send events to specific client
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }

        res.status(201).json(newMessage)
    
    }
    catch(error){
        console.log("Error in sendMessage Controller ",error.message)
        res.status(500).json({
            error : "Internal Server Error"
        })
    }
}

export const getMessages = async(req,res) =>{

    try{
        const {id : userToChatId} = req.params
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants : {
                $all : [senderId, userToChatId]
            }
        }).populate("messages")

        //NOT REFERENCE BUT ACTUAL MESSAGES
        //populate messages = mtlb ye conversation me msg array maat do
        //but har ek msg do one by one
        
        if(!conversation)
        return res.status(200).json([])

        const messages = conversation.messages


        res.status(200).json(messages)


    }
    catch(error)
    {
        console.log("Error in sendMessage controller : ",error.message)
        res.status(500).json({
            error : "Tnternal Server Error"
        })
    }
}