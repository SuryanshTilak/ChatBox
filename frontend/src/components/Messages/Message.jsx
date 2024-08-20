import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTime'

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  //agar humne hi msg bheja hai toh true hoga
  const fromMe = message.senderId===authUser._id
  //chat-start se daisyUI right side msg show karega nhi toh left side
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic
  const bubbleBgColor = fromMe ? 'bg-blue-500' : ""
  const formatedTime = extractTime(message.createdAt)

  return (
    //daisy ui
    <div className={`chat ${chatClassName}`}>

        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="Tailwind CSS chat bubble component" />
            </div>
        </div>

        <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
            {message.message}
        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formatedTime}</div>
    </div>
  )
}

export default Message