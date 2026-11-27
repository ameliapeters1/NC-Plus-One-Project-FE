import { useParams } from "react-router"
import { useAuth } from "../context/AuthContext"
import { useAttendees } from "../hooks/useAttendees"
import { useEvent } from "../hooks/useEvent"

function AttendeeInfoPage(){
    const {id} = useParams()
    const eventID = Number(id)

    const { user } = useAuth()
    const{ attendees, isLoading, error} = useAttendees(eventID)
    // need to get event to get organiser id
    const {event, isLoading:eventLoading, error:eventError} = useEvent(eventID)

    if (eventLoading||isLoading) return <p>loading...</p>
    if (eventError||error) return <p>{eventError||error}</p>
    if (!event) return <p>event not found</p>

    if (!user || user.id !== event.organiser_id) {
        return <p>you are not the organiser so cannot view attendees</p>
    }

    if (!attendees || attendees.length ===0){
        return <p>no attendees have registered for this event yet (awks)</p>
    }


    return(
        <>
            <h2>a list of your number one fans (people who signed up):</h2>
            {attendees.map(attendee => 
                (<p key={attendee.id}>{attendee.name} -- {attendee.email}</p>))
            }

        </>
    
)
}

export default AttendeeInfoPage