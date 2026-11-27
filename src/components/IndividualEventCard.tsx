import type { FetchedEvent } from "../types/eventsTypes";
import { dateFromIsoTime, timeFromIsoTime } from "../utils/dateConversion";

interface IndividualEventCardProps{
    event: FetchedEvent
}

function IndividualEventCard({event}:IndividualEventCardProps){
    const date = dateFromIsoTime(event.starts_at)
    const startTime = timeFromIsoTime(event.starts_at)
    const endTime = timeFromIsoTime(event.ends_at)

    return(
        <>
            <h2> {event.title.toLowerCase()}</h2>
            <section>
                <h3> when does the fun start? </h3>
                <p>{date}</p>
                <p>{startTime}-{endTime}</p>
            </section>
            <section>
                <h3> what is it all about? </h3>
                <p>{event.description}</p>
            </section>
            <section>
                <h3> where to find it? </h3>
                <p>{event.location}</p>
                <p>{event.address}</p>
            </section>
        </>
    )
}

export default IndividualEventCard