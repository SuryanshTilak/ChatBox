import { useState } from 'react'
import toast from 'react-hot-toast'
import https from 'https';
import axios from 'axios'
import { useAuthContext } from '../context/AuthContext';

// Function useSignup = hook
const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    // Function signup
    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender })
        if (!success) return

        setLoading(true)
        try {
            console.log(`${username} ${fullName} ${password} ${confirmPassword} ${gender}`)

            //http://localhost:5000/api/auth/signup
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            });

            const data = await res.json()
            if(data.error)
            {
                throw new Error(data.error)
            }
            console.log(data)

            //localStorage
            localStorage.setItem("chat-user",JSON.stringify(data))

            //context
            setAuthUser(data)
        } catch (error) {
            toast.error(error?.message || 'An unexpected error occurred')
        } finally {
            setLoading(false)
        }
    }
    return { loading, signup }
}

export default useSignup

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all fields')
        return false
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match')
        return false
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters')
        return false
    }

    return true
}
