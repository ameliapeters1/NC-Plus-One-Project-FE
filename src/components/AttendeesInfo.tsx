import { Link } from "react-router"
import { useAttendees } from "../hooks/useAttendees"

interface AttendeesInfoProps{
    eventID: number
}

function AttendeesInfo({eventID}:AttendeesInfoProps){
    const { attendees, isLoading, error} = useAttendees(eventID)

    if (isLoading) return <p>loading...</p>
    if (error) return <p>{error}</p>
    if (!attendees || attendees.length ===0){
        return <p>no attendees have registered for this event yet (awks)</p>
    }

    return(
        <section className="attendee-info">
            <p>{attendees.length} ppl going</p>
            <Link to={`/${eventID}/attendees`}>more info on ppl here</Link>
        </section>
    )
}

export default AttendeesInfo