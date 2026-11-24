import { useParams } from "react-router"
import { useEvent } from "../hooks/useEvent"
import IndividualEventCard from "../components/IndividualEventCard"

function IndividualEventPage() {
    const {id} = useParams()
    const eventId = Number(id)

    const {event, isLoading, error} = useEvent(eventId)
    
    if (isLoading) return <p>Loading event...</p>
    if (error) return <p>{error}</p>
    if (!event) return <p>Event not found</p>

    return(
        <>
            <IndividualEventCard event={event}/>
        </>
    )
}

export default IndividualEventPage