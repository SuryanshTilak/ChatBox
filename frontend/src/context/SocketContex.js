import { createContext, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client"

export const SocketContext = createContext()

export const SocketContextProvider = ({children}) =>{
    const[socket,setSocket] = useState(null)
    const [onlineUsers,setOnlineUsers] = useState([])
    const {authUser} = useAuthContext()

    useEffect(()=>{
        if(authUser){
            const socket = io("http://localhost:5000")
        }
    })

    return (
        <SocketContext.Provider value={{}}>
            {children}
        </SocketContext.Provider>
    )
}