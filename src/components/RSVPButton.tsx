import { useUserRSVPs } from "../hooks/useUserRSVPs"
import { useAuth } from "../context/AuthContext"
import { deleteRSVP, RSVP } from "../api/client"
import { useEffect, useState } from "react"

interface RSVPButtonProps{
    eventID:number
}
function RSVPButton({eventID}:RSVPButtonProps){
    const [hasRSVPed, setHasRSVPed] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const {user} = useAuth()
    const { events, isLoading, error } = useUserRSVPs(!!user)

    // true if for any of the events in the array match the eventID given
    useEffect(()=>{
        setHasRSVPed(events.some(event => event.id === eventID))
    }, [events, eventID]
)
    
    async function handleRSVP(){
        setIsSubmitting(true)
        try{
            if (hasRSVPed){
                await deleteRSVP(eventID)
                setHasRSVPed(false)
            } else {
                await RSVP(eventID)
                setHasRSVPed(true)
            }
            
        } catch(err){
            err instanceof Error ? err.message:"uh oh issues occurred"
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!user) return null
    if (isLoading) return <p>loading...</p>
    if (error) return <p>{error}</p>

    return(
        <button onClick={handleRSVP} disabled={isSubmitting}>{
            isSubmitting ? 
                "processing...":
                hasRSVPed ? "cancel fun and delete rsvp :(": "rsvp to have the best time of your life :)"}
        </button>
    )
}

export default RSVPButton