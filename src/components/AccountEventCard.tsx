import { Link } from "react-router"
import type { FetchedEvent } from "../types/eventsTypes"
import { dateFromIsoTime, timeFromIsoTime } from "../utils/dateConversion"

interface AccountEventCardProps{
    event: FetchedEvent
}

function AccountEventCard({event}:AccountEventCardProps){
    return(
    <Link key={event.id} to={`/events/${event.id}`} className="account-event-card">
        <h2>{event.title.toLowerCase()}</h2>
        <p>date: {dateFromIsoTime(event.starts_at)}</p>
        <p>time: {timeFromIsoTime(event.starts_at)}</p>
    </Link>
    )
}

export default AccountEventCard

