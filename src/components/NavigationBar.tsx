import { NavLink } from "react-router"

function NavigationBar(){
    return(
        <nav>
            <NavLink 
            to="/" end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Home    
            </NavLink>

            <NavLink 
            to="/events" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Events    
            </NavLink>

            <NavLink 
            to="/register" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Register    
            </NavLink>

        
        </nav>
    )
    
}
export default NavigationBar