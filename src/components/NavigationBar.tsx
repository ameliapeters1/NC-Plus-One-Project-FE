import { NavLink } from "react-router"

function NavigationBar(){
    return(
        <header>
            <h1 className="logo">plans, please!</h1>
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
        </header>
    )

}
export default NavigationBar