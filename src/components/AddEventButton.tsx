import { NavLink } from "react-router"

function AddEventButton(){
    return(  
        <NavLink 
        to="/events/new" 
        className={({ isActive }) => (isActive ? "add-event-button active" : "add-event-button")}>
            add event here   
        </NavLink> 
    )
}

export default AddEventButton