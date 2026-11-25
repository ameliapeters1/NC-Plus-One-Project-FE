import { useState } from "react"
import { login } from "../api/client"
import { useAuth } from "../context/AuthContext"

export function useLogin(){
    const [error, setError] = useState<string|null>(null)
    const [isSubmitting,setIsSubmitting] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    
    const {setAuth} = useAuth()

    async function handleLogin(email:string, password:string){
        setSuccess(false)
        setError(null)
        setIsSubmitting(true)

        try{
            // should put an access token into local storage upon registering 
            await login(email.trim(), password)

            setSuccess(true)
            setAuth({email: email.trim()})

            return true 
        } catch(err){
            if (err instanceof Error){
                setError(err.message)
            } else {
                setError("uh oh login failed :(")
            }

            return false
        }
        finally{
            setIsSubmitting(false)
        }
    }
    return {handleLogin, error, isSubmitting, success}
}

