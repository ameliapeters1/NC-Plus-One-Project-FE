import { useAuth } from "../context/AuthContext"
import LoginButton from "../components/LoginButton"
import AddEventForm from "../components/AddEventForm"

function AddEventPage(){
    const { user } = useAuth()
    return(
        <>
            {user ? 
                (<>
                    <AddEventForm/>
                </>):
                (<>
                    <p>login to add event</p>
                    <LoginButton/>
                </>
            )}

            
        </>
    
)
}

export default AddEventPage