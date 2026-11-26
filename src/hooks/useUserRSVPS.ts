import { useState, useEffect } from "react";
import type { RSVP } from "../types/eventsTypes";
import { getUserRSVPs } from "../api/client";

export function useUserRSVPs(enabled = true){
    const [events, setEvents] = useState<RSVP[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        if (!enabled){
            setEvents([])
            setIsLoading(false)
            setError(null)
            return
        }
        const fetchRSVPs = async ()=>{
            setIsLoading(true)
            setError(null)

            try{
                const data = await getUserRSVPs()
                setEvents(data)
            } catch (err){
                setError(err instanceof Error ? err.message : "Oops something went wrong")
            } finally {
                setIsLoading(false)
            }
        }

        fetchRSVPs()
    }, [])
    return { events, isLoading, error}
}