import { NavLink } from "react-router"

function LoginButton(){
    return(  
        <NavLink 
        to="/login" 
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            login here   
        </NavLink> 
    )
}

export default LoginButton