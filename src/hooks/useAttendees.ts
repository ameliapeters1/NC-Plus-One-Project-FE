import { useState, useEffect } from "react"
import { getAttendees } from "../api/client"

interface Attendee{
    id: number,
    name: string,
    email:string
}

export function useAttendees(eventID: number) {
    const [attendees, setAttendees] = useState<Attendee[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect (() => {
        const fetchAttendees = async () => {
            setIsLoading(true)
            setError(null)

        try {
            const data = await getAttendees(eventID)
            setAttendees(data)
        } catch (err) {
                setError(`you're not the organiser`)
        } finally {
            setIsLoading(false)
        }
        }
    fetchAttendees()       
    } , [eventID])
    return { attendees, isLoading, error}
}