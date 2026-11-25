import { useState } from "react"
import { register } from "../api/client"
import { useAuth } from "../context/AuthContext"

export function useRegister(){
    const [error, setError] = useState<string|null>(null)
    const [isSubmitting,setIsSubmitting] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    const { setAuth } = useAuth()

    async function handleRegister(name:string, email:string, password:string){
    
            setSuccess(false)
            setError(null)
            setIsSubmitting(true)

            try{
                await register(name, email.trim(), password)
                setAuth({email:email.trim()})
                setSuccess(true)
                return true

            } catch(err){
                if (err instanceof Error){
                    setError(err.message)
                } else {
                    setError("uh oh registration failed :(")
                }

                return false
            }
            finally{
                setIsSubmitting(false)
            }
        }
        return {handleRegister, error, isSubmitting, success}
}