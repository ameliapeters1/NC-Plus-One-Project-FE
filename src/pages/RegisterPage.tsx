import { useState } from "react"
import type { SubmitEvent } from "react"
import { useNavigate } from "react-router"
import { useRegister } from "../hooks/useRegister"

function RegisterPage(){
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {handleRegister, error, isSubmitting, success} = useRegister()

    async function handleSubmit(event: SubmitEvent<HTMLFormElement>){
        event.preventDefault()

        const registered = await handleRegister(name, email, password)
        if (registered){
            navigate("/account")
        }
    }

    return(
        <form className="auth-form" onSubmit={handleSubmit}>
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