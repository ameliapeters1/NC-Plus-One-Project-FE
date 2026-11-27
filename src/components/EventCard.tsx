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
            <h2>{title.toLowerCase()}</h2>
            <p> date: {date}</p>
            <p> start time: {time}</p>
            <Link to={`/events/${id}`}>view event</Link>
        </li>
    )
}

export default EventCard