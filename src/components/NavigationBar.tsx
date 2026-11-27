import { NavLink } from "react-router"

function NavigationBar(){
    return(
        <nav>
            <NavLink 
            to="/" end
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                home    
            </NavLink>

            <NavLink 
            to="/events" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                events    
            </NavLink>

            <NavLink 
            to="/account" 
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                account    
            </NavLink>

        </nav>
    )

}
export default NavigationBar