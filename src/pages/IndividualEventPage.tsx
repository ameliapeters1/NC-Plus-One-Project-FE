import { NavLink, useParams } from "react-router"
import { useEvent } from "../hooks/useEvent"
import IndividualEventCard from "../components/IndividualEventCard"
import { useAuth } from "../context/AuthContext"
import RSVPButton from "../components/RSVPButton"
import AttendeesInfo from "../components/AttendeesInfo"

function IndividualEventPage() {
    const {id} = useParams()
    const eventID = Number(id)

    const {user} = useAuth()
    const {event, isLoading, error} = useEvent(eventID)
    
    if (isLoading) return <p className="event-list-message">loading event...</p>
    if (error) return <p className="event-list-message">{error}</p>
    if (!event) return <p className="event-list-message">event not found</p>

    return(
        <main className="individual-event-page"> 
            <section className="individual-event-container">
                <IndividualEventCard event={event}/>
            </section>

            {/* button and attendee info only shows if the user is authenticated and the user is the organiser of the event */}
            <section className="event-organiser-actions">
                {user && 
                user.id === event.organiser_id && 
                (<>
                    <AttendeesInfo eventID={eventID}/>
                    <NavLink to={`/events/${id}/edit`}>edit event</NavLink>
                </>)}
            </section>

            <section className="event-rsvp-section">
                <RSVPButton eventID={eventID}/>
            </section>
        
        </main>
    )
}

export default IndividualEventPage