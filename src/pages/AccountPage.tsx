import { NavLink } from "react-router"

function AccountPage(){
    return(
    <>
        <h2> Account info</h2>
        <nav>
            <NavLink 
            to="/login" end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Login    
            </NavLink>

            <NavLink 
            to="/register" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Register    
            </NavLink>
        </nav>
    </>
    )
}

export default AccountPage