import { useEffect, useState } from "react";
import type { Event } from "../types/eventsTypes";
import EventCard from "./EventCard";


function EventsList(){
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const loadEvents = async ()=>{
            setIsLoading(true)
            setError(null)

            try{
                const response = await fetch(import.meta.env.VITE_API_URL + "/api/events")
                if (!response.ok){
                    throw new Error(`Could not load events - ${response.status}`)
                }

                const data: { events: Event[] } = await response.json()
                setEvents(data.events)
            } catch (err){
                setError(err instanceof Error ? err.message : "Oops something went wrong")
            } finally {
                setIsLoading(false)
            }
        }

        loadEvents()
    }, [])
    if (isLoading) return(<p>LOADING...</p>)
    if (error) return (<p>ERROR</p>)
    if (events.length===0) return(<p>No events yet :/</p>)

    return(
        <ul className="event-list">
            {events.map((event)=>(
                <EventCard 
                key = {event.id}
                title={event.title}
                starts_at={event.starts_at}/>
            ))}
        </ul>
    )
}

export default EventsList