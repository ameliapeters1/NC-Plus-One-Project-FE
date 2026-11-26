import { NavLink, useParams } from "react-router"
import { useEvent } from "../hooks/useEvent"
import IndividualEventCard from "../components/IndividualEventCard"
import { useAuth } from "../context/AuthContext"
import RSVPButton from "../components/RSVPButton"

function IndividualEventPage() {
    const {id} = useParams()
    const eventID = Number(id)

    const {user} = useAuth()
    const {event, isLoading, error} = useEvent(eventID)
    
    if (isLoading) return <p>Loading event...</p>
    if (error) return <p>{error}</p>
    if (!event) return <p>Event not found</p>

    return(
        <> 
            <section>
                <IndividualEventCard event={event}/>
            </section>

            {/* button only shows if the user is authenticated and the user is the organiser of the event */}
            <section>
                {user && 
                user.id === event.organiser_id && 
                (<NavLink to={`/events/${id}/edit`}>edit event</NavLink>)}
            </section>

            <RSVPButton eventID={eventID}/>
        
        </>
    )
}

export default IndividualEventPage