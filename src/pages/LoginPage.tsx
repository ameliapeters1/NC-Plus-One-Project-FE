import { useState } from "react"
import type { SubmitEvent } from "react"
import { useNavigate } from "react-router"
import { useLogin } from "../hooks/useLogin"

function LoginPage(){
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {handleLogin, error, isSubmitting, success} = useLogin()


    async function handleSubmit(event: SubmitEvent<HTMLFormElement>){
        event.preventDefault()

        const loggedIn = await handleLogin(email, password)
        if (loggedIn){
            navigate("/account")
        }
    }

    return(
        <form className="auth-form" onSubmit={handleSubmit}>
            <h1>login here!</h1>
            

            <label htmlFor="email">email</label>
              <input 
              id="email" 
              type="text" 
              placeholder="place your @ here" 
              value={email}
              onChange={(event)=>setEmail(event.target.value)} 
              required/>

            <label htmlFor="password">password</label>
             <input 
             id="password" 
             type="password" 
             placeholder="top secret info here" 
             value={password} 
             onChange={(event)=>setPassword(event.target.value)}
             required/>

            {error && <p>error found! {error}</p>}
            {success && <p>logged in! {email}</p>}

            <button type="submit" className="signupbtn" disabled={isSubmitting}>{isSubmitting ? "unlocking...": "click to unlock everything"}</button>

        </form>
    )
}

export default LoginPage