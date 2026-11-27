import { useParams } from "react-router"
import { useAuth } from "../context/AuthContext"
import { useEvent } from "../hooks/useEvent"
import EditEventForm from "../components/EditEventForm"

function EditEventPage(){
    const {id} = useParams()
    const eventID = Number(id)

    const {user} = useAuth()
    const {event, isLoading, error} = useEvent(eventID)

    if (isLoading) return <p>loading event...</p>
    if (error) return <p>{error}</p>
    if (!event) return <p>event not found</p>

    if (!user || user.id !== event.organiser_id) {
    return <p>you are not the organiser so cannot edit this event.</p>}

    return(
    <>
    {user && (<EditEventForm 
                event={event}/>)}
    </>)
}

export default EditEventPage