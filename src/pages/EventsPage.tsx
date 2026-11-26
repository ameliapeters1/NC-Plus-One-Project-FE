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
        <main className="events-page">
            {successMessage && (<p className="success-message"> {successMessage} </p>)}
            <section className="events-list-section">
                <EventsList/>
            </section>

            <section className="add-event-section">
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
        </main>
)
}

export default EventsPage