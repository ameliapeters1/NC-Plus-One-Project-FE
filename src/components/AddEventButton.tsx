import { NavLink } from "react-router"

function AddEventButton(){
    return(  
        <NavLink 
        to="/events/new" 
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            add event here   
        </NavLink> 
    )
}

export default AddEventButton