import { useState, useEffect } from "react"
import type { FetchedEvent } from "../types/eventsTypes"

export function useEvent(id: number) {
    const [event, setEvent] = useState<FetchedEvent | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    
    async function fetchEvent() {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch(import.meta.env.VITE_API_URL + `/api/events/${id}`) 
            if (!response.ok) {
                throw new Error("Failed to fetch event")
            }
            const data = await response.json()
            setEvent(data.event)
        } catch (err) {
                setError(`no event ${id}`)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchEvent()       
    } , [id])
    return { event, isLoading, error, refetch: fetchEvent}
}