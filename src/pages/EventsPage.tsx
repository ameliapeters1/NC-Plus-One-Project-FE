import { useLocation } from "react-router";
import AddEventButton from "../components/AddEventButton";
import EventsList from "../components/EventsList";
import LoginButton from "../components/LoginButton";
import { useAuth } from "../context/AuthContext";

function EventsPage(){
    const { user } = useAuth()

    const location = useLocation()
    const successMessage = location.state?.successMessage
    return(
        <>
            {successMessage && (<p> {successMessage} </p>)}
            <section>
                <EventsList/>
            </section>

            <section>
                {user ? 
                    (<>
                        <p>add new event</p>
                        <AddEventButton/>
                    </>):
                    (<>
                        <p>login to add event</p>
                        <LoginButton/>
                    </>
                    )}
            </section>
        </>
)
}

export default EventsPage