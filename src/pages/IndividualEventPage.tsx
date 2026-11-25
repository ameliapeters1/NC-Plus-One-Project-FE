import { NavLink, useParams } from "react-router"
import { useEvent } from "../hooks/useEvent"
import IndividualEventCard from "../components/IndividualEventCard"
import { useAuth } from "../context/AuthContext"

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

{/* TO DO ONLY ALLOW THE USER TO EDIT THEIR OWN EVENT like only show button if correct */}
            <section>
                {user && (<NavLink to={`/events/${id}/edit`}>edit event</NavLink>)}
            </section>
        
        </>
    )
}

export default IndividualEventPage