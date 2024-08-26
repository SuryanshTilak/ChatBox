import React, { useEffect,useRef } from 'react'
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages.jsx'
import MessageSkeleton from '../skeleton/messageSkeleton.jsx'
import useListenMessages from '../../hooks/useListenMessages.jsx'

const Messages = () => {
  const {messages,loading} = useGetMessages()
  useListenMessages()
  const lastMessageRef = useRef()
  
  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behaviour : "smooth"})
    },100)
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>

      {/* jab tak msg load horaha tab tak mssg skeleton dikhao */}
        {loading && <div>
          <MessageSkeleton /> <MessageSkeleton/> <MessageSkeleton/>
          </div>  
      }

      {/* jab loading ho chuka ho phar loi msg nhi kiya ho */}
      {!loading && messages.length===0 && <p className='text-center'>
        Send a message to start the conversation
        </p>
      }

      {/* jab loading ho chuka ho msg show kardo */}
      {!loading && messages.length>0 && messages.map((message)=>
      (<div key={message._id} 
        ref={lastMessageRef}
      >
        <Message message={message}/>
      </div>)
      )} 


    </div>
  )
}

export default Messages