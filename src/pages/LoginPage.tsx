import { useState } from "react"
import type { SubmitEvent } from "react"
import { login } from "../api/client"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router"

function LoginPage(){
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string|null>(null)
    const [isSubmitting,setIsSubmitting] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const {setAuth} = useAuth()

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>){
        event.preventDefault()

        setSuccess(false)
        setError(null)
        setIsSubmitting(true)

        try{
            // should put an access token into local storage upon registering 
            await login(email.trim(), password)
            setSuccess(true)

            // CHANGE HARDCODING NAME


            setAuth({
                name: "name",
                email: email
            })
            navigate("/account")
        } catch(err){
            if (err instanceof Error){
                setError(err.message)
            } else {
                setError("uh oh login failed :(")
            }
        }
        finally{
            setIsSubmitting(false)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Login here!</h1>
            

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
            {success && <p>Logged in! {email}</p>}

            <button type="submit" className="signupbtn" disabled={isSubmitting}>{isSubmitting ? "Logging in...": "Login"}</button>

        </form>
    )
}

export default LoginPage