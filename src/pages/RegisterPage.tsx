import { useState } from "react"
import type { SubmitEvent } from "react"
import { register } from "../api/client"

function RegisterPage(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string|null>(null)
    const [isSubmitting,setIsSubmitting] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>){
        event.preventDefault()

        setSuccess(false)
        setError(null)
        setIsSubmitting(true)

        try{
            await register(name, email.trim(), password)
            setSuccess(true)
        }catch(err){
            if (err instanceof Error){
                setError(err.message)
            } else {
                setError("uh oh registration failed :(")
            }
        }
        finally{
            setIsSubmitting(false)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Sign up here!</h1>
            <label htmlFor="name">Name</label>
              <input 
              id="name" 
              type="text" 
              placeholder="Enter name" 
              value={name}
              onChange={(event)=>setName(event.target.value)} 
              required/>

            <label htmlFor="email">Email</label>
              <input 
              id="email" 
              type="text" 
              placeholder="Enter Email" 
              value={email}
              onChange={(event)=>setEmail(event.target.value)} 
              required/>

            <label htmlFor="password">password</label>
             <input 
             id="password" 
             type="password" 
             placeholder="Enter Password" 
             value={password} 
             onChange={(event)=>setPassword(event.target.value)}
             required/>

            {error && <p>Error found! {error}</p>}
            {success && <p>You're in!</p>}

            <button type="submit" className="signupbtn" disabled={isSubmitting}>{isSubmitting ? "Signing up...": "Sign up"}</button>

        </form>
    )
}

export default RegisterPage