import { createContext, useState,useEffect,useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client"

export const SocketContext = createContext()

export const useSocketContext = () =>{
    return useContext(SocketContext)
}

export const SocketContextProvider = ({children}) =>{
    const[socket,setSocket] = useState(null)
    const [onlineUsers,setOnlineUsers] = useState([])
    const {authUser} = useAuthContext()

    useEffect(()=>{
        if(authUser){
            const socket = io("https://chatbox-p0kd.onrender.com",{
                query:{
                    userId : authUser._id
                }
            })
            setSocket(socket)

            //socket.on is used to listen events
            socket.on("getOnlineUsers" ,(users) =>{
                setOnlineUsers(users)
            })

            return () => socket.close()
        }
        else
        {
            if(socket)
            {
                socket.close()
                setSocket(null)
            }
        }
    },[authUser])

    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}