import { Link } from "react-router"
import type { RSVP } from "../types/eventsTypes"
import { dateFromIsoTime, timeFromIsoTime } from "../utils/dateConversion"

interface AccountRSVPCardProps{
    event: RSVP
}

function AccountRSVPCard({event}:AccountRSVPCardProps){
    return(
    <Link key={event.id} to={`/events/${event.id}`} className="account-rsvp-card">
        <h2>{event.title.toLowerCase()}</h2>
        <p>date: {dateFromIsoTime(event.starts_at)}</p>
        <p>time: {timeFromIsoTime(event.starts_at)}</p>
        <p>rsvp date: {dateFromIsoTime(event.rsvp_date)}</p>
    </Link>
    )
}

export default AccountRSVPCard