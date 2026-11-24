import { NavLink } from "react-router"
import { useAuth } from "../context/AuthContext"
import { clearToken } from "../utils/tokenStorage"

function AccountPage(){
    const { user, setAuth } = useAuth()

    function handleLogout(){
        setAuth(null)
        clearToken()
    }

    return(
    <>
        <h2> Account info</h2>

        {user ? 
            (
                <>
                    <p>hello {user.email}</p>
                    <button className="logout-btn" onClick={handleLogout}>Logout</button>
                </>

            ): (
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
        
    </>
    )
}

export default AccountPage