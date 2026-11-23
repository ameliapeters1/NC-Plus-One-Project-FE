import { useState, useEffect } from "react";
import type { Event } from "../types/eventsTypes";

export function useEventsList(){
    const [events, setEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
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
    return { events, isLoading, error}
}