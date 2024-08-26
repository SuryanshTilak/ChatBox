import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContex'
import useConversation from '../zustand/useConversation'
import notification from "../assets/sounds/notification.mp3"

const useListenMessages = () => {
    const {socket} = useSocketContext()
    const {messages,setMessages} = useConversation()

    useEffect (() => {
        socket?.on("newMessage" , (newMessage) => {

            const sound = new Audio(notification)
            sound.play()

            setMessages([...messages,newMessage])
        })

        return () => socket?.off("newMessage")
    },[socket,setMessages,messages])
}

export default useListenMessages