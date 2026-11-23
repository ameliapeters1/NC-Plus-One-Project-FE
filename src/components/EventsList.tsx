import EventCard from "./EventCard";
import { useEventsList } from "../hooks/useEventsList";


function EventsList(){
    const {events, isLoading, error} = useEventsList()

    if (isLoading) return(<p>LOADING...</p>)
    if (error) return (<p>ERROR! {error} </p>)
    if (events.length===0) return(<p>No events yet :/</p>)

    return(
        <ul className="event-list">
            {events.map((event)=>(
                <EventCard 
                key = {event.id}
                id = {event.id}
                title={event.title}
                starts_at={event.starts_at}
                />
            ))}
        </ul>
    )
}

export default EventsList