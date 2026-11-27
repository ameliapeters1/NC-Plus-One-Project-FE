import { NavLink } from "react-router"

function AuthNavigation(){
    return(
        <nav className="auth-nav">
                    <NavLink 
                    to="/login" 
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        Login    
                    </NavLink>

                    <NavLink 
                    to="/register" 
                    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                        Register    
                    </NavLink>
                </nav>
    )
}

export default AuthNavigation