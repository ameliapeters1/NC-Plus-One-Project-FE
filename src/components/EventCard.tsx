import { dateFromIsoTime, timeFromIsoTime } from "../utils/date"

interface EventCardProps{
    title: string
    starts_at:string
}

function EventCard({title, starts_at}:EventCardProps){
    const date = dateFromIsoTime(starts_at)
    const time = timeFromIsoTime(starts_at)
    return(
        <li className="event-card">
            <h2>{title}</h2>
            <p> Date: {date}</p>
            <p> Time: {time}</p>
        </li>
    )
}

export default EventCard