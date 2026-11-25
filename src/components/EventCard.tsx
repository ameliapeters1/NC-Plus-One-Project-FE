import { Link } from "react-router"
import { dateFromIsoTime, timeFromIsoTime } from "../utils/dateConversion"

interface EventCardProps{
    id: number
    title: string
    starts_at:string
}

function EventCard({id, title, starts_at}:EventCardProps){
    const date = dateFromIsoTime(starts_at)
    const time = timeFromIsoTime(starts_at)
    return(
        <li className="event-card">
            <h2>{title}</h2>
            <p> Date: {date}</p>
            <p> Start time: {time}</p>
            <Link to={`/events/${id}`}>View Event</Link>
        </li>
    )
}

export default EventCard